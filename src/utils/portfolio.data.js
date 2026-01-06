import { config } from "./config";

const projects = {
  onlinefraud: {
    name: "Onlinefraud.in - Scam & Grievance Reporting",
    liveLink: "https://sax-violin-74798706.figma.site/",
    githubRepoLink: "https://github.com/KarthikVarma19/",
    projectIntro: "Built an anonymous scam and fraud reporting platform with proof-based submissions, community voting, risk scoring, and admin/authority verification to track and resolve trending scams.",
    techStack: ["React.js", "Node.js + Express", "PostgreSQL", "Redis", "Neo4j"],
  },
  learnSphere: {
    name: "LearnSphere – A Collaborative Learning Platform",
    liveLink: "https://serif-office-14923277.figma.site/",
    githubRepoLink: "https://github.com/KarthikVarma19/",
    projectIntro: "Built a collaborative learning platform with room-based organization, topic-level discussions, resource sharing, and AI-powered insights for students, educators, and professionals.",
    techStack: ["React.js", "Redux", "Go", "PostgreSQL", "Redis", "Supabase", "Shadcn UI"],
  },
  vahanPranam: {
    name: "Vahan Pranam – A Vehicle Management Portal",
    liveLink: "https://sticky-coyote-22357316.figma.site/",
    githubRepoLink: "https://github.com/KarthikVarma19/",
    projectIntro: "Built a unified vehicle management platform to track fuel, maintenance, and documents, generate reports, and deliver timely alerts for individuals and fleet managers.",
    techStack: ["React.js", "Node.js + Express", "MongoDB", "Redis", "Shadcn UI"],
  },
  gadgetVault: {
    name: "GadgetVault – Invoice & Warranty Tracker",
    liveLink: "https://gear-native-28333139.figma.site/",
    githubRepoLink: "https://github.com/KarthikVarma19/",
    projectIntro: "Built a SaaS platform for managing gadget invoices and warranties with smart tracking, reminders, and analytics.",
    techStack: ["React.js", "Node.js + Express", "MongoDB", "Redis", "Shadcn UI"],
  },
  trimrr: {
    name: "TRIMRR - URL SHORTENER",
    liveLink: "https://trimrr-urls.vercel.app/",
    githubRepoLink: "https://github.com/KarthikVarma19/Trimrr",
    projectIntro: "Built a full-stack URL Shortener app using ReactJS, Tailwind CSS, Supabase, and Shadcn UI, supporting user authentication, analytics, and QR code generation.",
    techStack: ["ReactJS", "Tailwind CSS", "Supabase", "Shadcn UI"],
  },
  insiderJobs: {
    name: "INSIDER JOBS - JOB PORTAL",
    liveLink: "https://insiderjob-portal.vercel.app/",
    githubRepoLink: "https://github.com/KarthikVarma19/Job-Portal",
    projectIntro: "Developed a responsive job portal frontend featuring job search, filtering, pagination, and recruiter UI using React.js and Tailwind CSS.",
    techStack: ["ReactJS", "Tailwind CSS", "Clerk Auth UI"],
  },
  portfolio: {
    name: "PERSONAL PORTFOLIO",
    liveLink: "https://helloimkarthik.vercel.app/",
    githubRepoLink: "https://github.com/KarthikVarma19/Personal-Portfolio",
    projectIntro: "Implemented a fully responsive and mobile-friendly UI, ensuring seamless user experience across all devices.",
    techStack: ["ReactJS", "Bootstrap", "MUI UI Library"],
  },
};

const education = {
  btech: {
    institutionName: "Anil Neerukonda Institute of Technology and Sciences",
    institutionShortName: "ANITS",
    institutionLogoUrl: "https://res.cloudinary.com/karthikvarma/image/upload/v1750181761/Peronal/antislogo.jpg",
    institutionWebsiteLink: "https://www.anits.org",
    qualification: "B.Tech - Information Technology",
    result: "Sep 2023 - May 2026 | CGPA : 9.2",
  },
  diploma: {
    institutionName: "Government Polytechnic, Visakhapatnam",
    institutionShortName: "GPTV",
    institutionLogoUrl: "https://res.cloudinary.com/karthikvarma/image/upload/v1750181756/Peronal/gptvlogo-removebg.png",
    institutionWebsiteLink: "https://www.govtpolyvisakhapatnam.in/",
    qualification: "Diploma - Electrical & Electronics Engineering",
    result: "Sep 2020 - May 2023 | CGPA : 8.8",
  },
  school: {
    institutionName: "Chaitanya Public School, Ukkunagaram",
    institutionShortName: "CPS",
    institutionLogoUrl: "https://res.cloudinary.com/karthikvarma/image/upload/v1750181756/Peronal/cpslogo-removebg.png",
    institutionWebsiteLink: "https://www.srishtiworldschool.in/",
    qualification: "10th Class - AP SSC",
    result: "Jun 2018 - Mar 2020 | CGPA : 9.3",
  },
};

//Coding Sites URLs
export const LEETCODE_URL = config.coding.leetcodeUrl;
export const CODECHEF_URL = config.coding.codechefUrl;
export const CODEFORES_URL = config.coding.codeforcesUrl;
export const CODESTUDIO_URL = config.coding.codestudioUrl;
export const GEEKSFORGEEKS_URL = config.coding.geeksforgeeksUrl;


export const getResumeData = () => {
  return {
    resumeEmbedDriveLink: config.resume.embedDriveLink,
    resumeViewDriveLink: config.resume.viewDriveLink,
    resumeLastUpdatedDate: config.resume.lastUpdatedDate,
    resumeShareList: config.resume.shareList,
  };
};


export const getProjectsData = () => {
  return [
    {
      projectName: projects.onlinefraud.name,
      liveLink: projects.onlinefraud.liveLink,
      GitHubRepoLink: projects.onlinefraud.githubRepoLink,
      projectIntro: projects.onlinefraud.projectIntro,
      TechStack: projects.onlinefraud.techStack,
    },
    {
      projectName: projects.learnSphere.name,
      liveLink: projects.learnSphere.liveLink,
      GitHubRepoLink: projects.learnSphere.githubRepoLink,
      projectIntro: projects.learnSphere.projectIntro,
      TechStack: projects.learnSphere.techStack,
    },
    {
      projectName: projects.vahanPranam.name,
      liveLink: projects.vahanPranam.liveLink,
      GitHubRepoLink: projects.vahanPranam.githubRepoLink,
      projectIntro: projects.vahanPranam.projectIntro,
      TechStack: projects.vahanPranam.techStack,
    },
    {
      projectName: projects.gadgetVault.name,
      liveLink: projects.gadgetVault.liveLink,
      GitHubRepoLink: projects.gadgetVault.githubRepoLink,
      projectIntro: projects.gadgetVault.projectIntro,
      TechStack: projects.gadgetVault.techStack,
    },
    {
      projectName: projects.trimrr.name,
      liveLink: projects.trimrr.liveLink,
      GitHubRepoLink: projects.trimrr.githubRepoLink,
      projectIntro: projects.trimrr.projectIntro,
      TechStack: projects.trimrr.techStack,
    },
    {
      projectName: projects.insiderJobs.name,
      liveLink: projects.insiderJobs.liveLink,
      GitHubRepoLink: projects.insiderJobs.githubRepoLink,
      projectIntro: projects.insiderJobs.projectIntro,
      TechStack: projects.insiderJobs.techStack,
    },
    {
      projectName: projects.portfolio.name,
      liveLink: projects.portfolio.liveLink,
      GitHubRepoLink: projects.portfolio.githubRepoLink,
      projectIntro: projects.portfolio.projectIntro,
      TechStack: projects.portfolio.techStack,
    },
  ];
};


export const getMyEducationData = () => {
  return [
    {
      institutionName: education.btech.institutionName,
      institutionShortName: education.btech.institutionShortName,
      institutionLogoUrl: education.btech.institutionLogoUrl,
      institutionWebsiteLink: education.btech.institutionWebsiteLink,
      qualification: education.btech.qualification,
      result: education.btech.result,
    },
    {
      institutionName: education.diploma.institutionName,
      institutionLogoUrl: education.diploma.institutionLogoUrl,
      institutionShortName: education.diploma.institutionShortName,
      institutionWebsiteLink: education.diploma.institutionWebsiteLink,
      qualification: education.diploma.qualification,
      result: education.diploma.result,
    },
    {
      institutionName: education.school.institutionName,
      institutionShortName: education.school.institutionShortName,
      institutionLogoUrl: education.school.institutionLogoUrl,
      institutionWebsiteLink: education.school.institutionWebsiteLink,
      qualification: education.school.qualification,
      result: education.school.result,
    },
  ];
}

export const getCodingStatsData = () => {
  return {
    codingStatsUrl: config.coding.codolioUrl,
  };
};


export const getContactData = () => {
  return {
    phoneno: config.contact.phoneNumber,
    email: config.contact.emailId,
    linkedin: config.contact.linkedinUrl,
    address: config.contact.address,
    websiteurl: config.contact.websiteUrl,
    mapUrl: config.contact.mapUrl,
  };
};

export const getAboutMeData = () => {
  return {
    name: config.profile.name,
    title: config.profile.title,
    description: config.profile.description,
    address: config.contact.address,
    resumeUrl: config.profile.resumeUrl,
    email: config.contact.emailId,
    github: config.profile.github,
    linkedin: config.contact.linkedinUrl,
    twitter: config.profile.twitter,
    tags: config.profile.tags,
    graduation: config.profile.graduation,
    education: config.profile.education,
  };
};