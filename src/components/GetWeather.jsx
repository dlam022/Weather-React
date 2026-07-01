async function GetWeather({ input }) {
    let url = `http://api.weatherapi.com/v1/current.json?key=6d40e541c47149bfb8b225446240805&q=${input}&aqi=no`

    const weatherData = await url.json();
    console.log(weatherData);
}

export default GetWeather;