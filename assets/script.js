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

        console.log(`Searching for weather in ${searchVal}`)       
    });
});