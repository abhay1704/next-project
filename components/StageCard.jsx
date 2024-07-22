import StageCardStyle from "../styles/StageCard.module.css";

const StageCard = ({ heading, icon, about }) => {
  return (
    <div className={StageCardStyle["card"]}>
      <div className={StageCardStyle.header}>
        <img className={StageCardStyle["icon"]} src={icon} alt="" />
        <h3 className={StageCardStyle["heading"]}>{heading}</h3>
      </div>
      <p className={StageCardStyle["stage-card-paragraph"]}>{about}</p>
    </div>
  );
};

export default StageCard;
