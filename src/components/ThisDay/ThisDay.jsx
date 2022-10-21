import React from "react";
import "./../ThisDay/ThisDay.scss";

function ThisDay() {
  return (
    <div className="this_day">
      <div className="top_block">
        <div className="top_block__wrapper">
          <div className="this_day__temp">20°</div>
          <div className="this_day__name">Сегодня</div>
        </div>
        <img className="weather_ico" src="" alt="weather_ico" />
      </div>
      <div className="bottom_block">
        <div className="this_day__time">
          Время:<span>20.00</span>
        </div>
        <div className="this_day__city">Могилёв</div>
      </div>
    </div>
  );
}

export default ThisDay;
