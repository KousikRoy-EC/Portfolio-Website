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
              source={AiChatbot}
              title="AI Chatbot"
              techStack="Tech Stack : IBM WATSOM and IBM Cloud. &nbsp;"
              description=" Made an AI ChatBot using IBM Watson Technology. Watson is a question-answering computer system capable of answering questions posed in natural language, developed in IBM."
            />
            <Pcard
              source={DragonGame}
              title="DragonGame"
              techStack="Tech Stack : HTML,Css,JS,Bootstrap. &nbsp;"
              description="Developed a Dragon Game which is also known as chrome dino with some additional functionality."
            />

            <Pcard
              source={PortFolio}
              title="Portfolio Website"
              techStack="Tech Stack : React JS,HTML,Css,JS,Bootstrap. &nbsp;"
              description="Designed and developed my portfolio website using React Js."
            />
            <Pcard
              source={Windows11Clone}
              title="Windows 11 Clone"
              techStack="Tech Stack : HTML,Css,JS,Bootstrap. &nbsp;"
              description="Clone of Windows 11 using vanilla HTML,Css and js."
            />
            <Pcard
              source={Clock}
              title="Analog Clock"
              techStack="Tech Stack : HTML,Css,JS,Bootstrap. &nbsp;"
              description="Designed a Analog Clock using vanilla HTML,Css and Js."
            />
            <Pcard
              source={Calculator}
              title="Scientific Calculator"
              techStack="Tech Stack : C/C++. &nbsp;"
              description="Made a scientific calculator in C++ to perform scientific operations Using Various Inbuit And Postbuilt libraries."
            />
            <Pcard
              source={WebPage}
              title="Restaurant Website"
              techStack="Tech Stack : HTML,Css,JS,Bootstrap. &nbsp;"
              description="Designed a front end Restaurant Website."
            />

            <Pcard
              source={KepperProject}
              title="Kepper Project"
              techStack="Tech Stack : React JS,HTML,Css,JS,Bootstrap. &nbsp;"
              description="Developed Keeper Project application to keep note of the important things."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
