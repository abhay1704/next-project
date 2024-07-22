import ApplicationStyles from "../styles/ApplicationStages.module.css";
import StageCard from "./StageCard";

const ApplicationStages = () => {
  return (
    <section className={ApplicationStyles["Appliaction Stages"]}>
      <h1>Application Development Stages</h1>
      <div className={ApplicationStyles.wrapper}>
        <div className={ApplicationStyles.container}>
          <StageCard
            heading="Analysis"
            icon="/images/planing.svg"
            about="
            We analyze your project requirements and create a plan to achieve your goals."
          />

          <StageCard
            heading="Design"
            icon="/images/design.png"
            about="
            We design the user interface and user experience of your application."
          />

          <StageCard
            heading="Development"
            icon="/images/coding-language.svg"
            about="
            We develop the application according to the design and requirements."
          />
        </div>
        <div className={ApplicationStyles.image}>
          <img src="/images/hope-gif1.png" alt="application stages" />
        </div>
        <div className={ApplicationStyles.container}>
          <StageCard
            heading="Testing"
            icon="/images/application.svg"
            about="
            We test the application to ensure it is bug-free and ready for deployment."
          />
          <StageCard
            heading="Deployment"
            icon="/images/hosting 1.svg"
            about="
            We deploy the application on the server and make it live for the users."
          />
          <StageCard
            heading="Security"
            icon="/images/security.svg"
            about="
            We ensure the security of the application and protect it from cyber threats."
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationStages;
