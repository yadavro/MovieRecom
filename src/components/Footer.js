import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <main>
      <div className="header">
        <span className="footer__span">
          Made by {" "}
          <a href="https://github.com/sankalpg38">Sankalp Garg</a> and  <a href="https://github.com/yadavro">Rohit Yadav</a>
        </span>
        <span className="footer__span">
          feel free to connect <a>sankalpg38@gmail.com and rohitcsenitd@gmail.com</a>
        </span>
      </div>
    </main>
  );
};

export default Footer;
