import React from "react";
import { FaGithub } from "react-icons/fa";

function Pcard(props) {
  const customcss = {
    fontWeight: "500",
    fontFamily: "'Roboto', sans-serif",
    fontSize:"1.65em",
  };

  return (
    <div class=" col-sm-12 col-6 col-md-6 col-lg-6 col-xl-4 mt-4 Pstyle">
      <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
          <div class="frontside">
            <div class="card ">
              <div class="card-body text-center">
                <img class=" img-fluid" src={props.source} alt="card image" />
                <hr />
                <h5 style={customcss}>{props.title}</h5>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-title" style={customcss}>{props.title}</div>
              <div class="card-body text-center mt-2 back-card">
                <p card-text>{props.techStack}</p>
                <p card-text>{props.description}</p>
                <a href={props.src} target="_blank" class="btn Pbtn btn- btn-sm">
                  <FaGithub
                    size="4rem"
                    style={{ color: "black" }}
                    className="icon2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pcard;
