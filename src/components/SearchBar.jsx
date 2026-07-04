import { useState } from "react";

function SearchBar({ search }) {
  const [input, setInput] = useState("");

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Enter city name..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        // onClick={(event) => {
        //     if(event.key === "Enter") {
        //         <GetWeather input={input} />;
        //     }
        // }}
      />
      <button className="search-btn" onClick={() => search(input)}>
        Search
      </button>
      {/* {city && <GetWeather input={city} />} */}

    </div>
  );
}

export default SearchBar;
