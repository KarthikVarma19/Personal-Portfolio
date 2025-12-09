import styles from "./Card.module.css";
import CardHeader from "./CardHeader";
import PropTypes from "prop-types";

const Card = ({ title , children}) => {
  return (
    <div className={`${styles.cardOuterContainer} shadow-sm`}>
      <div className={styles.cardInnerContainer}>
        <div className={styles.cardHeaderContainer}>
          <CardHeader title={title} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
