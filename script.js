async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const cityName = cityInput.value;

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "eb46eb05a7msh41e7648a70e7605p168101jsn3c8bbc3dff3f",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
    };
    await fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            const country = document.getElementById("country");
            const name = document.getElementById("name");
            const weatherIcon = document.getElementById("weatherIcon");
            const temperature = document.getElementById("temperature");
            const description = document.getElementById("description");
            const humidity = document.getElementById("humidity");

            const cntry = data.location.country;
            const nm = data.location.name;
            const icon = data.current.condition.icon;
            const temp = data.current.temp_c;
            const desc = data.current.condition.text;
            const hum = data.current.humidity;

            country.textContent = `country: ${cntry}`;
            name.textContent = `name: ${nm}`;
            weatherIcon.innerHTML = `<img src="https:${icon}" alt="Weather Icon">`;
            temperature.textContent = `${temp}°C`;
            description.textContent = desc;
            humidity.textContent = `humidity: ${hum}`;

            console.log(data);
        })
        .catch((error) => {
            console.log(error);
            alert("An error occurred while fetching weather data.");
        });
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
