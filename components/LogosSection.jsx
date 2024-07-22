import LogosStyle from "../styles/LogosSection.module.css";

const LogosSection = () => {
  return (
    <section className={LogosStyle["logos-section"]}>
      <div className={LogosStyle.logos}></div>
    </section>
  );
};

export default LogosSection;
