import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import LoadingScreen from "./LoadingScreen";
import ForecastDisplay from "./ForecastDisplay";


function GetWeather({ input }) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        async function weatherapi() {
            setLoading(true);
            setWeatherData(null);
            let url = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6d40e541c47149bfb8b225446240805&q=${input}&days=3&aqi=no&alerts=no`)
            
            const data = await url.json();
            console.log(data);

            setWeatherData(data);
            setLoading(false);

        } 
        weatherapi();
    }, [input]);

    if(loading) return <LoadingScreen />
    return weatherData ? (
        <div className="display-container">
            <WeatherDisplay data={weatherData} />
            <ForecastDisplay forecast={weatherData.forecast.forecastday} />
        </div>
    ) : null;
 
    
}

export default GetWeather;