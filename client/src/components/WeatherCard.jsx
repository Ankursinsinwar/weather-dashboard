import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { city, temperature, weather: condition, icon, humidity, windSpeed } = weather;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <hr />
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={condition} />
      <p><strong>{condition}</strong></p>
      <hr />
      <p>🌡️ Temp: {temperature}°C</p>
      <hr />
      <p>💧 Humidity: {humidity}%</p>
      <hr />
      <p>💨 Wind: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
