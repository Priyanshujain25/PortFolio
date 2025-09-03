// backend/data/seedData.js

export const profileData = {
  fullName: "Priyanshu Jain",
  email: "priyanshuj.ug22.ee@gmail.com",
  links: {
    github: "https://github.com/PriyanshuJain25",
    linkedin: "www.linkedin.com/in/priyanshu-jain-666235261",
  },
  skills: [
    { name: "JavaScript", proficiency: 5 }, // Proficiency on a scale of 1-5
    { name: "React", proficiency: 5 },
    { name: "Node.js", proficiency: 5 },
    { name: "MongoDB", proficiency: 4 },
    { name: "Express", proficiency: 4 },
    { name: "HTML/CSS", proficiency: 5 },
    { name: "Python", proficiency: 3 },
    { name: "c++", proficiency: 3 },
    { name: "Java", proficiency: 5 },
    { name: "SQL", proficiency: 4 },
    { name: "Git", proficiency: 4 },
  ],
  education: [
    {
      EducationLevel: "UnderGraduate",
      institution: "NIT, Patna",
      degree: "B.Tech in Electrical Engineering",
      marks: "8.43 CGPA",
      start_date: "2022",
      end_date: "2026",
    },
    {
      EducationLevel: "InterMediate",
      institution: "Vivek Children's Academy Jaipur ,Rajasthan",
      degree: "RBSE",
      marks: "95.40 percent",
      end_date: "2021",
    },
    {
      EducationLevel: "Matriculation",
      institution: "Vivek Children's Academy Jaipur ,Rajasthan",
      degree: "RBSE",
      marks: "86.33 percent",
      end_date: "2019",
    },
  ],

  projects: [
    {
      title: "CodeBlitz",
      description:
        "Built a real-time web platform enabling global users (10+ tested) to connect On a  Real Time code Editor With access to everyone .",
      skills: ["Node.js", "Express", "WebSockets", "React js", "Socket.io"],
      repo_url: "https://github.com/Priyanshujain25/codeBlitz.git",
      live_url: "https://codeblitz-ib63.onrender.com/",
    },
    {
      title: "GetAShow",
      description:
        "Developed A full-stack web app for viewing, and booking Movie Tickets.",
      skills: ["Express", "Node.js", "MongoDB", "Tailwind", "React.js"],
      repo_url: "https://github.com/Priyanshujain25/GetAShow.git",
      live_url: "https://getashow-server.vercel.app/",
    },
  ],
};
