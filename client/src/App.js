import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(res.data);
    } catch (err) {
      alert('City not found | please enter a valid city name');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>🧐 Real-Time Weather Dashboard</h1>
      <hr/><br/>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p>🔯 Loading...</p>}
      <WeatherCard weather={weatherData} />
    </div>
  );
}

export default App;
