import { useState } from "react";
import GetWeather from "./GetWeather";

function SearchBar() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Enter city name..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onClick={(event) => {
            if(event.key === "Enter") {
                <GetWeather input={input} />
            }
        }}
      />
      <button className="search-btn" onClick= {() => setCity(input)}>
        Search
      </button>
      {city && <GetWeather input={city} />}

    </div>
  );
}

export default SearchBar;
