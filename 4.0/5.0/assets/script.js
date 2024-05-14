function fetchWeather(city) {
    const apiKey = '6a8694fa3bmsha05ae5fd68ca934p14dda8jsn4c9e30239907';
    const apiUrl = `https://meteostat.p.rapidapi.com/stations/search?q=${city}`;

    fetch(apiUrl, {
        headers: {
            'x-rapidapi-host': 'meteostat.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta meteo');
            }
            return response.json();
        })
        .then(data => {
            console.log('Risposta dalla ricerca della stazione:', data);
            const stationId = data.data[0].id;
            console.log('ID della stazione:', stationId);
            fetchCurrentWeather(stationId);
        })
        .catch(error => {
            console.error('Si è verificato un errore durante la ricerca della stazione:', error);
        });
}

function fetchCurrentWeather(stationId) {
    const apiKey = 'TUO_API_KEY';
    const apiUrl = `https://meteostat.p.rapidapi.com/point/current`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'meteostat.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        },
        body: JSON.stringify({
            'stations': [stationId]
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta meteo');
            }
            return response.json();
        })
        .then(data => {
            console.log('Risposta dal meteo attuale:', data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Si è verificato un errore durante la richiesta del meteo attuale:', error);
        });
}

function displayWeather(data) {
    const temperatureElement = document.getElementById('temperature-' + data.name.toLowerCase());
    const conditionElement = document.getElementById('weather-condition-' + data.name.toLowerCase());

    temperatureElement.textContent = `${data.main.temp}°C`;
    conditionElement.textContent = data.weather[0].description;
}

const cities = ['Paris', 'Brussels', 'Rome'];

function fetchWeatherForCities() {
    cities.forEach((city, index) => {
        setTimeout(() => {
            fetchWeather(city);
        }, index * 2000); // Ritardo di 2 secondi tra ogni richiesta
    });
}

fetchWeatherForCities();
