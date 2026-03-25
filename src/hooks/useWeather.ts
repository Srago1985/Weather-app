import { useDispatch, useSelector } from "react-redux";
import type { ChangeEvent } from "react";
import { fetchWeather } from "../actions/weatherActions";
import type { RootState, AppDispatch } from "../store/store";

export const useWeather = () => {
    const dispatch = useDispatch<AppDispatch>();
    const weatherData = useSelector((state: RootState) => state.weatherData);

    const onWeatherReceived = (city: string) => {
        dispatch(fetchWeather(city));
    }

    const onCityChange = (e: ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value);
    }

    return { weatherData, onCityChange, onWeatherReceived };
}