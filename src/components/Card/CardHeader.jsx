import styles from "./CardHeader.module.css";
const CardHeader = ({title }) => {
  return (
    <div
      className={`${styles.cardHeader} shadow-sm`}
    >
      <p className={styles.title}>
        {title}
      </p>
    </div>
  );
};

export default CardHeader;
