function WeatherDisplay({ data }) {
  console.log("run display");
  return (
    <div className="display-container">
      <h3>{data.location.name}</h3>
      <h1>{data.current.temp_f}</h1>
      <h3>{data.current.condition.text}</h3>
      <p>{data.location.localtime}</p>
      <p>{data.current.feelslike_f}</p>
      <p>Humidity: {data.current.humidity}</p>
      <p>Wind: {data.current.wind_mph}</p>
      <p>Pressure: {data.current.pressure_in}</p>
      <p>Visibility: {data.current.vis_miles}</p>
    </div>
  );
}

export default WeatherDisplay;
