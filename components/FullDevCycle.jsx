import React from "react";
import FDStyle from "../styles/FullDevCycle.module.css";

const FullDevCycle = () => {
  return (
    <section id="full-dev-cycle" className={FDStyle["full-dev-cycle"]}>
      <div className={FDStyle["full-dev-cycle__container"]}>
        <div className={FDStyle["full-dev-cycle__content"]}>
          <h1 className={FDStyle["full-dev-cycle__title"]}>
            Full Development Cycle
          </h1>
          <p className={FDStyle["full-dev-cycle__description"]}>
            We use Proven Techniques.
          </p>

          <div className={FDStyle["full-dev-cycle__categories"]}>
            <div className={FDStyle["full-dev-cycle__category"]}>
              <h3 className={FDStyle["full-dev-cycle__category-title"]}>Web</h3>
              <p className={FDStyle["full-dev-cycle__category-technologies"]}>
                PHP/Javascript/Node.js/Web Socket/Socket.io/ Vue.js/ Next/My
                SQL/ Laravel/ Golang/ django/ Python
              </p>
            </div>
            <div className={FDStyle["full-dev-cycle__category"]}>
              <h3 className={FDStyle["full-dev-cycle__category-title"]}>
                Mobile
              </h3>
              <p className={FDStyle["full-dev-cycle__category-technologies"]}>
                Swift/Kotlin / Java / React Native / Firebase / Coredata / React
                / Realm
              </p>
            </div>
          </div>
        </div>
        <div className={FDStyle["full-dev-cycle__topics"]}>
          <div className={FDStyle["full-dev-cycle__topic"]}>
            iOS Development
          </div>
          <div className={FDStyle["full-dev-cycle__topic"]}>
            Android Development
          </div>
          <div className={FDStyle["full-dev-cycle__topic"]}>
            Web Development
          </div>
          <div className={FDStyle["full-dev-cycle__topic"]}>UI/UX Design</div>
          <div className={FDStyle["full-dev-cycle__topic"]}>Testing</div>
          <div className={FDStyle["full-dev-cycle__topic"]}>Launch</div>
          <div className={FDStyle["full-dev-cycle__topic"]}>IT consulting</div>
        </div>
      </div>
    </section>
  );
};

export default FullDevCycle;
