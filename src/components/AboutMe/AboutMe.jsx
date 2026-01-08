import Footer from "../Footer/Footer";
import styles from "./AboutMe.module.css";
import {
  Email as EmailIcon, GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon, LinkOutlined, Twitter as TwitterIcon
} from "@mui/icons-material";
import { getAboutMeData } from "../../utils/portfolio.data";

export default function AboutMe() {
  const data = getAboutMeData();

  return (
    <>
      <div className={`row align-items-center ${styles.cardOuterContainer} m-3 page-enter overflow-y-auto-scrollbar`}>
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-md-0 p-3">
          <img src="/karthik-varma-profile-pic.jpeg"
            alt="Karthik Varma" className="rounded-circle img-fluid"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div className="col-md-8">
          {/* Name & Title */}
          <h2 className="display-5">{data.name}</h2>
          <p className="lead 	d-none d-md-block">
            {data.title}
            <br />
            {data.address}
          </p>
          {/* CTA */}
          <button className={`btn mb-3 ${styles.viewResumeBtn}`}>
            <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer"
>
              <span>
                <LinkOutlined />
              </span>
              {"   "}
              Resume
            </a>
          </button>
          {/* Bio */}
          <p>{data.description}</p>
          {/* Tags */}
          <div className="mb-3">
            {data.tags.map((hashtag) => (
              <span key={hashtag} className="badge bg-secondary me-2">
                {hashtag}
              </span>
            ))}
          </div>
          {/* Work & Education */}
          <div className="row mb-3">
            <div className="col-6">
              <strong>GRADUATION</strong>
              <br />
              {data.graduation}
            </div>
            <div className="col-6">
              <strong>EDUCATION</strong>
              <br />
              {data.education}
            </div>
          </div>
          {/* Social Icons */}
          <div className="d-flex fs-3">
            <a href={`mailto:${data.email}`} target="_blank" className="me-3" rel="noopener noreferrer">
              <EmailIcon />
            </a>
            <a href={data.github} target="_blank" className="me-3" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href={data.linkedin} target="_blank" className="me-3" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href={data.twitter} target="_blank" className="me-3" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
