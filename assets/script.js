const apiCall = dummydata;
const weatherCities = ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego']

$(function() {
    // add predefined cities to city search buttons
    $('.cityBtn').each((i, btn) => $(btn).text(weatherCities[i]).val(weatherCities[i]));

    // create click event for search buttons
    $('.searchBtn').on('click', function(event) {
        // get city name for api call
        let searchVal = $(event.target).val();
        // check if user clicked searchbar button
        if (!searchVal) {
            searchVal = $('.searchInput').val();
            $('.searchInput').val('');
        }

        // TODO: Add click rate limiter

        console.log(`Searching for weather in ${searchVal}`);
        // api call
        // display response
        displayWeather(apiCall.response);
    });
});

const displayWeather = (data) => {
    // display current weather values from api response
    $('.city').text(data.location.name);
    $('.currDate').text(parseLocalTime(data.location.localtime));
    $('.currWeatherIcon').attr('src', `https:${data.current.condition.icon}`).attr('alt', data.current.condition.text);
    console.log(`https:${data.current.condition.icon}`);
    $('.currTemp').text(`${data.current.temp_f} °F`);
    $('.currWind').text(`${data.current.wind_mph} mph`);
    $('.currHumidity').text(`${data.current.humidity}%`);
    $('.currUV').text(data.current.uv);
}

const parseLocalTime = (date) => {
    date = date.split(' ')[0].split('-')
    date.push(date.shift());
    return date.join('/');
}