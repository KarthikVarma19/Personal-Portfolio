import { GitHub, LiveTvOutlined } from "@mui/icons-material";
import PropTypes from "prop-types";

const Project = ({
  projectName,
  liveLink,
  GitHubRepoLink,
  projectIntro,
  TechStack,
}) => {
  return (
    <div className="h-full w-full">
      <div className=" mb-4">
        <div className="d-flex flex-row items-center gap-3 mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {projectName}
          </h3>
          <div className="flex justify-center items-center">
            <iframe
              src={liveLink}
              title={projectName}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <a
            href={`${liveLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-md transition-all hover:scale-105 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-800/60"
          >
            <span>{<LiveTvOutlined />}Live Demo</span>
          </a>
            
          <a
            href={`${GitHubRepoLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-md transition-all hover:scale-105 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <span> {<GitHub />}GitHub Repo</span>
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {projectIntro}
        </p>
      </div>
      <div className="">
        {TechStack.map((tech, index) => (
          <span className="" key={index}>
            {tech + " "}
          </span>
        ))}
      </div>
    </div>
  );
};

Project.propTypes = {
  projectName: PropTypes.string,
  liveLink: PropTypes.string,
  GitHubRepoLink: PropTypes.string,
  projectIntro: PropTypes.string,
  TechStack: PropTypes.array,
};

export default Project;
