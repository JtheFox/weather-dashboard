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
        const weatherData = {};
        // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${geoParam}&limit=1&appid=${apikey}`)
        //     .then(response => response.json())
        //     .then(data => weatherData.location = { })
        //     .catch(err => console.log(err));

        // weather api call

        // display response
        displayWeather(apiCall.response, apiCall.call);
    });
});

const displayWeather = (data, call) => {
    // display current weather values from api response
    $('.city').text();
    $('.currDate').text();
    $('.currWeatherIcon').attr('src', ``).attr('alt', ``);
    console.log(`https:${apiKey}`);
    $('.currTemp').text(`${apiKey} °F`);
    $('.currWind').text(`${apiKey} mph`);
    $('.currHumidity').text(`${apiKey}%`);
    $('.currUV').text();
}
