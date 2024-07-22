import TopIndustriesStyles from "../styles/TopIndustries.module.css";
import { TiSocialInstagram } from "react-icons/ti";

import {
  FaUniversity,
  FaVrCardboard,
  FaDumbbell,
  FaCar,
  FaTv,
  FaHospital,
  FaRocket,
  FaBuilding,
  FaUtensils,
  FaMotorcycle,
  FaCross,
  FaGamepad,
  FaStore,
  FaChalkboardTeacher,
} from "react-icons/fa";

const industries = [
  { name: "Social Media", icon: TiSocialInstagram },
  { name: "Education", icon: FaUniversity },
  { name: "AR Technologies", icon: FaVrCardboard },
  { name: "Fitness", icon: FaDumbbell },
  { name: "Auto & Transport", icon: FaCar },
  { name: "TV Series", icon: FaTv },
  { name: "Medicine", icon: FaHospital },
  { name: "Startups", icon: FaRocket },
  { name: "Construction", icon: FaBuilding },
  { name: "Restaurants", icon: FaUtensils },
  { name: "Food Delivery", icon: FaMotorcycle },
  { name: "Religion", icon: FaCross },
  { name: "Game Projects", icon: FaGamepad },
  { name: "Marketplace", icon: FaStore },
  { name: "Online Courses", icon: FaChalkboardTeacher },
];

const TopIndustries = () => {
  return (
    <section className={TopIndustriesStyles["top-industries"]}>
      <h1>
        Developed More than <span className="green">Projects</span> in{" "}
        <span className="green">15</span> Industries
      </h1>

      <div className={TopIndustriesStyles.industries}>
        {industries.map((industry) => (
          <div key={industry.name} className={TopIndustriesStyles.industry}>
            <div className={TopIndustriesStyles["industry-icon"]}>
              {<industry.icon />}
            </div>
            <div className={TopIndustriesStyles["industry-name"]}>
              {industry.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopIndustries;
