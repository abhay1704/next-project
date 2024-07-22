import FooterStyle from "../styles/Footer.module.css";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={FooterStyle["footer"]}>
      <img className={FooterStyle.logo} src="/images/logo.png"></img>
      <div className={FooterStyle.contacts}>
        <div className={FooterStyle.contact}>
          <div className={FooterStyle.header}>
            <FaPhone />
            <h3>Phone</h3>
          </div>
          <p>+234 443 223</p>
        </div>
        <div className={FooterStyle.contact}>
          <div className={FooterStyle.header}>
            <MdEmail />
            <h3>Email</h3>
          </div>
          <p>
            <a href="mailto:hello@gmail.com">hello@gmail.com</a>
          </p>
        </div>
        <div className={FooterStyle.contact}>
          <div className={FooterStyle.header}>
            <FaLocationDot />
            <h3>Location</h3>
          </div>
          <p>123, Main Street, New York</p>
        </div>
      </div>
      <p>We work Throughout World.</p>
    </footer>
  );
};

export default Footer;
