import OurTeamStyle from "../styles/OurTeam.module.css";

const OurTeam = () => {
  return (
    <section>
      <h1>Our Team</h1>
      <div className={OurTeamStyle.container}>
        <div className={OurTeamStyle.content}>
          <p>
            Our team is a group of highly skilled individuals who are passionate
            about their work. We are a diverse group of professionals who are
            dedicated to providing the best service to our clients.
          </p>
          <div className={OurTeamStyle["numbers"]}>
            <div className="">
              <h2>28</h2>
              <p>Team Members</p>
            </div>
            <div>
              <h2>10+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2>+100</h2>
              <p>Projects Completed</p>
            </div>
          </div>
          <p>
            We believe in teamwork and collaboration, and we work together to
            achieve our goals. Our team is committed to excellence and we strive
            to deliver the best results for our clients.
          </p>
        </div>
        <img className={OurTeamStyle.image} src="/images/team.png"></img>
      </div>
    </section>
  );
};

export default OurTeam;
