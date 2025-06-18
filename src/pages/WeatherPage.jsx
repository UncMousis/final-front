import { useEffect, useState } from "react";

function WeatherPage() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = "b4f090891917d6bb9e34d6944d5056b3";
        const city = "Amman";

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log("Weather API response:", data); // 👈 ADD THIS
                setWeather(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching weather:", err);
                setLoading(false);
            });

    }, []);

    return (
        <div className="container">
            <div className="weather-box">
                <h1>🌤️ Current Weather</h1>
                {loading ? (
                    <p>Loading weather...</p>
                ) : weather && weather.main ? (
                    <>
                        <p><strong>City:</strong> {weather.name}</p>
                        <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
                        <p><strong>Condition:</strong> {weather.weather[0].description}</p>
                    </>
                ) : (
                    <p>Could not load weather data.</p>
                )}
            </div>
        </div>
    );
}

export default WeatherPage;
