import Card from "../Card/Card";
import Project from "./Project";
import { getProjectsData } from "../../utils/portfolio.data";
import Footer from "../Footer/Footer";

const Projects = () => {
  
  const projectsData = getProjectsData();

  return (
    <>
    <div className="row d-flex flex-row align-items-center justify-content-center h-full w-full p-2">
      {projectsData.map((project, index) => (
        <div key={project.projectName + ":" + index} className="col-12 col-md-4">
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
    <Footer />
    </>
  );
};

export default Projects;
