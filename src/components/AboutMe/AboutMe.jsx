import Footer from "../Footer/Footer";
import styles from "./AboutMe.module.css";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  LinkOutlined,
  Twitter as TwitterIcon,
} from "@mui/icons-material";

export default function AboutMe() {
  return (
    <>
      <div
        className={`row align-items-center ${styles.cardOuterContainer} m-3`}
      >
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-md-0">
          <img
            src="https://res.cloudinary.com/karthikvarma/image/upload/v1750177387/Peronal/myprofile_bgremoved_pic.png"
            alt="Karthik Varma"
            className="rounded-circle img-fluid"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div className="col-md-8">
          {/* Name & Title */}
          <h2 className="display-5">Karthik Varma</h2>
          <p className="lead 	d-none d-md-block">
            Software Engineer · MERN Stack · Tech Writer
            <br />
            Visakhapatnam, Andhra Pradesh
          </p>
          {/* CTA */}
          <button className={`btn mb-3 ${styles.viewResumeBtn}`}>
            <span>
              <LinkOutlined />
            </span>
            {"   "}
            View Resume
          </button>
          {/* Bio */}
          <p>
            Hi! I’m Karthik — passionate about building scalable full‑stack
            applications, solving complex problems, and writing technical
            content. When I'm not coding, I enjoy running, tech meetups, and
            making experiments on latest tech.
          </p>
          {/* Tags */}
          <div className="mb-3">
            {["#backend", "#MERN", "#DSA"].map((tag) => (
              <span key={tag} className="badge bg-secondary me-2">
                {tag}
              </span>
            ))}
          </div>
          {/* Work & Education */}
          <div className="row mb-3">
            <div className="col-6">
              <strong>GRADUATION</strong>
              <br />
              2026
            </div>
            <div className="col-6">
              <strong>EDUCATION</strong>
              <br />
              ANITS, Visakhapatnam
            </div>
          </div>
          {/* Social Icons */}
          <div className="d-flex fs-3">
            <a
              href="mailto:ganarajukarthikvarma1635@gmail.com"
              target="_blank"
              className="me-3"
            >
              <EmailIcon />
            </a>
            <a
              href="https://github.com/KarthikVarma19"
              target="_blank"
              className="me-3"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/karthikvarmaganaraju"
              target="_blank"
              className="me-3"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/karthik_varmag"
              target="_blank"
              className="me-3"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
