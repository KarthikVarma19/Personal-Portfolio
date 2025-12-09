import Button from "@mui/material/Button";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ platformImageUrl, platformName , profileUrl}) => {
  return (
    <div>
      <Button variant="text" href={profileUrl} target="_blank" rel="noopener noreferrer">
        <div className={styles.profileContainer}>
          <div>
            {platformImageUrl && (
              <img
                src={platformImageUrl}
                className={styles.codingPlatformLogo}
              />
            )}
            <p style={{ fontSize: "10px", fontWeight: "bold" }}>{platformName}</p>
          </div>
        </div>
      </Button>
    </div>
  );
};

Profile.propTypes = {
  platformImageUrl: PropTypes.string,
  platformName: PropTypes.string,
  profileUrl: PropTypes.string,
};

export default Profile;
