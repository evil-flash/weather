import React from "react";

function Card({ day, day_info, icon_id, temp_day, temp_night, info }) {
  return <div className="card">
    <div className="day">{day}</div>
    <div className="day_info">{day_info}</div>
    <div className="icon_id">
        <img src={icon_id} alt="weather_icon" />
    </div>
    <div className="temp_day">{temp_day}</div>
    <div className="temp_night">{temp_night}</div>
    <div className="info">{info}</div>
  </div>;
}

export default Card;
