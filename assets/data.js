const dummydata = {
    geocoding: {    
        call: 'http://api.openweathermap.org/geo/1.0/direct?q=Cary,NC,\&limit=1&appid={{apikey}}',
        response: {
            "name": "Cary",
            "local_names": {
                "en": "Cary"
            },
            "lat": 35.7882893,
            "lon": -78.7812081,
            "country": "US",
            "state": "North Carolina"
        }
    },
    onecall: {
        call: 'https://api.openweathermap.org/data/2.5/onecall?lat=35.7882893&lon=-78.7812081&exclude=hourly,minutely&units=imperial&appid={{apikey}}',
        response: {
            "lat": 35.7883,
            "lon": -78.7812,
            "timezone": "America/New_York",
            "timezone_offset": -14400,
            "current": {
                "dt": 1654104975,
                "sunrise": 1654077630,
                "sunset": 1654129547,
                "temp": 91.04,
                "feels_like": 98.69,
                "pressure": 1012,
                "humidity": 54,
                "dew_point": 72.09,
                "uvi": 9.57,
                "clouds": 40,
                "visibility": 10000,
                "wind_speed": 1.99,
                "wind_deg": 225,
                "wind_gust": 5.01,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ]
            },
            "daily": [
                {
                    "dt": 1654102800,
                    "sunrise": 1654077630,
                    "sunset": 1654129547,
                    "moonrise": 1654082580,
                    "moonset": 1654137840,
                    "moon_phase": 0.07,
                    "temp": {
                        "day": 91.58,
                        "min": 68.63,
                        "max": 91.58,
                        "night": 76.03,
                        "eve": 77.34,
                        "morn": 69.8
                    },
                    "feels_like": {
                        "day": 97.68,
                        "night": 76.06,
                        "eve": 77.88,
                        "morn": 70
                    },
                    "pressure": 1012,
                    "humidity": 50,
                    "dew_point": 70.3,
                    "wind_speed": 7.05,
                    "wind_deg": 144,
                    "wind_gust": 13.09,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": 33,
                    "pop": 0.2,
                    "rain": 0.33,
                    "uvi": 9.88
                },
                {
                    "dt": 1654189200,
                    "sunrise": 1654164011,
                    "sunset": 1654215984,
                    "moonrise": 1654172040,
                    "moonset": 1654227060,
                    "moon_phase": 0.1,
                    "temp": {
                        "day": 93.83,
                        "min": 70.02,
                        "max": 96.1,
                        "night": 75.09,
                        "eve": 90.32,
                        "morn": 70.39
                    },
                    "feels_like": {
                        "day": 92.77,
                        "night": 75.6,
                        "eve": 90.18,
                        "morn": 70.81
                    },
                    "pressure": 1008,
                    "humidity": 30,
                    "dew_point": 58.28,
                    "wind_speed": 9.8,
                    "wind_deg": 247,
                    "wind_gust": 22.26,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": 2,
                    "pop": 0.49,
                    "rain": 0.21,
                    "uvi": 9.98
                },
                {
                    "dt": 1654275600,
                    "sunrise": 1654250394,
                    "sunset": 1654302421,
                    "moonrise": 1654261800,
                    "moonset": 0,
                    "moon_phase": 0.13,
                    "temp": {
                        "day": 78.24,
                        "min": 66.33,
                        "max": 78.24,
                        "night": 66.56,
                        "eve": 76.86,
                        "morn": 68.34
                    },
                    "feels_like": {
                        "day": 78.35,
                        "night": 66.07,
                        "eve": 76.73,
                        "morn": 68.97
                    },
                    "pressure": 1011,
                    "humidity": 55,
                    "dew_point": 60.93,
                    "wind_speed": 9.15,
                    "wind_deg": 35,
                    "wind_gust": 21.23,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": 100,
                    "pop": 0.7,
                    "rain": 1.41,
                    "uvi": 5.42
                },
                {
                    "dt": 1654362000,
                    "sunrise": 1654336778,
                    "sunset": 1654388856,
                    "moonrise": 1654351680,
                    "moonset": 1654315920,
                    "moon_phase": 0.16,
                    "temp": {
                        "day": 82.9,
                        "min": 61.65,
                        "max": 82.9,
                        "night": 68.32,
                        "eve": 73.76,
                        "morn": 66.9
                    },
                    "feels_like": {
                        "day": 81.23,
                        "night": 67.44,
                        "eve": 73.24,
                        "morn": 66.43
                    },
                    "pressure": 1014,
                    "humidity": 31,
                    "dew_point": 49.93,
                    "wind_speed": 9.22,
                    "wind_deg": 123,
                    "wind_gust": 14.36,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": 0,
                    "pop": 0,
                    "uvi": 9.13
                },
                {
                    "dt": 1654448400,
                    "sunrise": 1654423164,
                    "sunset": 1654475290,
                    "moonrise": 1654441680,
                    "moonset": 1654404480,
                    "moon_phase": 0.19,
                    "temp": {
                        "day": 81.68,
                        "min": 61.02,
                        "max": 81.93,
                        "night": 67.51,
                        "eve": 73.54,
                        "morn": 66.4
                    },
                    "feels_like": {
                        "day": 80.51,
                        "night": 66.6,
                        "eve": 72.72,
                        "morn": 65.7
                    },
                    "pressure": 1014,
                    "humidity": 33,
                    "dew_point": 49.82,
                    "wind_speed": 8.46,
                    "wind_deg": 134,
                    "wind_gust": 23.98,
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": 100,
                    "pop": 0,
                    "uvi": 0.9
                },
                {
                    "dt": 1654534800,
                    "sunrise": 1654509552,
                    "sunset": 1654561724,
                    "moonrise": 1654531680,
                    "moonset": 1654492740,
                    "moon_phase": 0.22,
                    "temp": {
                        "day": 86.68,
                        "min": 62.26,
                        "max": 88.29,
                        "night": 74.28,
                        "eve": 79.54,
                        "morn": 68.81
                    },
                    "feels_like": {
                        "day": 85.05,
                        "night": 73.81,
                        "eve": 79.54,
                        "morn": 68.83
                    },
                    "pressure": 1012,
                    "humidity": 34,
                    "dew_point": 55.69,
                    "wind_speed": 7.49,
                    "wind_deg": 179,
                    "wind_gust": 18.92,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": 3,
                    "pop": 0,
                    "uvi": 1
                },
                {
                    "dt": 1654621200,
                    "sunrise": 1654595941,
                    "sunset": 1654648156,
                    "moonrise": 1654621740,
                    "moonset": 1654580880,
                    "moon_phase": 0.25,
                    "temp": {
                        "day": 92.44,
                        "min": 69.33,
                        "max": 92.44,
                        "night": 77.85,
                        "eve": 80.17,
                        "morn": 75.07
                    },
                    "feels_like": {
                        "day": 93.27,
                        "night": 78.67,
                        "eve": 82.6,
                        "morn": 75.76
                    },
                    "pressure": 1010,
                    "humidity": 37,
                    "dew_point": 63.03,
                    "wind_speed": 7.56,
                    "wind_deg": 186,
                    "wind_gust": 24.92,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": 54,
                    "pop": 0.46,
                    "rain": 0.54,
                    "uvi": 1
                },
                {
                    "dt": 1654707600,
                    "sunrise": 1654682332,
                    "sunset": 1654734587,
                    "moonrise": 1654711800,
                    "moonset": 1654668840,
                    "moon_phase": 0.28,
                    "temp": {
                        "day": 95.05,
                        "min": 71.42,
                        "max": 95.05,
                        "night": 73.35,
                        "eve": 83.75,
                        "morn": 72.43
                    },
                    "feels_like": {
                        "day": 98.56,
                        "night": 74.66,
                        "eve": 86.86,
                        "morn": 73.45
                    },
                    "pressure": 1011,
                    "humidity": 39,
                    "dew_point": 66.79,
                    "wind_speed": 10.11,
                    "wind_deg": 206,
                    "wind_gust": 26.96,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": 94,
                    "pop": 1,
                    "rain": 2.64,
                    "uvi": 1
                }
            ]
        }
    }
}