import React from "react";
import './Bottom.css';

function Bottom(props) {

    return (
      <div className="bottom-container">
      <img src={props.url} alt="bottom"/>
      <button className="button" onClick={props.onClick}>Next</button>
      </div>
    );
  }
  
  export default Bottom;