import React from "react";
import "../style/PageContact.css"

const Contact = () => {
  return (
    <div>
      <div className="containerText">
        <h1>Contact</h1>
        <p> You can contact me by </p>
      </div>
      <div className="contact">
        <ul>
          <li>
            <a href="mailto:Daniel.SkowronIT@gmail.com"> <i className="fas fa-paper-plane"></i>Daniel.SkowronIT@gmail.com</a>
          </li>
          <li>
            <a href="https://m.me/daniel.skowron.39" target="#"> <i className="fab fa-facebook-messenger"></i>www.m.me/daniel.skowron.39</a>
          </li>
          <li>
            <a href="tel:+48692501091"> <i className="fas fa-phone"></i> +48 692 501 091</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
