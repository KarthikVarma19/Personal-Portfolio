import styles from "./Skill.module.css";
const Skill = ({ Icon, skillName }) => {
  return (
    <>
      <div className={styles.skillContainer}>
        <div className={styles.iconContainer}>
          <div>{Icon && <Icon size="20px" />}</div>
          <span className={styles.iconName}>{skillName}</span>
        </div>
      </div>
    </>
  );
};

export default Skill;
