import React from "react";

function Tabs() {
  const tabs = [
    { value: "На неделю" },
    { value: "На месяц" },
    { value: "На 10 дней" },
  ];
  return (
    <div className="tabs">
      <div className="tabs_wrapper">
        {tabs.map((item) => (
          <div className="tab" key={item.value}>
            {item.value}
          </div>
        ))}
      </div>
      <div className="cancel">Отменить</div>
    </div>
  );
}

export default Tabs;
