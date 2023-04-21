import React, { useState } from "react";

function Bottom(props) {

    return (
      <div className="top-container">
      <img src={props.url} alt="bottom"/>
      <button className="top-button" onClick={props.onClick}>Change</button>
      </div>
    );
  }
  
  export default Bottom;