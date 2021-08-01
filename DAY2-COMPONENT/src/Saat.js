import React from "react";
import "./index.css";

function Saat() {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const clockString = date.toLocaleTimeString();
  const nowClock = date.getHours();
  let MESSAGE;

  if (nowClock < 12) {
    MESSAGE = "GOOD MORNING";
  } else if (nowClock < 18) {
    MESSAGE = "GOOD AFTERNOON";
  } else {
    MESSAGE = "GOOD EVENING";
  }
  return (
    <div className="saat">
      <h1 className="header">WELCOME TO THE REACT COURSE</h1>
      <h2 className="date">DATE={dateString}</h2>
      <h2 className="clock">CLOCK={clockString}</h2>
      <h4 className="message">{MESSAGE}</h4>
      <img
        className="foto"
        src="https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </div>
  );
}

export default Saat;
