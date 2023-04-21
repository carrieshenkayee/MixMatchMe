import React from "react";
import './Top.css';

function Top(props) {

    return (
      <div className="top-container">
      <img src={props.url} alt="top"/>
      <button className="button" onClick={props.onClick}>Next</button>
      </div>
    );
  }
  
  export default Top;