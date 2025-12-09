import styles from "./Navbar.module.css";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import PropTypes from "prop-types";

const Navbar = ({ email }) => {
  return (
      <div className={`${styles.navbar} shadow-sm rounded`}>
        <div className={styles.navbarComponent}>
          <h1>KV.</h1>
        </div>
        <div className={styles.navbarComponent}>
          { email && <p className={styles.navbarEmail}>{email}</p> }
        </div>
        <div className={styles.navbarComponent}>
          <ClearAllIcon className={styles.navbarOpener} fontSize="large" />
        </div>
      </div>
  );
};

Navbar.propTypes = {
  email: PropTypes.string,
};

export default Navbar;
