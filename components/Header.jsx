import React from "react";
import HeaderStyle from "../styles/HeaderStyle.module.css";

const Header = () => {
  return (
    <header className={HeaderStyle.header}>
      <img src="/images/logo.png" alt="" className={HeaderStyle.logo} />

      <nav className={HeaderStyle.nav}>
        <ul>
          <li>Services</li>
          <li>Media</li>
          <li>Cases</li>
          <li>FAQ</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
