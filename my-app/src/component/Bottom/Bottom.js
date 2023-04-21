import React from "react";

import "./Bottom.css";

function Bottom(props) {
  function handleClick() {
    window.open(`https://www.asos.com/${props.website}`, "_blank");
  }
  return (
    <div className="bottom-container">
      <h3>
        {props.name} | Price £{props.price}
      </h3>
      <a href={props.website}>
        <img src={props.url} alt="bottom" />
      </a>
      <buttoncontainer>
        <button className="top-button" onClick={props.onClick}>
          Change
        </button>
        <button onClick={handleClick}>website</button>
      </buttoncontainer>
    </div>
  );
}

export default Bottom;
