import Card from "../Card/Card";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div className="row d-flex flex-row align-items-center justify-content-center">
        <div className="col-12 col-md-4">
          <Card title="Project-1">
            <Project />
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card title="My Projects">
            <Project />
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card title="My Projects">
            <Project />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Projects;
