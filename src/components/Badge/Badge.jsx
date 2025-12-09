import styles from "./Badge.module.css";
import PropTypes from "prop-types";
const Badge = ({ Icon, title }) => {
  return (
    <div className={`${styles.statusBadge} ${styles.glowBadge}`}>
      <div className={styles.badgeContainer}>
        <span>{Icon && <Icon  className={styles.iconClass}/>}</span>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

Badge.propTypes = {
  Icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default Badge;
