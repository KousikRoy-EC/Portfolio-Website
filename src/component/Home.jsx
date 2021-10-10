import React from "react";
import Kousik from "./Photos/WHITE.png";
import Circle from "./Circle";
function New() {
  return (
    <div>
      <div class="flex-container">
        <div className="innerflex">
          <div className="flex-1">
            {" "}
            <img className="MainImg2" src={Kousik} />
          </div>
          <div className="flex-2">
            <h1>Hello,</h1>

            <h5>
              <strong>A Bit About Me</strong>
            </h5>

            <span className="card-text">
              <h6>
                {" "}
                I am a student possesing an astute character. Pursuing my
                Baechlors in Electronics and Communication from CHARUSAT
                University. My expertise in the area of responsive design. With
                every line of code, I strive to make web a beautiful place.
                Apart from that i also have strong foundation on data structure and algorithm. I love
                to play Volleyball.
              </h6>
            </span>

            <span className="circular">
              <Circle
                Color={"#eea302"}
                name="Resume"
                src="https://drive.google.com/file/d/19Otaz75f7MxoTDAgf9brYEFLbMbOEKiS/view?usp=sharing"
              />
              <Circle Color={"rgb(78 189 148)"} name="Project" src="/Projects" />
              <Circle Color={"#85cbcc"} name="Contact" src="/Contact" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
