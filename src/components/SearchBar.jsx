import { useState } from "react";

function SearchBar({ search, isMetric, onToggleUnits }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim()) {
      search(input.trim());
    }
  }

  return (
    <div className="top-bar">
      <form className="search-form" onSubmit={handleSubmit}>
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          className="search-input"
          placeholder="Search for a city..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>

      <button
        type="button"
        className="unit-toggle"
        onClick={onToggleUnits}
        aria-label="Toggle between Fahrenheit and Celsius"
      >
        <span className={`unit-toggle-label ${!isMetric ? "active" : ""}`}>
          °F
        </span>
        <span className={`unit-toggle-knob ${isMetric ? "metric" : ""}`} />
        <span className={`unit-toggle-label ${isMetric ? "active" : ""}`}>
          °C
        </span>
      </button>
    </div>
  );
}

export default SearchBar;
