import React from "react";

function Shoes(props) {

  function handleClick() {
    window.open(`https://www.asos.com/${props.website}`, "_blank");
  }
    return (
      <div className="top-container">
      <a href={props.website}><img src={props.url} alt="shoes"/></a>
      <button className="top-button" onClick={props.onClick}>Change</button>
      <button onClick={handleClick}>website</button>
      </div>
    );
  }
  
  export default Shoes;