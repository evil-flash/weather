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
  }, [dispatch]);


  return (
    <>
      <Tabs />
      <div className="days">
        {success &&
          weather.map(({ dt_txt, main, dt, weather }) => {
            if (dt_txt.slice(11, 19) === "12:00:00")
              return (
                <Card
                  key={main.temp}
                  day_info={dt}
                  icon_id={weather[0].icon}
                  temp_day={Math.round(main.temp)}
                  temp_kf={main.temp + main.temp_kf}
                  info={weather[0].description}
                />
              );
          })}
      </div>
    </>
  );
}

export default Days;
