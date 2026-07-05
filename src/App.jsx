import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import GetWeather from "./components/GetWeather";

function App() {
  const [city, setCity] = useState("Seattle");
  const [isMetric, setIsMetric] = useState(false);

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <SearchBar
          search={setCity}
          isMetric={isMetric}
          onToggleUnits={() => setIsMetric((prev) => !prev)}
        />

        {city && <GetWeather input={city} isMetric={isMetric} />}
      </main>
    </div>
  );
}

export default App;
