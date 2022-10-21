import React, { useEffect, useState, useRef } from "react";
import "./../WeatherToday/WeatherToday.scss";

function WeatherToday() {
  const [allWeather, setAllWeather] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const ref = useRef();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Mogilev&units=metric&APPID=550c3413b8171e130d570bc13427be3b`
    )
      .then((res) => res.json())
      .then((date) => setAllWeather(date));
  }, []);

  useEffect(() => {
    ref.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  /*   console.log(allWeather)  */
  /*   console.log(allWeather.city.name)  */
  /*   console.log(allWeather.list[0].main.temp) */
  /*   console.log(allWeather.list[0].weather[0].icon); */

  return (
    <div className="weather-today">
      <div className="temp-day">
        <div className="temp-day__now">
          {/*           {Math.round(allWeather?.list[0].main.temp)} */}
        </div>
        <p>Сегодня</p>
      </div>
      {/*       <img
        className="weather-ico"
        src={`http://openweathermap.org/img/wn/${allWeather.list[0].weather[0].icon}@2x.png`}
        alt="not found"
      /> */}
      <div className="city">
        {(allWeather && allWeather.city.name) || "loading"}
      </div>
      <div className="time-now">{time}</div>
    </div>
  );
}

export default WeatherToday;
