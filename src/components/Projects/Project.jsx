import { GitHub, LiveTvOutlined } from "@mui/icons-material";

const Project = () => {
  return (
    <>
      <div className="">
        <div className=" mb-4">
          <div className="d-flex flex-row items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Khoj Search Engine
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <a
                href="https://www.youtube.com/watch?v=2xLREplhAyY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-md transition-all hover:scale-105 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-800/60"
              >
                <span>{<LiveTvOutlined />}Live Demo</span>
              </a>
              <a
                href="https://github.com/KHOJAI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-md transition-all hover:scale-105 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <span> {<GitHub />}GitHub Repo</span>
              </a>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            An AI-powered search engine integrating Llama3 AI for interactive
            results, featuring a custom web crawler, click-based ranking
            algorithm, and Python CLI search tool.
          </p>
        </div>
        <div className="">
          <span className="">React</span>
          <span className="">Node</span>

          <span className="">Express</span>
        </div>
      </div>
    </>
  );
};
export default Project;
