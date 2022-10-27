import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import logo from "./../../assets/logo.svg";
import invert from "./../../assets/invert.svg";
import { actionWeather } from "../../store/actions/actionWeather";

import "./../Header/Header.scss";

function Header() {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.querySelector(":root");
    const variablesStyle = [
      `--body-background`,
      `--components-background`,
      `--text-color`,
      `--card-background`,
      `--card-shadow`,
    ];

    variablesStyle.map((i) => {
      root.style.setProperty(`${i}-default`, `var(${i}-${theme})`);
    });
  }, [theme]);

  const handleSetCity = (e) => {
    if (e.key === "Enter") {
      dispatch(actionWeather.getWeather(e.target.value));
      dispatch(actionWeather.getCityName(e.target.value));
    }
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">REACT WEATHER</div>
      </div>
      <div className="wrapper">
        <div className="theme" onClick={changeTheme}>
          <img src={invert} alt="invert" />
        </div>
        <input className="cityInput" onKeyUp={handleSetCity} />
      </div>
    </header>
  );
}

export default Header;
