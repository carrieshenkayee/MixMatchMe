import React from "react";

import './Shoes.css';


function Shoes(props) {

  function handleClick() {
    window.open(`https://www.asos.com/${props.website}`, "_blank");
  }
    return (

      <div className="shoes-container">
      <a href={props.website}><img src={props.url} alt="shoes"/></a>
      <buttoncontainer>
      <button className="top-button" onClick={props.onClick}>Change</button>
      <button onClick={handleClick}>website</button>
</buttoncontainer>
      </div>
    );
  }
  
  export default Shoes;