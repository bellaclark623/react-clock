import React from "react";

export default () => {
  let date = new Date();
  let hours = date.getHours() + "";
  let minutes = date.getMinutes() + "";
  let seconds = date.getSeconds() + "";
  let day = date.getDay();

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let clock = weekDays[day] + ":" + hours + ":" + minutes + ":" + seconds;

  return (
    <div className="row">
      <div className="col-12">
        <h1>{clock}</h1>
      </div>
    </div>
  );
};
