import HeroStyle from "../styles/Hero.module.css";

const Contactform = () => {
  return (
    <div className={HeroStyle["contact-card"]} id='contact-card'>
      <form className={HeroStyle.form} action="">
        <h2>Leave your Contact and we will call you back within 30 minutes</h2>
        <div className={HeroStyle["input-wrapper"]}>
          <input type="text" placeholder=" " id="name" />
          <label htmlFor="name">Your Name</label>
        </div>
        <div className={HeroStyle["input-wrapper"]}>
          <input type="text" placeholder=" " id="phone" />
          <label htmlFor="phone">Your Phone</label>
        </div>
        <div className={HeroStyle["input-wrapper"]}>
          <input type="text" placeholder=" " id="business-name" />
          <label htmlFor="business-name">Your Business Name</label>
        </div>
        <div className={HeroStyle["input-wrapper"]}>
          <input type="email" placeholder=" " id="business-email" />
          <label htmlFor="business-email">Your Business Email</label>
        </div>
      </form>
      <button className={HeroStyle["submit-button"]}>Get Consultation</button>
    </div>
  );
};

export default Contactform;
