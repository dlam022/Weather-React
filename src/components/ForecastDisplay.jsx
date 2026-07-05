import { GetWeatherIcons } from "./GetWeatherIcons";

function ForecastDisplay({ forecast }) {
  return (
    <div className="forecast-container">
        <h4>3-Day Forecast</h4>
      <div className="day-container">
        <p>{forecast[0].date}</p>
        <img
          src={GetWeatherIcons(forecast[0].day.condition.code)}
          alt={forecast[0].day.condition.text}
          width="64"
          height="64"
        />
        <div className="forecast-temp">
            <p>{forecast[0].day.maxtemp_f}</p>
            <p>{forecast[0].day.mintemp_f}</p>
        </div>
      </div>

      <div className="day-container">
        <p>{forecast[1].date}</p>
        <img
          src={GetWeatherIcons(forecast[1].day.condition.code)}
          alt={forecast[1].day.condition.text}
          width="64"
          height="64"
        />
        <div className="forecast-temp">
            <p>{forecast[1].day.maxtemp_f}</p>
            <p>{forecast[1].day.mintemp_f}</p>
        </div>
      </div>

      <div className="day-container">
        <p>{forecast[2].date}</p>
        <img
          src={GetWeatherIcons(forecast[2].day.condition.code)}
          alt={forecast[2].day.condition.text}
          width="64"
          height="64"
        />
        <div className="forecast-temp">
            <p>{forecast[2].day.maxtemp_f}</p>
            <p>{forecast[2].day.mintemp_f}</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastDisplay;
