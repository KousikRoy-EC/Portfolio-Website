import React from "react";
import { Link } from "react-router-dom";

function Circle(props) {
  const CustomStyle = {
    backgroundColor: props.Color,
  };

  if (props.name === "Resume") {
    return (
      <div>
        <a
          href={props.src}
          target="_blank"
          style={CustomStyle}
          className="Bdot"
        >
          <strong>{props.name}</strong>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <Link to={props.src} style={CustomStyle} className="Bdot">
          <strong>{props.name}</strong>
        </Link>
      </div>
    );
  }
}

export default Circle;
