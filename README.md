# 🌤️ Weather App

A beginner-friendly **Weather App** built with **React + Vite** that shows real-time weather data for any city in the world.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Shows temperature, feels like, humidity, wind speed & visibility
- 🎨 Dynamic background that changes based on weather condition
- ⏳ Loading spinner while fetching data
- ❌ Error handling for invalid city names
- 📱 Fully responsive (mobile + desktop)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React](https://react.dev/) | UI components |
| [Vite](https://vite.dev/) | Fast dev server & build tool |
| [OpenWeatherMap API](https://openweathermap.org/api) | Live weather data |

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR-USERNAME/weather-app.git
cd weather-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Get a free API key
- Sign up at [openweathermap.org](https://openweathermap.org/api)
- Go to **My API Keys** and copy your key
- ⚠️ New keys take **up to 2 hours** to activate

### 4. Create a `.env` file
Create a `.env` file in the root of the project:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

### 5. Run the app
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser 🎉

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx     # Search input component
│   │   └── WeatherCard.jsx   # Weather display component
│   ├── App.jsx               # Main app logic
│   ├── App.css               # All styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env                      # API key (NOT committed to git)
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_WEATHER_API_KEY` | Your OpenWeatherMap API key |

> ⚠️ Never commit your `.env` file to GitHub — it's already listed in `.gitignore`!

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 👨‍💻 Author

Made by **Abhishek Ayachit**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
