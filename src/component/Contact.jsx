import React, { useState } from "react";

function Contact() {
  const [Display, SetDisplay] = useState(true);

  function BtnClicked(eve) {
    SetDisplay((prev) => {
      return prev === false;
    });
    eve.preventDefault();
  }

  return (
    <div>
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="post">
          <h3 className="Chead">{Display ? "Drop Me a Message" : "Message Sent"}</h3>
          <div className="row">
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 col-sm-12">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"

                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"

                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"

                />
              </div>
             
            
              <button type="button" class="btn btn-dark Sbtn">Submit</button>
                
             
            </div>
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 col-sm-12">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control msg"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
