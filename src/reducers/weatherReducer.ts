import type { WeatherData } from "../types/weather";
import { SET_WEATHER, SET_ERROR } from "../actions/weatherActions";
import type { WeatherAction } from "../actions/weatherActions";

interface WeatherState {
    weatherData: WeatherData;    
}

const initialState: WeatherState = {
    weatherData: {},   
};

export const weatherReducer = (
    state = initialState,
    action: WeatherAction
): WeatherState => {
    switch (action.type) {
        case SET_WEATHER:
            return { ...state, weatherData: action.payload }
        case SET_ERROR:
            return { ...state, weatherData: { error: action.payload } }
        default:
            return state
    }
}
