function WeatherCard({ data }) {
  const {
    name,
    sys,
    main,
    weather,
    wind,
    visibility,
  } = data

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
  const description = weather[0].description
  const temp = Math.round(main.temp)
  const feelsLike = Math.round(main.feels_like)
  const humidity = main.humidity
  const windSpeed = wind.speed
  const visibilityKm = (visibility / 1000).toFixed(1)

  return (
    <div className="weather-card">
      {/* City & Country */}
      <div className="city-info">
        <h2 className="city-name">
          📍 {name}, {sys.country}
        </h2>
      </div>

      {/* Weather Icon & Temp */}
      <div className="weather-main">
        <img src={iconUrl} alt={description} className="weather-icon" />
        <div className="temperature">{temp}°C</div>
        <p className="description">{description}</p>
      </div>

      {/* Weather Details Grid */}
      <div className="weather-details">
        <div className="detail-card">
          <span className="detail-icon">🌡️</span>
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{feelsLike}°C</span>
        </div>
        <div className="detail-card">
          <span className="detail-icon">💧</span>
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-card">
          <span className="detail-icon">💨</span>
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{windSpeed} m/s</span>
        </div>
        <div className="detail-card">
          <span className="detail-icon">👁️</span>
          <span className="detail-label">Visibility</span>
          <span className="detail-value">{visibilityKm} km</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
