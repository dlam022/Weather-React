import { GetWeatherIcons } from "./GetWeatherIcons";
import visibilityIcon from "../assets/visibility.png";

function formatLocalDateTime(localtime) {
  const [datePart, timePart] = localtime.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);

  const date = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(year, month - 1, day));

  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  const minuteStr = String(minute).padStart(2, "0");
  const time = `${hour12}:${minuteStr} ${period}`;

  return { date, time };
}

function WeatherDisplay({ data }) {
  const { date, time } = formatLocalDateTime(data.location.localtime);

  return (
    <>
      <h3>{data.location.name}</h3>
      <div className="date-time">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="logo-temp">
        <div className="logo-left">
          <img
            className="weather-icon"
            src={GetWeatherIcons(data.current.condition.code)}
            alt={data.current.condition.text}
          />
        </div>
        <div className="info-right">
            <h1 className="temperature">{data.current.temp_f}</h1>
            <h3>{data.current.condition.text}</h3>
            <p>Feels like {data.current.feelslike_f}</p>
        </div>
      </div>

      <div className="current-information">
        <div className="condition-container">
            <img src="https://cdn.meteocons.com/3.0.0-next.10/svg/line/humidity.svg"
            alt="Humidity logo"
            width="64"
            height="64"
            />
            <div className="grid-container">
                <p>Humidity</p>
                <p>{data.current.humidity}%</p>  
            </div>
        </div>

        <div className="condition-container">
            <img src="https://cdn.meteocons.com/3.0.0-next.10/svg/fill/wind.svg" alt="Wind logo" width="64" height="64"/>
            <div className="grid-container">
                <p>Wind</p>
                <p>{data.current.wind_mph}</p> 
            </div>
        </div>

        <div className="condition-container">
            <img src="https://cdn.meteocons.com/3.0.0-next.10/svg/line/barometer.svg" alt="Pressure Logo" width="64" height="64"/>
            <div className="grid-container">
                <p>Pressure</p>
                <p>{data.current.pressure_in}</p>
            </div>
        </div>

        <div className="condition-container">
            <img src={visibilityIcon} alt="Visibility Logo" width="64" height="64" />
            <div className="grid-container">
                <p>Visibility</p>
                <p>{data.current.vis_miles}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default WeatherDisplay;
