import Button from "@mui/material/Button";
import styles from "./Profile.module.css";
const Profile = ({ platformImageUrl, platformName , profileUrl}) => {
  return (
    <>
      <div >
        <Button variant="text" href={profileUrl} target="_blank">
          <div className={styles.profileContainer}>
            <div>
              {platformImageUrl && (
                <img
                  src={platformImageUrl}
                  className={styles.codingPlatformLogo}
                />
              )}
              <p>{platformName}</p>
            </div>
          </div>
        </Button>
      </div>
    </>
  );
};

export default Profile;
