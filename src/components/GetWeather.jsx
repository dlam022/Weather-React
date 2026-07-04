import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import LoadingScreen from "./LoadingScreen";


function GetWeather({ input }) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        async function weatherapi() {
            setLoading(true);
            setWeatherData(null);
            let url = await fetch(`http://api.weatherapi.com/v1/current.json?key=6d40e541c47149bfb8b225446240805&q=${input}&aqi=no`)
            
            const data = await url.json();
            console.log(data);

            setWeatherData(data);
            setLoading(false);

        } 
        weatherapi();
    }, [input]);

    if(loading) return <LoadingScreen />
    return weatherData ? <WeatherDisplay data={weatherData} /> : null;
 
    
}

export default GetWeather;