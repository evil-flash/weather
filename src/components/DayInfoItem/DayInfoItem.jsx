import React from "react";
import "./../DayInfoItem/DayInfoItem.scss";

function DayInfoItem({ icon, name, value}) {
  return (
    <div className="day_info_item">
      <div className="icon"><img src={icon} alt={name} /></div>
      <div className="name">{name}</div>
      <div className="value">{value}</div>
    </div>
  );
}

export default DayInfoItem;
