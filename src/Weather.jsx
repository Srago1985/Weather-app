const Weather = ({ weatherData = {} }) => {
  if (weatherData?.error) {
    return (
      <div className={"error"}>
        <p style={{ color: "red" }}>Ошибка: {weatherData.error}</p>
      </div>
    );
  }

  return (
    <div className={"infoWeath"}>
      <p>
        Location:{" "}
        {weatherData?.sys?.country
          ? `${weatherData.sys.country}, ${weatherData.name}`
          : "-"}
      </p>
      <p>Temperature: {weatherData?.main?.temp ?? "-"}°C</p>
      <p>
        Pressure:{" "}
        {weatherData?.main?.pressure
          ? (weatherData.main.pressure * 0.75006).toFixed(2) + " мм рт. ст."
          : "-"}
      </p>
      <p>
        Sunrise:{" "}
        {weatherData?.sys?.sunrise
          ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()
          : "-"}
      </p>
      <p>
        Sunset:{" "}
        {weatherData?.sys?.sunset
          ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()
          : "-"}
      </p>
    </div>
  );
};

export default Weather;
