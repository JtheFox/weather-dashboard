const dummydata = {
    call: 'https://api.weatherapi.com/v1/current.json?key=6ddcde344581459b904202903223005&q=London&aqi=no',
    response: {
        "location": {
            "name": "London",
            "region": "City of London, Greater London",
            "country": "United Kingdom",
            "lat": 51.52,
            "lon": -0.11,
            "tz_id": "Europe/London",
            "localtime_epoch": 1654017882,
            "localtime": "2022-05-31 18:24"
        },
        "current": {
            "last_updated_epoch": 1654017300,
            "last_updated": "2022-05-31 18:15",
            "temp_c": 14.0,
            "temp_f": 57.2,
            "is_day": 1,
            "condition": {
                "text": "Moderate rain at times",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/299.png",
                "code": 1186
            },
            "wind_mph": 3.8,
            "wind_kph": 6.1,
            "wind_degree": 320,
            "wind_dir": "NW",
            "pressure_mb": 1012.0,
            "pressure_in": 29.88,
            "precip_mm": 0.5,
            "precip_in": 0.02,
            "humidity": 67,
            "cloud": 25,
            "feelslike_c": 12.9,
            "feelslike_f": 55.3,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "uv": 3.0,
            "gust_mph": 13.6,
            "gust_kph": 22.0
        }
    }
}