import React, { useEffect } from "react";
import Card from "./Card";
import Tabs from "./Tabs";

import "./Days.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";

function Days() {
  const dispatch = useDispatch();
  const { weather, success } = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(actionWeather.getWeather());
  }, []);



  const days = [
    {
      day: "mnd",
      day_info: "16 окт",
      icon_id: "rain",
      temp_day: "18",
      temp_night: "15",
      info: "облачно",
    },
    {
      day: "mnd",
      day_info: "16 окт",
      icon_id: "rain",
      temp_day: "18",
      temp_night: "15",
      info: "облачно",
    },
    {
      day: "mnd",
      day_info: "16 окт",
      icon_id: "rain",
      temp_day: "18",
      temp_night: "15",
      info: "облачно",
    },
    {
      day: "mnd",
      day_info: "16 окт",
      icon_id: "rain",
      temp_day: "18",
      temp_night: "15",
      info: "облачно",
    },
    {
      day: "mnd",
      day_info: "16 окт",
      icon_id: "rain",
      temp_day: "18",
      temp_night: "15",
      info: "облачно",
    },
    {
      day: "mnd",
      day_info: "16 окт",
      icon_id: "rain",
      temp_day: "18",
      temp_night: "15",
      info: "облачно",
    },
    {
      day: "mnd",
      day_info: "16 окт",
      icon_id: "rain",
      temp_day: "18",
      temp_night: "15",
      info: "облачно",
    },
  ];
  return (
    <>
      <Tabs />
      <div className="days">
        {success &&
          weather.map((i) => {
            if (i.dt_txt.slice(11, 19) === "21:00:00")
              return (
                <Card
                  key={i.main.temp}
                  day_info={i.dt}
                  icon_id={i.weather[0].icon}
                  temp_day={Math.round(i.main.temp)}
                  temp_kf={i.main.temp + i.main.temp_kf}
                  info={i.weather[0].description}
                />
              );
          })}
      </div>
    </>
  );
}

export default Days;
