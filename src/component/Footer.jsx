import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const curryear = new Date();

function Footer() {
  return (
    <div>
      <hr className="hr" style={{ margin: "0rem 3rem 0rem 3rem" }} />
      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div id="display" class="row">
              <div class="col-xs-12 col-sm-6 col-md-2">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    Phone
                    <a href="tel : 7972390500">
                      <FaPhoneAlt
                        size="1.1em"
                        style={{ color: "black", marginLeft: "0.5rem" }}
                        className="icon2 Pview"
                      />
                    </a>
                  </h5>

                  <p>7972390500</p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Email
                    <a href="mailto:Kaushikroy1001@gmail.com">
                      <MdEmail
                        size="1.5em"
                        style={{ color: "black", marginLeft: "0.5rem" }}
                        className="icon2 Pview"
                      />
                    </a>
                  </h5>

                  <div class="thumb-content">Kaushikroy1001@gmail.com</div>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    <>Follow Me</>
                  </h5>
                  <span className="iconbundle">
                    <a
                      href="https://www.facebook.com/profile.php?id=100008571195584"
                      target="_blank"
                    >
                      <FaFacebookSquare
                        size="2em"
                        style={{ color: "black" }}
                        className="icon2"
                      />
                    </a>
                    <a href="https://github.com/KousikRoy-EC" target="_blank">
                      <FaGithub
                        size="2em"
                        style={{ color: "black" }}
                        className="icon2"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kousik-roy-9a0989200/"
                      target="_blank"
                    >
                      <FaLinkedin
                        size="2em"
                        style={{ color: "black" }}
                        className="icon2"
                      />
                    </a>
                  </span>
                </div>
              </div>

              <div class="footer-copyright col-xs-12 col-sm-6 col-md-3 mt">
                <div class="copyright">
                  <p> © 2021 Copyright KousikRoy.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
