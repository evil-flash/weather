import { actionType } from "../actions/actionWeather";

const initialState = {
  weather: [],
  success: false,
  loading: false,
  error: false,
};

export const reducerWeather = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.SET_WEATHER:
      return {
        ...state,
        weather: [],
        success: false,
        loading: true,
      };
    case actionType.SET_WEATHER_SUCCES:
      return {
        ...state,
        weather: payload,
        success: true,
        loading: false,
      };
    case actionType.SET_WEATHER_ERROR:
      return {
        ...state,
        error: true,
      };
  }
};
