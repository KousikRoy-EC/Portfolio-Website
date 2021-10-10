import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/Home">
            <span class="dot"></span> <>Kousik Roy</>
          </Link>

          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://drive.google.com/file/d/19Otaz75f7MxoTDAgf9brYEFLbMbOEKiS/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Projects">
               
                  | Project
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contact">
               
                  | Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
