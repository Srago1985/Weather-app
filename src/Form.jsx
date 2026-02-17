const Form = ({ onWeatherReceived }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.currentTarget.city.value.trim();
    if (!city) return;
    onWeatherReceived(city);
    e.currentTarget.reset();
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <label style={{ color: "#fff", display: "block", marginBottom: "10px" }}>Enter City Name:</label>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <input type="text" name={"city"} placeholder="City..." />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
