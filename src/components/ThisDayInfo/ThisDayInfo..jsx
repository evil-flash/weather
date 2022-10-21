import React from "react";
import cloud from "../../assets/cloud_image.svg";
import DayInfoItem from "../DayInfoItem/DayInfoItem";
import ico_pressure from '../../assets/ico_pressure.svg'
import ico_temp from '../../assets/ico_temp.svg'
import ico_rain from '../../assets/ico_rain.svg'
import ico_wind from '../../assets/ico_wind.svg'

import "./../ThisDayInfo/ThisDayInfo.scss";

function ThisDayInfo() {
  const items = [
    {
      icon: ico_temp,
      name: "Температура",
      value: "20° - ощущается как 17°",
      key:'1'
    },
    {
      icon: ico_pressure,
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
      key:'2'
    },
    {
      icon: ico_rain,
      name: "Осадки",
      value: "Без осадков",
      key:'3'
    },
    {
      icon: ico_wind,
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
      key:'4'
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
