import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import GetWeather from "./components/GetWeather";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="content">
      <div className="left-container">
        <h1>Weather Forecast</h1>
      </div>

      <div className="right-container">
        <SearchBar search={setCity} />
        {city && <GetWeather input={city} />}
      </div>
    </div>
  );
}

export default App;
