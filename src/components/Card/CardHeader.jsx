import styles from "./CardHeader.module.css";
import PropTypes from "prop-types";

const CardHeader = ({ title }) => {
  return (
    <div className={`${styles.cardHeader} shadow-sm`}>
      <p className={styles.title}>
        {title}
      </p>
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
};

export default CardHeader;
