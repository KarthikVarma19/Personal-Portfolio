import Card from "../Card/Card";
import Project from "./Project";

const Projects = () => {
  const arr = [
    {
      projectName: "TRIMRR - URL SHORTENER",
      liveLink: "https://trimrr-urls.vercel.app/",
      GitHubRepoLink: "https://github.com/KarthikVarma19/Trimrr",
      projectIntro: `Built a full-stack URL Shortener app using ReactJS, Tailwind CSS, Supabase, and Shadcn UI, supporting user authentication, analytics, and QR code generation.`,
      TechStack: ["ReactJS", "Tailwind CSS", "Supabase", "Shadcn UI"],
    },
    {
      projectName: "INSIDER JOBS - JOB PORTAL",
      liveLink: "https://insiderjob-portal.vercel.app/",
      GitHubRepoLink: "https://github.com/KarthikVarma19/Job-Portal",
      projectIntro: `Developed a responsive job portal frontend featuring job search, filtering, pagination, and recruiter UI using React.js and Tailwind CSS.`,
      TechStack: ["ReactJS", "Tailwind CSS", "Clerk Auth UI"],
    },
    {
      projectName: "PERSONAL PORTFOLIO",
      liveLink: "https://helloimkarthik.vercel.app/",
      GitHubRepoLink: "https://github.com/KarthikVarma19/Personal-Portfolio",
      projectIntro: `Implemented a fully responsive and mobile-friendly UI, ensuring seamless user experience across all devices.`,
      TechStack: ["ReactJS", "Bootstrap", "MUI UI Library"],
    },
  ];

  return (
    <>
      <div className="row d-flex flex-row align-items-center justify-content-center">
        {arr.map((project, index) => (
          <div key={index} className="col-12 col-md-4">
            <Card title={project.projectName}>
              <Project
                liveLink={project.liveLink}
                GitHubRepoLink={project.GitHubRepoLink}
                projectIntro={project.projectIntro}
                TechStack={project.TechStack}
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
