
const RESUME_EMBED_DRIVE_LINK = "https://drive.google.com/file/d/1cVMVb0Evi2pQBs03_qyr0xAgnusUQOZm/preview"
const RESUME_VIEW_DRIVE_LINK="https://drive.google.com/file/d/1cVMVb0Evi2pQBs03_qyr0xAgnusUQOZm/view"
const RESUME_LAST_UPDATED_DATE="30th November, 2025"
const RESUME_SHARE_LIST = ["email", "whatsapp", "twitter", "telegram", "linkedin"]

const TRIMRR_NAME="TRIMRR - URL SHORTENER"
const TRIMRR_LIVE_LINK="https://trimrr-urls.vercel.app/"
const TRIMRR_GITHUB_REPO_LINK="https://github.com/KarthikVarma19/Trimrr"
const TRIMRR_PROJECT_INTRO="Built a full-stack URL Shortener app using ReactJS, Tailwind CSS, Supabase, and Shadcn UI, supporting user authentication, analytics, and QR code generation."
const TRIMRR_TECH_STACK=["ReactJS", "Tailwind CSS", "Supabase", "Shadcn UI"]

const INSIDERJOBS_NAME="INSIDER JOBS - JOB PORTAL"
const INSIDERJOBS_LIVE_LINK="https://insiderjob-portal.vercel.app/"
const INSIDERJOBS_GITHUB_REPO_LINK="https://github.com/KarthikVarma19/Job-Portal"
const INSIDERJOBS_PROJECT_INTRO="Developed a responsive job portal frontend featuring job search, filtering, pagination, and recruiter UI using React.js and Tailwind CSS."
const INSIDERJOBS_TECH_STACK=["ReactJS", "Tailwind CSS", "Clerk Auth UI"]

const PORTFOLIO_NAME="PERSONAL PORTFOLIO"
const PORTFOLIO_LIVE_LINK="https://helloimkarthik.vercel.app/"
const PORTFOLIO_GITHUB_REPO_LINK="https://github.com/KarthikVarma19/Personal-Portfolio"
const PORTFOLIO_PROJECT_INTRO="Implemented a fully responsive and mobile-friendly UI, ensuring seamless user experience across all devices."
const PORTFOLIO_TECH_STACK=["ReactJS", "Bootstrap", "MUI UI Library"]

const BTECH_INSTITUTION_NAME="Anil Neerukonda Institute of Technology and Sciences"
const BTECH_INSTITUTION_SHORTNAME="ANITS"
const BTECH_INSITUTUTION_LOGO="https://res.cloudinary.com/karthikvarma/image/upload/v1750181761/Peronal/antislogo.jpg"
const BTECH_INSTITUTION_WEBSITE_URL="https://www.anits.org"
const BTECH_INSTITUTION_QUALIFICATION="B.Tech - Information Technology"
const BTECH_INSTITUTION_RESULT="CGPA : 9.3"

const DIPLOMA_INSTITUTION_NAME="Government Polytechnic, Visakhapatnam"
const DIPLOMA_INSTITUTION_SHORTNAME="GPTV"
const DIPLOMA_INSITUTUTION_LOGO="https://res.cloudinary.com/karthikvarma/image/upload/v1750181756/Peronal/gptvlogo-removebg.png"
const DIPLOMA_INSTITUTION_WEBSITE_URL="https://www.govtpolyvisakhapatnam.in/"
const DIPLOMA_INSTITUTION_QUALIFICATION="Diploma - Electrical & Electronics Engineering"
const DIPLOMA_INSTITUTION_RESULT="Percentage : 87.95%"

const SCHOOL_INSTITUTION_NAME="Chaitanya Public School, Ukkunagaram"
const SCHOOL_INSTITUTION_SHORTNAME="CPS"
const SCHOOL_INSITUTUTION_LOGO="https://res.cloudinary.com/karthikvarma/image/upload/v1750181756/Peronal/cpslogo-removebg.png"
const SCHOOL_INSTITUTION_WEBSITE_URL="https://www.srishtiworldschool.in/"
const SCHOOL_INSTITUTION_QUALIFICATION="10th Class - AP SSC"
const SCHOOL_INSTITUTION_RESULT="CGPA : 9.3"

const CODOLIO_URL="https://codolio.com/profile/KarthikVarma19"

const CONTACT_PHONE_NUMBER="+91 9676502330"
const CONTACT_EMAIL_ID="ganarajukarthikvarma1635@gmail.com"
const CONTACT_LINKEDIN_URL="https://www.linkedin.com/in/karthikvarmaganaraju/"
const CONTACT_ADDRESS="Gachibowli, Hyderabad, Telangana, india"
const CONTACT_WEBSITE_URL="www.karthik.rocks"
const CONTACT_MAP_URL="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sInncircles!6i13"

//Coding Sites URLs
export const LEETCODE_URL="https://leetcode.com/u/KarthikVarma19/"
export const CODECHEF_URL="https://www.codechef.com/users/karthikvarma19"
export const CODEFORES_URL="https://codeforces.com/profile/Karthik_Varma"
export const CODESTUDIO_URL="https://www.naukri.com/code360/profile/gkv_567"
export const GEEKSFORGEEKS_URL="https://www.geeksforgeeks.org/user/karthikvarma19/"


export const getResumeData = () => {
  return {
    resumeEmbedDriveLink: RESUME_EMBED_DRIVE_LINK,
    resumeViewDriveLink: RESUME_VIEW_DRIVE_LINK,
    resumeLastUpdatedDate: RESUME_LAST_UPDATED_DATE,
    resumeShareList: RESUME_SHARE_LIST,
  };
};


export const getProjectsData = () => {
  return [
    {
      projectName: TRIMRR_NAME,
      liveLink: TRIMRR_LIVE_LINK,
      GitHubRepoLink: TRIMRR_GITHUB_REPO_LINK,
      projectIntro: TRIMRR_PROJECT_INTRO,
      TechStack: TRIMRR_TECH_STACK,
    },
    {
      projectName: INSIDERJOBS_NAME,
      liveLink: INSIDERJOBS_LIVE_LINK,
      GitHubRepoLink: INSIDERJOBS_GITHUB_REPO_LINK,
      projectIntro: INSIDERJOBS_PROJECT_INTRO,
      TechStack: INSIDERJOBS_TECH_STACK,
    },
    {
      projectName: PORTFOLIO_NAME,
      liveLink: PORTFOLIO_LIVE_LINK,
      GitHubRepoLink: PORTFOLIO_GITHUB_REPO_LINK,
      projectIntro: PORTFOLIO_PROJECT_INTRO,
      TechStack: PORTFOLIO_TECH_STACK,
    },
  ];
};


export const getMyEducationData = () => {
  return [
    {
      institutionName: BTECH_INSTITUTION_NAME,
      institutionShortName: BTECH_INSTITUTION_SHORTNAME,
      institutionLogoUrl: BTECH_INSITUTUTION_LOGO,
      institutionWebsiteLink: BTECH_INSTITUTION_WEBSITE_URL,
      qualification: BTECH_INSTITUTION_QUALIFICATION,
      result: BTECH_INSTITUTION_RESULT,
    },
    {
      institutionName: DIPLOMA_INSTITUTION_NAME,
      institutionLogoUrl: DIPLOMA_INSITUTUTION_LOGO,
      institutionShortName: DIPLOMA_INSTITUTION_SHORTNAME,
      institutionWebsiteLink: DIPLOMA_INSTITUTION_WEBSITE_URL,
      qualification: DIPLOMA_INSTITUTION_QUALIFICATION,
      result: DIPLOMA_INSTITUTION_RESULT,
    },
    {
      institutionName: SCHOOL_INSTITUTION_NAME,
      institutionShortName: SCHOOL_INSTITUTION_SHORTNAME,
      institutionLogoUrl: SCHOOL_INSITUTUTION_LOGO,
      institutionWebsiteLink: SCHOOL_INSTITUTION_WEBSITE_URL,
      qualification: SCHOOL_INSTITUTION_QUALIFICATION,
      result: SCHOOL_INSTITUTION_RESULT,
    },
  ];
}

export const getCodingStatsData = () => {
  return {
    codingStatsUrl: CODOLIO_URL,
  };
};


export const getContactData = () => {
  return  {
    phoneno: CONTACT_PHONE_NUMBER,
    email: CONTACT_EMAIL_ID,
    linkedin: CONTACT_LINKEDIN_URL,
    address: CONTACT_ADDRESS,
    websiteurl: CONTACT_WEBSITE_URL,
    mapUrl: CONTACT_MAP_URL,
  };
};

