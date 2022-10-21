import React from "react";
import Card from "./Card";
import Tabs from "./Tabs";

import "./Days.scss";

function Days() {
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
