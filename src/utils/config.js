// Centralized configuration file for environment variables
// All environment variables are accessed here and exported

export const config = {
  // Resume Configuration
  resume: {
    embedDriveLink: import.meta.env.VITE_RESUME_EMBED_DRIVE_LINK,
    viewDriveLink: import.meta.env.VITE_RESUME_VIEW_DRIVE_LINK,
    lastUpdatedDate: import.meta.env.VITE_RESUME_LAST_UPDATED_DATE,
    shareList: import.meta.env.VITE_RESUME_SHARE_LIST,
  },

  // Contact Information
  contact: {
    phoneNumber: import.meta.env.VITE_CONTACT_PHONE_NUMBER,
    emailId: import.meta.env.VITE_CONTACT_EMAIL_ID,
    linkedinUrl: import.meta.env.VITE_CONTACT_LINKEDIN_URL,
    address: import.meta.env.VITE_CONTACT_ADDRESS,
    websiteUrl: import.meta.env.VITE_CONTACT_WEBSITE_URL,
    mapUrl: import.meta.env.VITE_CONTACT_MAP_URL,
  },

  // Coding Profile URLs
  coding: {
    leetcodeUrl: import.meta.env.VITE_LEETCODE_URL,
    codechefUrl: import.meta.env.VITE_CODECHEF_URL,
    codeforcesUrl: import.meta.env.VITE_CODEFORES_URL,
    codestudioUrl: import.meta.env.VITE_CODESTUDIO_URL,
    geeksforgeeksUrl: import.meta.env.VITE_GEEKSFORGEEKS_URL,
    codolioUrl: import.meta.env.VITE_CODOLIO_URL,
  },

  // Profile Information
  profile: {
    name: import.meta.env.VITE_PROFILE_NAME,
    title: import.meta.env.VITE_PROFILE_TITLE,
    description: import.meta.env.VITE_PROFILE_DESCRIPTION,
    github: import.meta.env.VITE_PROFILE_GITHUB,
    twitter: import.meta.env.VITE_PROFILE_TWITTER,
    tags: import.meta.env.VITE_PROFILE_TAGS.split(","),
    graduation: import.meta.env.VITE_PROFILE_GRADUATION,
    education: import.meta.env.VITE_PROFILE_EDUCATION,
    resumeUrl: import.meta.env.VITE_PROFILE_RESUME,
  },
};

