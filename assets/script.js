const apiKey = 'c83927aa6d875367b080fc58ae45ad67';
const historyLength = 8;

$(function() {
    // display last city called, fetch new data if it's been an hour+ since 
    let cityHistory = JSON.parse(localStorage.getItem('history')) || [];
    console.log(cityHistory)
    for (const [i, data] of cityHistory) $($('.cityBtn')[i]).text(data.location.city)
    if (cityHistory[0]) displayWeather(cityHistory[0])
    // create click event for search buttons
    $('.searchBtn').on('click', function(event) {
        // TODO: Add click rate limiter
        
        // get search parameter
        let searchVal = $(event.target).val().replaceAll(/\s+/g, ' ');
        // check if user clicked searchbar button
        if (!searchVal) {
            searchVal = $('.searchInput').val();
            $('.searchInput').val('');
        } 
        if (searchVal.length < 4) {
            // TODO: display invalid search criteria error
            return;
        }
        // create weatherData object
        let weatherData = { 
            location: {},
            current: {},
            forecast: [] 
        };                
        // parse search text
        let geoParam = searchVal.replaceAll(', ', ',');
        geoParam = geoParam.replaceAll(' ', '%20')
        const url = 'https://api.openweathermap.org'
        // geocoding api call
        fetch(`${url}/geo/1.0/direct?q=${geoParam}&limit=1&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (!data[0]) throw 'No results found';
                data = data[0];
                weatherData.location = {
                    city: data.name,
                    state: data.state,
                    country: data.country,
                    coords: [data.lat, data.lon]
                }
                return fetch(`${url}/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`);
            })
            .then(response => response.json())
            .then(data => {
                const current = data.current;
                const forecast = data.daily.slice(1,6);
                weatherData.current = {
                    time: current.dt,
                    date: moment.unix(current.dt).format("M/D/YYYY"),
                    cond: {
                        icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
                        desc: current.weather[0].description,
                    },
                    temp: current.temp,
                    wind: current.wind_speed,
                    humidity: current.humidity,
                    uv: current.uvi
                }
                for (let day of forecast) weatherData.forecast.push({
                    date: moment.unix(day.dt).format("M/D/YYYY"),
                    cond: {
                        icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                        desc: day.weather[0].description,
                    },
                    temp: day.temp.day,
                    wind: day.wind_speed,
                    humidity: day.humidity
                });
                // store search in localStorage
                let history = JSON.parse(localStorage.getItem('history')) || [];
                if (!history.length) history.push(weatherData)
                else history.shift(weatherData)
                if (history.length >= historyLength) history = history.slice(0,8);
                localStorage.setItem('history', JSON.stringify(history));
                // display response
                displayWeather(weatherData);
            })
            .catch(err => {
                console.error(err);
                //TODO: display error on page
                return;
            });
    });
});

const displayWeather = (data) => {
    // display current weather values from api response
    $('.city').text(`${data.location.city}, ${data.location.country}`);
    $('.currDate').text(`(${data.current.date})`);
    $('.currWeatherIcon').attr('src', data.current.cond.icon).attr('alt', data.current.cond.desc);
    $('.currTemp').text(`${data.current.temp} °F`);
    $('.currWind').text(`${data.current.wind} mph`);
    $('.currHumidity').text(`${data.current.humidity}%`);
    $('.currUV').text(data.current.uv);

    // display forecast weather on cards
    $('.forecastCard').each((i, card) => {
        let forecastData = data.forecast[i];
        $(card).find('.forecastDate').text(forecastData.date);
        $(card).find('.forecastImg').attr('src', forecastData.cond.icon).attr('alt', forecastData.cond.desc);
        $(card).find('.forecastTemp').text(forecastData.temp);
        $(card).find('.forecastWind').text(forecastData.wind);
        $(card).find('.forecastHumidity').text(forecastData.humidity);
    })
}
