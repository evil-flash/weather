import React, { useEffect, useState } from "react";
import logo from "./../../assets/logo.svg";
import invert from "./../../assets/invert.svg";
import Select from "react-select";

import "./../Header/Header.scss";

function Header() {
  const [theme, setTheme] = useState("light");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme === "light" ? "rgba(71, 147, 255, 0.2)" : "#4f4f4f",
      width: "145px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme === "light" ? "#000" : "#fff",
    }),
  };

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
    /*     root.style.setProperty(
      "--body-background-default",
      `var(--body-background-${theme})`
    ); */
  }, [theme]);

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
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
}

export default Header;
