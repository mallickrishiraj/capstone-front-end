import React from "react";
import "./footer.css";
import {BrowserRouter , Route , Link  } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from '../images/logo.png';


const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-content">
        <img  alt="img" src={logo} style={{width: "180px", height:"80px"}}></img>
       <h2>Shop no. 102,
        Panjim - Goa. 403001.
       </h2>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="/">Pino Pizza</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
            
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/policy">Policy</a>
            </li>
          </ul>
        </div> 
      </div>
    </footer>
    </>

  );
};

export default Footer;