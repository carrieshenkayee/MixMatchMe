import React, { useState } from "react";

function Top(props) {

    return (
      <div className="top-container">
      <img src={props.url} alt="top"/>
      <button className="top-button" onClick={props.onClick}>Change</button>
      </div>
    );
  }
  
  export default Top;