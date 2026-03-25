import { useWeather } from './hooks/useWeather'
import Weather from "./Weather"
import Form from "./Form"


const Data = () => {
  const { weatherData, onWeatherReceived } = useWeather();

  return (
    <div>
      <h3 style={{ color: "#fff", marginBottom: "30px" }}>Weather Forecast</h3>
      <Form onWeatherReceived={onWeatherReceived} />
      <div style={{ marginTop: "40px" }}>
        <Weather weatherData={weatherData} />
      </div>
    </div>
  )
}

export default Data
