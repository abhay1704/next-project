import HeroStyle from "../styles/Hero.module.css";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <div className={HeroStyle.hero}>
      <div className={HeroStyle.content}>
        <h1 id="heading">
          <span className="orange">User-Centric Excellence: </span>
          Our App Development Services Tackles Your Points
        </h1>
        <p>
          Experience a Seamless Digital Journey with{" "}
          <span className="green">Desum - </span> Where Every Line of Code
          Resolves Your Challenges and{" "}
          <span className="orange bold">Elevates Your App Experience</span> to
          Unparalleled Heights
        </p>
        <br /><br />

        <ContactForm />
      </div>
      <div className={HeroStyle.images}>
        <div className={HeroStyle.image}></div>
        <div className={HeroStyle.image}></div>
        <div className={HeroStyle.image}></div>
        <div className={HeroStyle.image}></div>
        <div className={HeroStyle.image}></div>
        <div className={HeroStyle.image}></div>
      </div>
    </div>
  );
};

export default HeroSection;
