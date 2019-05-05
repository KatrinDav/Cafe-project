import React from "react";
import "./Contact.css";
import img10 from "../img/outside3.jpg";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>Where We Are </h1>
        <h3> How You Can Contact With Us</h3>

        <div id="fotoOut">
          <img src={img10} alt="obrazek" />
        </div>

        <div id="info">
          <div className="icon-bar">
            <div>
              <i class="fa fa-facebook" />
            </div>
            <div>
              <i class="fa fa-twitter" />
            </div>

            <div>
              <i class="fa fa-google" />
            </div>
          </div>

          <div id="mainInfo">
            <div className="info">
              <p>
                Coffee Idea <br /> <br />
                Harrison Ave 47
                <br /> Boston US
              </p>
            </div>
            <div className="info">
              <p>
                {" "}
                Opening time:
                <br />
                <br />
                Monday - Thursday <br />{" "}
                <span className="hours"> 8:00 pm - 22:00 am</span> <br /> <br />{" "}
                Friday - Sunday <br />
                <span className="hours"> 8:00 pm - 24:00 am</span>{" "}
              </p>
            </div>

            <div className="info">
              <p>phone: (617) 545 959 511</p>

              <p>facebook</p>

              <p>twitter</p>

              <p>instagram</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
