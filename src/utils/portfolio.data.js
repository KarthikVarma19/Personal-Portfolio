import { config } from "./config";

const projects = {
  trimrr: {
    name: "TRIMRR - URL Shortener",
    liveLink: "https://trimrr-urls.vercel.app/",
    githubRepoLink: "https://github.com/KarthikVarma19/Trimrr",
    projectIntro: "Full-stack URL shortener with QR generation, click analytics, and low-latency redirection. Built RESTful APIs and indexed PostgreSQL schemas on Supabase, with secure authentication and role-based access control (RBAC).",
    techStack: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Shadcn UI"],
  },
  aiCommerce: {
    name: "AI Commerce & Support Platform",
    liveLink: "https://github.com/KarthikVarma19",
    githubRepoLink: "https://github.com/KarthikVarma19",
    projectIntro: "Agentic AI platform integrating shopping assistance and telecom customer support using LangChain, LangGraph, and RAG. Built AI agents with tool calling for product search, image-based recommendations, and order processing, with FAQs and PDFs indexed in ChromaDB. Integrated Qwen, Llama Vision, and Groq for multimodal, context-aware responses.",
    techStack: ["Python", "LangChain", "LangGraph", "ChromaDB", "RAG", "Streamlit"],
  },
};

const experience = {
  inncircles: {
    role: "Software Developer Intern",
    company: "Inncircles Technologies",
    location: "Hyderabad, India",
    duration: "Jul 2025 - Present",
    highlights: [
      "Built scalable backend services using Node.js and Express.js for construction planning workflows — dependency tracking, scheduling, versioning, and hierarchical project structures.",
      "Optimized queries, indexing strategies, and critical REST APIs for 4M+ records, reducing response times by 55%.",
      "Designed a configurable validation framework to execute dynamic business rules across modules, reducing workflow failures by 65%.",
      "Built reusable master data management components and sync workflows for consistent data propagation across global templates.",
      "Raised reliability with automated testing (85% coverage), SonarQube quality gates, and production analytics monitoring.",
    ],
  },
};

const education = {
  btech: {
    institutionName: "Anil Neerukonda Institute of Technology and Sciences",
    institutionShortName: "ANITS",
    institutionLogoUrl: "https://res.cloudinary.com/karthikvarma/image/upload/v1750181761/Peronal/antislogo.jpg",
    institutionWebsiteLink: "https://www.anits.org",
    qualification: "B.Tech - Information Technology",
    result: "Sep 2023 - Apr 2026 | CGPA : 9.15",
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
      projectName: projects.trimrr.name,
      liveLink: projects.trimrr.liveLink,
      GitHubRepoLink: projects.trimrr.githubRepoLink,
      projectIntro: projects.trimrr.projectIntro,
      TechStack: projects.trimrr.techStack,
    },
    {
      projectName: projects.aiCommerce.name,
      liveLink: projects.aiCommerce.liveLink,
      GitHubRepoLink: projects.aiCommerce.githubRepoLink,
      projectIntro: projects.aiCommerce.projectIntro,
      TechStack: projects.aiCommerce.techStack,
    },
  ];
};


export const getExperienceData = () => {
  return [
    {
      role: experience.inncircles.role,
      company: experience.inncircles.company,
      location: experience.inncircles.location,
      duration: experience.inncircles.duration,
      highlights: experience.inncircles.highlights,
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