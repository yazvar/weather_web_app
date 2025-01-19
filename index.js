async function getWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();
    if(!cityInput) {
        document.getElementById('weatherResult').innerHTML = `<p>Error: Please enter a city name.</p>`;
        return;
    }
    const apiKey = 'fbe47e09974f8aca29e5bb4747d3f292';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error('City not found');
        const data = await response.json();
        const weatherResult = document.getElementById('weatherResult');
        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
