import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import GetWeather from './components/GetWeather';

function App() {
  const [city, setCity] = useState("");
  
  return (
    <>
      <h1>Weather Forecast</h1>
      <SearchBar search={setCity}/>
      {city && <GetWeather input={city}/> }
    </>
  )
}

export default App
