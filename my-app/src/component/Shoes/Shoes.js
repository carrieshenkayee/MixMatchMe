import React from "react";
import './Shoes.css';

function Shoes(props) {

    return (
      <div className="shoes-container">
      <img src={props.url} alt="shoes"/>
      <button className="button" onClick={props.onClick}>Next</button>
      </div>
    );
  }
  
  export default Shoes;