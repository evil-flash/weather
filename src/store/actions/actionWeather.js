import axios from "axios";
import { API_KEY } from "../../config";

export const actionType = {
  SET_WEATHER: "SET_WEATHER",
  SET_WEATHER_SUCCES: "SET_WEATHER_SUCCES",
  SET_WEATHER_ERROR: "SET_WEATHER_ERROR",
};

export const actionWeather = {
  getWeather: (city) => async (dispath) => {
    dispath({ type: actionType.SET_WEATHER });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=${API_KEY}`
      )
      .then((response) =>
        dispath({
          type: actionType.SET_WEATHER_SUCCES,
          payload: response.data.list,
        })
      )
      .catch((err) => {
        console.log(err.response, err);
        dispath({
          type: actionType.SET_WEATHER_ERROR,
          payload: err.response,
        });
      });
  },
};
