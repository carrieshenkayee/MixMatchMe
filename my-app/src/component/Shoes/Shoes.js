import React, { useState } from "react";

function Shoes(props) {

    return (
      <div className="top-container">
      <img src={props.url} alt="shoes"/>
      <button className="top-button" onClick={props.onClick}>Change</button>
      </div>
    );
  }
  
  export default Shoes;