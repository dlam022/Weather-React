import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import LoadingScreen from "./LoadingScreen";

const API_KEY = "6d40e541c47149bfb8b225446240805";

function GetWeather({ input, isMetric }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setWeatherData(null);
      setError(null);

      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}&aqi=no`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.message ?? "Could not load weather");
        }

        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (input) {
      fetchWeather();
    }
  }, [input]);

  if (loading) {
    return (
      <div className="display-container">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="display-container">
        <div className="error-card">{error}</div>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <div className="display-container">
      <WeatherDisplay data={weatherData} isMetric={isMetric} />
    </div>
  );
}

export default GetWeather;
