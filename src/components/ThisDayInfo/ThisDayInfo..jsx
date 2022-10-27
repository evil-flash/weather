import React, { useEffect } from "react";
import cloud from "../../assets/cloud_image.svg";
import DayInfoItem from "../DayInfoItem/DayInfoItem";
import ico_pressure from "../../assets/ico_pressure.svg";
import ico_temp from "../../assets/ico_temp.svg";
import ico_rain from "../../assets/ico_rain.svg";
import ico_wind from "../../assets/ico_wind.svg";

import "./../ThisDayInfo/ThisDayInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";

function ThisDayInfo() {
  const dispatch = useDispatch();
  const { weather, success } = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(actionWeather.getWeather());
  }, [dispatch]);





  const items = [
    {
      icon: ico_temp,
      name: "Температура",
      value: `${
        success && Math.round(weather[0].main.temp)
      }° - ощущается как ${Math.round(
        weather[0]?.main.temp + weather[0]?.main.temp_kf
      )}°`,
      key: "1",
    },
    {
      icon: ico_pressure,
      name: "Давление",
      value: `${
        success && Math.round(weather[0].main.pressure * 0.750063755419211)
      } мм ртутного столба - нормальное`,
      key: "2",
    },
    {
      icon: ico_rain,
      name: "Осадки",
      value: success && weather[0].weather[0].description,
      key: "3",
    },
    {
      icon: ico_wind,
      name: "Ветер",
      value: `${success && Math.round(weather[0].wind.speed)} м/с`,
      key: "4",
    },
  ];

  return (
    <div className="this_day_info">
      <div className="this_day_info__items">
        {items.map(({ icon, name, value, key }) => (
          <DayInfoItem key={key} name={name} icon={icon} value={value} />
        ))}
      </div>
      <img className="cloud_image" src={cloud} alt="cloud_image" />
    </div>
  );
}

export default ThisDayInfo;
