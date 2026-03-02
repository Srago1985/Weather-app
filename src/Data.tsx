import { useState } from 'react'
import Weather from "./Weather"
import Form from "./Form"
import type { WeatherData } from './types/weather'

const Data = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({})

  const getWeather = (city: string): void => {
    fetch(`${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) {
          setWeatherData({ error: data.message || "Город не найден" })
          return
        }
        setWeatherData(data)
      })
      .catch((err: Error) => {
        console.error(err)
        setWeatherData({ error: "Сетевая ошибка" })
      })
  }

  return (
    <div>
      <h3 style={{ color: "#fff", marginBottom: "30px" }}>Weather Forecast</h3>
      <Form onWeatherReceived={getWeather} />
      <div style={{ marginTop: "40px" }}>
        <Weather weatherData={weatherData} />
      </div>
    </div>
  )
}

export default Data
