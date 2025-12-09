import styles from "./Skill.module.css";
import PropTypes from "prop-types";

const Skill = ({ skillName }) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.iconContainer}>
        <span className={styles.iconName}>{skillName}</span>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skillName: PropTypes.string,
};

export default Skill;
