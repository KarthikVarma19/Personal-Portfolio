import Profile from "./Profile";
import codechefImageUrl from "../../assets/profiles/codechef_light.png";
import leetcodeImageUrl from "../../assets/profiles/leetcode_light.png";
import githubImageUrl from "../../assets/profiles/github_icon.png";
import codestudioImageUrl from "../../assets/profiles/codestudio_light.png";
import codeforcesImageUrl from "../../assets/profiles/codeforces.png";
import gfgImageUrl from "../../assets/profiles/gfg.png";
import { LEETCODE_URL, CODECHEF_URL, CODEFORES_URL, CODESTUDIO_URL, GEEKSFORGEEKS_URL } from "../../utils/portfolio.data";

const codingSitesData = [
  {
    name: "LeetCode",
    icon: leetcodeImageUrl,
    profileUrl: LEETCODE_URL,
  },
  {
    name: "CodeChef",
    icon: codechefImageUrl,
    profileUrl: CODECHEF_URL,
  },
  {
    name: "CodeForces",
    icon: codeforcesImageUrl,
    profileUrl: CODEFORES_URL,
  },
  {
    name: "CodeStudio",
    icon: codestudioImageUrl,
    profileUrl: CODESTUDIO_URL,
  },
  {
    name: "GeeksForGeeks",
    icon: gfgImageUrl,
    profileUrl: GEEKSFORGEEKS_URL,
  },
];

const Coding = () => {
  return (
    <div className="p-2">
      <div style={{ display: "flex", alignItems: "start", justifyContent: "between", gap: "10px"}}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg"width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
          <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
        </svg>
        <span>Development</span>
      </div>
      <div> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M96,73,34.06,128,96,183A12,12,0,1,1,80,201L8,137A12,12,0,0,1,8,119L80,55A12,12,0,0,1,96,73ZM248,119,176,55A12,12,0,1,0,160,73l61.91,55L160,183A12,12,0,1,0,176,201l72-64A12,12,0,0,0,248,119Z"></path>
          </svg>
          <span> Problem Solving </span>
          </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(70px, max-content))", gap: "12px", justifyContent: "center", marginTop: "10px" }}>
        <Profile
          platformImageUrl={githubImageUrl}
          key="GitHub"
          platformName="GitHub"
        />
        {codingSitesData.map(({ name, icon, profileUrl }) => (
          <Profile
            platformImageUrl={icon}
            key={name}
            platformName={name}
            profileUrl={profileUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Coding;
