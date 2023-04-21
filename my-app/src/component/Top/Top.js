import React from "react";

function Top(props) {

  function handleClick() {
    window.open(`https://www.asos.com/${props.website}`, "_blank");
  }

    return (
      <div className="top-container">
      <img src={props.url} alt="top"/>
      <button className="top-button" onClick={props.onClick}>Change</button>
      <button onClick={handleClick}>website</button>
      </div>
    );
  }
  
  export default Top;