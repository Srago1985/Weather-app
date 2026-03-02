export interface WeatherSys {
  country?: string
  sunrise?: number
  sunset?: number
}

export interface WeatherMain {
  temp?: number
  pressure?: number
}

export interface WeatherData {
  name?: string
  sys?: WeatherSys
  main?: WeatherMain
  error?: string
}

export interface WeatherProps {
  weatherData?: WeatherData
}