import React, { useState } from "react";
require("dotenv").config();


function Contact() {
  const [AllData, setData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });


  const[Loader,setLoader]=useState(true);


  const changesSave = (event) => {
   var name = event.target.name;
   var value = event.target.value;
    setData({ ...AllData, [name]: value });
  };

  const handleSubmit = async (e) => {
  
    e.preventDefault();
   
    setLoader(true);
    const{Name ,Email,Phone,Message}=AllData;
    const res = await fetch(process.env.REACT_APP_SECRET_KEY,
      {
        method: "POST",
        Headers: {
          "Content-Type": "applicaton/json"

        },
        body: JSON.stringify({
          Name: Name,
          Email: Email,
          Phone: Phone,
          Message: Message,
        }),
      }

    );
    if (res) {
      alert("Message sent 👍");
      setLoader(false);
      setData({
        Name: "",
        Email: "",
        Phone: "",
        Message: ""
      })

    } else {
      alert("Please fill data correctly");
    }

  }

  return (
    <div>
      <div class="container Ccon">
        <div class="wrapper animated bounceInLeft">
          <div class="company-info">
            <h3 className="cheader">Drop me a Message</h3>
            <ul>
              <li>
                <i class="fa fa-map-marker"></i> Bharuch,Gujarat,India
              </li>
              <li>
                <i class="fa fa-phone"></i> (91) 7972390500
              </li>
              <li>
                <i class="fa fa-envelope"></i> kaushikroy1001@gmail.com
              </li>
            </ul>
          </div>
          <div class="contact">

            <form className="Form" onSubmit={handleSubmit}>
              <p>
                <label>Name</label>
                <input
                  class="Bnew"
                  value={AllData.Name}
                  onChange={changesSave}
                  type="text"
                  name="Name"
                 
                />
              </p>

              <p>
                <label>Email Address</label>
                <input
                  class="Bnew"
                  value={AllData.Email}
                  onChange={changesSave}
                  type="email"
                  name="Email"
                  required
                />
              </p>
              <p>
                <label>Phone Number</label>
                <input
                  class="Bnew"
                  value={AllData.Phone}
                  onChange={changesSave}
                  type="text"
                  name="Phone"
                />
              </p>
              <p class="full">
                <label>Message</label>
                <textarea
                  class="Bnew"
                  value={AllData.Message}
                  onChange={changesSave}
                  name="Message"
                  rows="5"

                ></textarea>
              </p>
              <p class="full">
                <button type="submit" style={{"backgroundColor" : Loader? "#73baf7" : "#73baf7" }}>
                  <strong>Send Message </strong>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
