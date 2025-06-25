import styles from "./Badge.module.css";
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

export default Badge;
