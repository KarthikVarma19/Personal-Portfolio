import { GoDotFill } from "react-icons/go";
import styles from "./HeroSection.module.css";
import Badge from "../Badge/Badge";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <h4>Hi, I'm Karthik Varma!</h4>
      <h4>I'm a Software Engineer</h4>
      <div className={styles.companyBadge}>
        <h4 className={styles.companyName}>Expected Graduation: 2026</h4>
        <Badge title="Open to work" Icon={GoDotFill} />
      </div>
      <div className={`${styles.connectSection}`}>
        <div className={styles.connectSection}>
          <a
            href="https://www.linkedin.com/in/karthikvarmaganaraju/"
            className={styles.connectSectionConnectionButton}
            target="_blank"
            rel="noopener noreferrer">
            <Badge title="Connect" />
          </a>
        </div>
        <div className={`${styles.connectSection}`}>
          Feel free to explore my portfolio and reach out <br />- I'd love to
          connect!
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
