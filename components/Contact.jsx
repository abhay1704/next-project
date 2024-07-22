import ContactStyle from "../styles/Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={ContactStyle["contact-section"]}>
      <div className={ContactStyle["container"]}>
        <div className={ContactStyle["content"]}>
          <h1>Let's Discuss your Project</h1>
          <p>
            Let's discuss your project and find out how we can help your
            business.
          </p>
        </div>
        <ContactForm id='contact-card' />
      </div>
    </section>
  );
};

export default Contact;
