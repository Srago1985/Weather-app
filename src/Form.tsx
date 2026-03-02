
import type {SubmitEvent} from 'react'

interface FormProps {
  onWeatherReceived: (city: string) => void
}

const Form = ({ onWeatherReceived }: FormProps) => {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const city = formData.get('city') as string
    if (!city?.trim()) return
    onWeatherReceived(city.trim())
    e.currentTarget.reset()
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <label style={{ color: "#fff", display: "block", marginBottom: "10px" }}>Enter City Name:</label>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <input type="text" name={"city"} placeholder="City..." />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  )
};

export default Form;
