import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-p">CopyRight © {year}</p>
    </footer>
  );
}

export default Footer;
