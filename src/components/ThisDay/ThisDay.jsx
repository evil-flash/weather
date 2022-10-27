import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";
import Clock from "../Clock/Clock";
import "./../ThisDay/ThisDay.scss";

function ThisDay() {
  const dispatch = useDispatch();
  const { weather, success } = useSelector((state) => state.weather);
  const cityName = useSelector((state) => state.cityName);
  useEffect(() => {
    dispatch(actionWeather.getWeather());
    dispatch(actionWeather.getCityName());
  }, []);

  console.log(cityName);

  return (
    <div className="this_day">
      <div className="top_block">
        <div className="top_block__wrapper">
          <div className="this_day__temp">
            {success && Math.round(weather[0].main.temp)}°
          </div>
          <div className="this_day__name">Сегодня</div>
        </div>
        <img
          className="weather_ico"
          src={
            success &&
            `http://openweathermap.org/img/wn/${
              success && weather[0].weather[0].icon
            }@2x.png`
          }
          alt="weather_ico"
        />
      </div>
      <div className="bottom_block">
        <div className="this_day__time">
          Время:
          <span>
            <Clock />
          </span>
        </div>
        <div className="this_day__city">Могилёв</div>
      </div>
    </div>
  );
}

export default ThisDay;
