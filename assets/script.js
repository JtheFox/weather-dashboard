const apiKey = 'c83927aa6d875367b080fc58ae45ad67';
const historyLength = 8;

$(function() {
    // set previously searched city buttons on load
    historyButtons();
    // create click event for search buttons
    $('.searchBtn').on('click', function(event) {   
        // get search parameter
        let searchVal = $(event.target).text().replaceAll(/\s+/g, ' ');
        // check if user clicked searchbar button
        if (!searchVal || /^Search$/.test(searchVal)) {
            searchVal = $('.searchInput').val();
            $('.searchInput').val('');
        } 
        if (searchVal.length < 4) {
            alert('Search criteria must be at least 4 characters')
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
                // display response
                displayWeather(weatherData);
                // store search in localStorage
                let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
                if (history.find(e => e.location.city === weatherData.location.city)) return;
                history.unshift(weatherData)
                if (history.length === historyLength) history.pop();
                localStorage.setItem('weatherHistory', JSON.stringify(history));
                // add to search history buttons
                historyButtons();
            })
            .catch(err => {
                console.error(err);
                if (err === 'No results found') alert(err);
                else alert ('There was an issue with your search request');
            });
    });
});

const displayWeather = (data) => {
    // display current weather values from api response
    $('.city').text(`${data.location.city}, ${data.location.country}`);
    $('.currDate').text(`(${data.current.date})`);
    $('.currWeatherIcon').attr('src', data.current.cond.icon).attr('alt', data.current.cond.desc);
    $('.currTemp').text(`${data.current.temp} ??F`);
    $('.currWind').text(`${data.current.wind} mph`);
    $('.currHumidity').text(`${data.current.humidity}%`);
    $('.currUV').text(data.current.uv);
    $('.currUV').css('color', 'white')
    if (data.current.uv < 3) $('.currUV').css('background-color','var(--green)');
    else if (data.current.uv < 6) $('.currUV').css({'background-color': 'var(--yellow)', 'color': 'black'});
    else if (data.current.uv < 8) $('.currUV').css('background-color','var(--orange)');
    else $('.currUV').css('background-color','var(--red)');
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

const historyButtons = () => {
    $('.historyBtns').html('');
    // display last 8 cities of search history as buttons
    let cityHistory = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    for (const data of cityHistory) $('.historyBtns').append(`<div class="btn btn-secondary my-1 w-75 searchBtn cityBtn" value="${data.location.city}">${data.location.city}</div>`);
    if (cityHistory[0]) displayWeather(cityHistory[0]);
}