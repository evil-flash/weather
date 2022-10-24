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

    success &&
    weather.map((i) => {
      console.log(i.dt_txt);
    });



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
        {days.map(({ day, day_info, icon_id, temp_day, temp_night, info }) => (
          <Card
            key={temp_day}
            day={day}
            day_info={day_info}
            icon_id={icon_id}
            temp_day={temp_day}
            temp_night={temp_night}
            info={info}
          />
        ))}
      </div>
    </>
  );
}

export default Days;
