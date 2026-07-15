import styles from "./Experience.module.css";
import { getExperienceData } from "../../utils/portfolio.data";

export default function Experience() {
  const experienceData = getExperienceData();

  return (
    <div className={styles.experience}>
      {experienceData.map(({ role, company, location, duration, highlights }) => (
        <div className={styles.item} key={company + role}>
          <div className={styles.headerRow}>
            <p className={styles.role}>{role}</p>
            <span className={styles.duration}>{duration}</span>
          </div>
          <p className={styles.company}>
            {company} <span className={styles.location}>· {location}</span>
          </p>
          <ul className={styles.highlights}>
            {highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
