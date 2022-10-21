import React from "react";
import Days from "../../components/Days/Days";
import ThisDay from "../../components/ThisDay/ThisDay";
import ThisDayInfo from "../../components/ThisDayInfo/ThisDayInfo.";
import "./../Home/Home.scss";

function Home() {
  return (
    <>
      <div className="wrapper">
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </>
  );
}

export default Home;
