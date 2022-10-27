import axios from "axios";
import { API_KEY } from "../../config.js";

export const actionType = {
  SET_WEATHER: "SET_WEATHER",
  SET_WEATHER_SUCCES: "SET_WEATHER_SUCCES",
  SET_WEATHER_ERROR: "SET_WEATHER_ERROR",

  SET_CITY: "SET_CITY",
  SET_CITY_SUCCES: "SET_CITY_SUCCES",
  SET_CITY_ERROR: "SET_CITY_ERROR",
};

export const actionWeather = {
  getWeather:
    (city = "Могилёв") =>
    async (dispath) => {
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

  getCityName:
    (city = "Могилёв") =>
    async (dispath) => {
      dispath({ type: actionType.SET_CITY });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=${API_KEY}`
        )
        .then((response) =>
          dispath({
            type: actionType.SET_CITY_SUCCES,
            payload: response.data.city.name,
          })
        )
        .catch((err) => {
          console.log(err.response, err);
          dispath({
            type: actionType.SET_CITY_ERROR,
            payload: err.response,
          });
        });
    },
};
