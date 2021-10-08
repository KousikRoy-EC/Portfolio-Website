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
      <div class="container Ccon">
   
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3 className="cheader">Drop me a Message</h3>
        <ul>
          <li><i class="fa fa-map-marker"></i> Bharuch,Gujarat,India</li>
          <li><i class="fa fa-phone"></i> (91) 7972390500</li>
          <li><i class="fa fa-envelope"></i> kaushikroy1001@gmail.com</li>
        </ul>
      </div>
      <div class="contact">
       
        {/* {{msg}} */}
        <form method="POST" className="Form" action="Contact">
          <p>
            <label>Name</label>
            <input class="Bnew" type="text" name="name" />
          </p>
         
          <p>
            <label>Email Address</label>
            <input class="Bnew" type="email" name="email" />
          </p>
          <p>
            <label>Phone Number</label>
            <input class="Bnew" type="text" name="phone" />
          </p>
          <p class="full">
            <label>Message</label>
            <textarea class="Bnew" name="message" rows="5"></textarea>
          </p>
          <p class="full">
            <button type="submit"><strong>Send Message </strong></button>
          </p>
        </form>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Contact;
