import Footer from "../Footer/Footer";
import styles from "./AboutMe.module.css";
import {
  Email as EmailIcon, GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon, LinkOutlined, Twitter as TwitterIcon
} from "@mui/icons-material";

export default function AboutMe() {

  const data = {
    name: "Karthik Varma",
    title: "Software Engineer · Competitive Programmer · MERN Stack · Tech Writer",
    description: "Hi! I’m Karthik — passionate about building scalable full‑stack applications, solving complex problems, and writing technical content. When I'm not coding, I enjoy running, tech meetups, and making experiments on latest tech.",
    address: "Gachibowli, Hyderabad, Telangana, india",
    resumeUrl: "https://drive.google.com/file/d/1z8xFqHq9tpVZezCu-51Cb38WqoiLvwS1/view",
    email: "ganarajukarthikvarma1635@gmail.com",
    github: "https://github.com/KarthikVarma19",
    linkedin: "https://linkedin.com/in/karthikvarmaganaraju",
    twitter: "https://twitter.com/karthik_varmag",
    tags: ["#backend", "#MERN", "#DSA"],
    graduation: "2026",
    education: "ANITS, Visakhapatnam",
  }

  return (
    <>
      <div className={`row align-items-center ${styles.cardOuterContainer} m-3`}>
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-md-0">
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
              View Resume
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
            <a href="https://github.com/KarthikVarma19" target="_blank" className="me-3" rel="noopener noreferrer"
>
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/karthikvarmaganaraju" target="_blank" className="me-3" rel="noopener noreferrer"
>
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com/karthik_varmag" target="_blank" className="me-3" rel="noopener noreferrer"
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
