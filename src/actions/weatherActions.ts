import type { WeatherData } from "../types/weather";

export const SET_WEATHER = "SET_WEATHER";
export const SET_ERROR = "SET_ERROR";

export const setWeather = (data: WeatherData) => ({
    type: SET_WEATHER as typeof SET_WEATHER,
    payload: data,
});

export const setError = (error: string) => ({
    type: SET_ERROR as typeof SET_ERROR,
    payload: error,
});

export type WeatherAction = 
    | ReturnType<typeof setWeather>
    | ReturnType<typeof setError>;

export const fetchWeather = (city: string) => {
    return async (dispatch: (action: WeatherAction) => void) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
            )
            const data = await response.json()
            if (!response.ok) {
                dispatch(setError(data.message || 'Город не найден'))
                return
            }
            dispatch(setWeather(data))
        } catch (err) {
            console.error(err)
            dispatch(setError('Сетевая ошибка'))
        }
    }
}