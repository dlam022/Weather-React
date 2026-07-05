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

function WeatherDisplay({ data, isMetric }) {
  const { date, time } = formatLocalDateTime(data.location.localtime);
  const tempUnit = isMetric ? "C" : "F";
  const temp = isMetric ? data.current.temp_c : data.current.temp_f;
  const feelsLike = isMetric ? data.current.feelslike_c : data.current.feelslike_f;
  const wind = isMetric ? data.current.wind_kph : data.current.wind_mph;
  const windUnit = isMetric ? "kph" : "mph";
  const visibility = isMetric ? data.current.vis_km : data.current.vis_miles;
  const visibilityUnit = isMetric ? "km" : "mi";
  const pressure = isMetric ? data.current.pressure_mb : data.current.pressure_in;
  const pressureUnit = isMetric ? "mb" : "inHg";

  const stats = [
    {
      label: "Humidity",
      value: `${data.current.humidity}%`,
      icon: "https://cdn.meteocons.com/3.0.0-next.10/svg/line/humidity.svg",
    },
    {
      label: "Wind",
      value: `${data.current.wind_dir} ${wind} ${windUnit}`,
      icon: "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/wind.svg",
    },
    {
      label: "Pressure",
      value: `${pressure} ${pressureUnit}`,
      icon: "https://cdn.meteocons.com/3.0.0-next.10/svg/line/barometer.svg",
    },
    {
      label: "Visibility",
      value: `${visibility} ${visibilityUnit}`,
      icon: visibilityIcon,
    },
  ];

  return (
    <article className="weather-dashboard">
      <header className="dashboard-header">
        <div>
          <h2 className="dashboard-city">
            {data.location.name}, {data.location.region}
          </h2>
          <p className="dashboard-datetime">
            {date} • {time}
          </p>
        </div>
      </header>

      <div className="dashboard-main">
        <img
          className="weather-icon"
          src={GetWeatherIcons(data.current.condition.code)}
          alt={data.current.condition.text}
        />
        <div className="dashboard-temp-block">
          <p className="temperature">
            {Math.round(temp)}°{tempUnit}
          </p>
          <p className="condition-text">{data.current.condition.text}</p>
          <p className="feels-like">
            Feels like {Math.round(feelsLike)}°{tempUnit}
          </p>
        </div>
      </div>

      <div className="stats-row">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <img className="stat-icon" src={stat.icon} />
            <div>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default WeatherDisplay;
