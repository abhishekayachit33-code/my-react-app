import { useState } from 'react'

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
        disabled={loading}
      />
      <button type="submit" className="search-btn" disabled={loading}>
        {loading ? '⏳' : '🔍 Search'}
      </button>
    </form>
  )
}

export default SearchBar
