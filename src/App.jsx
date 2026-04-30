import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import './App.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      const data = await res.json()

      if (data.cod !== 200) {
        setError(`❌ City "${city}" not found. Please try again.`)
      } else {
        setWeather(data)
      }
    } catch (err) {
      setError('⚠️ Something went wrong. Check your internet connection.')
    } finally {
      setLoading(false)
    }
  }

  // Change background gradient based on weather condition
  const getBgClass = () => {
    if (!weather) return 'bg-default'
    const main = weather.weather[0].main.toLowerCase()
    if (main.includes('clear')) return 'bg-clear'
    if (main.includes('cloud')) return 'bg-clouds'
    if (main.includes('rain') || main.includes('drizzle')) return 'bg-rain'
    if (main.includes('snow')) return 'bg-snow'
    if (main.includes('thunder')) return 'bg-thunder'
    if (main.includes('mist') || main.includes('fog') || main.includes('haze')) return 'bg-mist'
    return 'bg-default'
  }

  return (
    <div className={`app ${getBgClass()}`}>
      <div className="container">

        {/* Header */}
        <div className="header">
          <h1 className="app-title">🌤️ Weather App</h1>
          <p className="app-subtitle">Search any city to get live weather</p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={fetchWeather} loading={loading} />

        {/* Loading Spinner */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        )}

        {/* Error Message */}
        {error && <div className="error-box">{error}</div>}

        {/* Weather Card */}
        {weather && !loading && <WeatherCard data={weather} />}

        {/* Default Placeholder */}
        {!weather && !loading && !error && (
          <div className="placeholder">
            <div className="placeholder-icon">🌍</div>
            <p>Search for a city to see the weather</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
