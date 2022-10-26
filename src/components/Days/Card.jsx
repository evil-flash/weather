import React from "react";

function Card({ day, day_info, icon_id, temp_day, temp_kf, info }) {
  return (
    <div className="card">
      <div className="day">{day}</div>
      <div className="day_info">
        {" "}
        {new Date(day_info * 1000).toLocaleString("ru", {
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className="icon_id">
        <img
          src={`http://openweathermap.org/img/wn/${icon_id}@2x.png`}
          alt="weather_ico"
        />
      </div>
      <div className="temp_day">{temp_day}</div>
      <div className="temp_night">{temp_kf}</div>
      <div className="info">{info}</div>
    </div>
  );
}

export default Card;
