const apiCall = dummydata;
const apiKey = '';
const weatherCities = ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego']

$(function() {
    // add predefined cities to city search buttons
    $('.cityBtn').each((i, btn) => $(btn).text(weatherCities[i]).val(weatherCities[i]));

    // display last city called, fetch new data if it's been an hour+ since fetched

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
            // display invalid search criteria error
            return;
        }
                
        // parse search text
        const geoParam = searchVal.replaceAll(', ', ',')
        // geocoding api call
        const weatherData = { 
            location: {},
            current: {},
            forecast: [] 
        };
        // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${geoParam}&limit=1&appid=${apikey}`)
        //     .then(response => response.json())
        //     .then(data => {})
        //     .catch(err => console.log(err));
        let data = apiCall.geocoding.response
        weatherData.location = {
            city: data.name,
            state: data.state,
            country: data.country,
            coords: [data.lat, data.lon]
        }

        // weather api call
        // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.location.coords[0]}&lon=${weatherData.location.coords[0]}&exclude=hourly,minutely&units=imperial&appid={apikey}`)
        //     .then(response => response.json())
        //     .then(data => {})
        //     .catch(err => console.log(err));
        data = apiCall.onecall.response;
        const current = data.current;
        const forecast = data.daily.slice(1,6)
        weatherData.current = {
            time: current.dt,
            date: moment(current.dt).format(l),
            cond: current.weather[0].main,
            temp: current.temp,
            wind: current.wind_speed,
            humidity: current.humidity,
            uv: current.uvi
        }
        for (let day of forecast) {
            weatherData.forecast.push({
                date: moment(day.dt).format(l),
                cond: day.weather[0].main,
                temp: day.temp.day,
                wind: day.wind_speed,
                humidity: day.humidity
            });
        }

        // display response
        displayWeather(apiCall.response, apiCall.call);
    });
});

const displayWeather = (data) => {
    // display current weather values from api response
    $('.city').text(`${data.location.city}, ${data.location.country}`);
    $('.currDate').text(data.location);
    //TODO: Set up assigned icons for weather conditions
    $('.currWeatherIcon').attr('src', ``).attr('alt', ``);
    $('.currTemp').text(`${data.current.temp} °F`);
    $('.currWind').text(`${data.current.wind} mph`);
    $('.currHumidity').text(`${data.current.humidity}%`);
    $('.currUV').text(data.current.uv);
}
