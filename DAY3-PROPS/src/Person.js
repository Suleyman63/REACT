import React from "react";
import Message from "./Message";
import "./index.css";

function Person(props) {
  return (
    <div>
      <Message Name={props.message} />
      <h2>Name: {props.Name}</h2>
      <p>Phone: {props.phone}</p>
      <img src={props.foto} alt="" />
    </div>
  );
}

export default Person;
