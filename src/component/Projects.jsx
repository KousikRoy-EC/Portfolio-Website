import React from "react";
import AiChatbot from "./Photos/Chatbot.png";
import WebPage from "./Photos/Dwebsite.png";
import PortFolio from "./Photos/PortFolio.png";
import DragonGame from "./Photos/DragonGame.png";
import Clock from "./Photos/Clock.jpg";
import Calculator from "./Photos/Claculator.jpg";
import KepperProject from "./Photos/KeeperProject.png";
import Windows11Clone from "./Photos/Windows11Clone.jpg";

import Pcard from "./Pcard";
function Projects() {
  return (
    <div>
      <section id="team">
        <div class="Pcontainer">
          <div class="row Prow col-12 ">
            <Pcard
              src="#"
              source={AiChatbot}
              title="AI Chatbot"
              techStack="Tech Stack : IBM WATSOM and IBM Cloud. &nbsp;"
              description=" Made an AI ChatBot using IBM Watson Technology. Watson is a question-answering computer system capable of answering questions posed in natural language, developed in IBM."
            />
            <Pcard
              src="https://github.com/KousikRoy-EC/Dragon-Game"
              source={DragonGame}
              title="DragonGame"
              techStack="Tech Stack : HTML,CSS,JS,Bootstrap. &nbsp;"
              description="Developed a Dragon Game which is also known as chrome dino with some additional functionality."
            />

            <Pcard
              src="https://github.com/KousikRoy-EC/Kousik-Roy"
              source={PortFolio}
              title="Portfolio Website"
              techStack="Tech Stack : React JS,HTML,CSS,JS,Bootstrap. &nbsp;"
              description="Designed and developed my portfolio website using React JS."
            />
            <Pcard
              src="https://github.com/KousikRoy-EC/Windws-11-Clone"
              source={Windows11Clone}
              title="Windows 11 Clone"
              techStack="Tech Stack : HTML,CSS,JS,Bootstrap. &nbsp;"
              description="Clone of Windows 11 using vanilla HTML,CSS and JS."
            />
            <Pcard
              src="https://github.com/KousikRoy-EC/Analog-Clock-using-HTML-CSS-JS"
              source={Clock}
              title="Analog Clock"
              techStack="Tech Stack : HTML,CSS,JS,Bootstrap. &nbsp;"
              description="Designed a Analog Clock using vanilla HTML,CSS and JS."
            />
            <Pcard
              src="https://github.com/KousikRoy-EC/Scientific-Calculator"
              source={Calculator}
              title="Scientific Calculator"
              techStack="Tech Stack : C/C++. &nbsp;"
              description="Made a scientific calculator in C++ to perform scientific operations Using Various Inbuit And Postbuilt libraries."
            />
            <Pcard
              src="https://github.com/KousikRoy-EC/Front-end-website-Restaurants-"
              source={WebPage}
              title="Restaurant Website"
              techStack="Tech Stack : HTML,CSS,JS,Bootstrap. &nbsp;"
              description="Designed a front end Restaurant Website."
            />

            <Pcard
              src="https://github.com/KousikRoy-EC/Keeper-Project-Using-React-JS"
              source={KepperProject}
              title="Kepper Project"
              techStack="Tech Stack : React JS,HTML,CSS,JS,Bootstrap. &nbsp;"
              description="Developed Keeper Project application to keep note of the important things."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
