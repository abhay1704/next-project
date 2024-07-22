import TopProjectStyles from "../styles/TopProjects.module.css";
import { MdRealEstateAgent } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import TabHeader from "./TabHeader.client.jsx";

const TopProjects = () => {
  return (
    <section className={`${TopProjectStyles["top-projects"]}`}>
      <h1>Projects we are proud of</h1>

      <p>
        Our Software development companies are truly proud of wonderful clients
        we have worked with. We enjoy long-term partnership.
      </p>

      <div className={TopProjectStyles["tabs"]}>
        <TabHeader />
        <div className={TopProjectStyles["tab-content"]}>
          <div className={TopProjectStyles["tab-pane"]}>
            <div className={TopProjectStyles["tab-text"]}>
              <h1>Project 1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget nunc nec libero viverra aliquam. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Ducimus corporis atque
                dolores vero maxime ab autem ex quam porro? Rem ipsam ad totam
                facere at quia eligendi, sunt numquam ipsa.
              </p>

              <p className={TopProjectStyles["project-tech"]}>
                Business Analysis / iOS / Android / QA / UI/UX
              </p>

              <div className={TopProjectStyles["about"]}>
                <div className={TopProjectStyles["place"]}>
                  <IoLocation />
                  <p>India</p>
                </div>
                <div className={TopProjectStyles["industry"]}>
                  <MdRealEstateAgent />
                  <p>Real Estate</p>
                </div>
              </div>
              <div className={TopProjectStyles["numbers"]}>
                <div className={TopProjectStyles["number"]}>
                  <h2>400%</h2>
                  <p>User Growth</p>
                </div>
                <div className={TopProjectStyles["number"]}>
                  <h2>+200 000</h2>
                  <p>Active Users</p>
                </div>
              </div>
            </div>
            <div className={TopProjectStyles["tab-image"]}>
              <img src="/images/projectImg.png" alt="project1" />
            </div>
          </div>
          <div className={TopProjectStyles["tab-pane"]}>
            <div className={TopProjectStyles["tab-text"]}>
              <h1>Project 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget nunc nec libero viverra aliquam. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Ducimus corporis atque
                dolores vero maxime ab autem ex quam porro? Rem ipsam ad totam
                facere at quia eligendi, sunt numquam ipsa.
              </p>

              <p className={TopProjectStyles["project-tech"]}>
                Business Analysis / iOS / Android / QA / UI/UX
              </p>

              <div className={TopProjectStyles["about"]}>
                <div className={TopProjectStyles["place"]}>
                  <IoLocation />
                  <p>India</p>
                </div>
                <div className={TopProjectStyles["industry"]}>
                  <MdRealEstateAgent />
                  <p>Real Estate</p>
                </div>
              </div>
              <div className={TopProjectStyles["numbers"]}>
                <div className={TopProjectStyles["number"]}>
                  <h2>400%</h2>
                  <p>User Growth</p>
                </div>
                <div className={TopProjectStyles["number"]}>
                  <h2>+200 000</h2>
                  <p>Active Users</p>
                </div>
              </div>
            </div>
            <div className={TopProjectStyles["tab-image"]}>
              <img src="/images/projectImg.png" alt="project1" />
            </div>
          </div>
          <div className={TopProjectStyles["tab-pane"]}>
            <div className={TopProjectStyles["tab-text"]}>
              <h1>Project 3</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget nunc nec libero viverra aliquam. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Ducimus corporis atque
                dolores vero maxime ab autem ex quam porro? Rem ipsam ad totam
                facere at quia eligendi, sunt numquam ipsa.
              </p>

              <p className={TopProjectStyles["project-tech"]}>
                Business Analysis / iOS / Android / QA / UI/UX
              </p>

              <div className={TopProjectStyles["about"]}>
                <div className={TopProjectStyles["place"]}>
                  <IoLocation />
                  <p>India</p>
                </div>
                <div className={TopProjectStyles["industry"]}>
                  <MdRealEstateAgent />
                  <p>Real Estate</p>
                </div>
              </div>
              <div className={TopProjectStyles["numbers"]}>
                <div className={TopProjectStyles["number"]}>
                  <h2>400%</h2>
                  <p>User Growth</p>
                </div>
                <div className={TopProjectStyles["number"]}>
                  <h2>+200 000</h2>
                  <p>Active Users</p>
                </div>
              </div>
            </div>
            <div className={TopProjectStyles["tab-image"]}>
              <img src="/images/projectImg.png" alt="project1" />
            </div>
          </div>
          <div className={TopProjectStyles["tab-pane"]}>
            <div className={TopProjectStyles["tab-text"]}>
              <h1>Project 4</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget nunc nec libero viverra aliquam. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Ducimus corporis atque
                dolores vero maxime ab autem ex quam porro? Rem ipsam ad totam
                facere at quia eligendi, sunt numquam ipsa.
              </p>

              <p className={TopProjectStyles["project-tech"]}>
                Business Analysis / iOS / Android / QA / UI/UX
              </p>

              <div className={TopProjectStyles["about"]}>
                <div className={TopProjectStyles["place"]}>
                  <IoLocation />
                  <p>India</p>
                </div>
                <div className={TopProjectStyles["industry"]}>
                  <MdRealEstateAgent />
                  <p>Real Estate</p>
                </div>
              </div>
              <div className={TopProjectStyles["numbers"]}>
                <div className={TopProjectStyles["number"]}>
                  <h2>400%</h2>
                  <p>User Growth</p>
                </div>
                <div className={TopProjectStyles["number"]}>
                  <h2>+200 000</h2>
                  <p>Active Users</p>
                </div>
              </div>
            </div>
            <div className={TopProjectStyles["tab-image"]}>
              <img src="/images/projectImg.png" alt="project1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProjects;
