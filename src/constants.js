// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Experience Section Logo's
import BrandingBazzarLogo from './assets/company_logo/brandingbazzar_logo.jpg';
import AmoghLogo from './assets/company_logo/amogh_logo.jpg';
import PlasmidLogo from './assets/company_logo/plasmid_logo.jpg';

// Education Section Logo's
import SvvvLogo from './assets/education_logo/svvv_logo.jpg';
import svmLogo from './assets/education_logo/svm_logo.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [
  //     { name: 'Springboot', logo: springbootLogo },
  //     { name: 'Node JS', logo: nodejsLogo },
  //     { name: 'Express JS', logo: expressjsLogo },
  //     { name: 'MySQL', logo: mysqlLogo },
  //     { name: 'MongoDB', logo: mongodbLogo },
  //     { name: 'Firebase', logo: firebaseLogo },
  //     { name: 'PostgreSQL', logo: postgreLogo },
  //   ],
  // },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', logo: figmaLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: PlasmidLogo,
      role: "Fullstack Developer",
      company: "Plasmid Innovations",
      date: "March 2025 - May 2025",
      desc: "Worked as a Fullstack Developer at Plasmid Innovations, contributing to the development of web applications using modern technologies. Responsibilities included designing and implementing user interfaces with Figma and React.js.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: BrandingBazzarLogo,
      role: "Jr Graphic Designer",
      company: "Branding Bazzar",
      date: "November 2024 - December 2024",
      desc: "Worked as a Jr Graphic Designer, creating visually appealing designs for various digital and print media. Utilized tools like Adobe Photoshop, Illustrator, and After Effects to produce high-quality graphics that aligned with client branding and marketing strategies. Also communicated with clients to understand their design needs and deliver customized solutions.",
      skills: [
        "communication",
        "Negotiation",
        "Design Concepts",
        "After Effects",
        "Canva & CapCut",
      ],
    },
    {
      id: 2,
      img: AmoghLogo,
      role: "Head of Creative Design",
      company: "Amogh - The Photography Club",
      date: "August 2024 - August 2025",
      desc: "Led the creative design initiatives for the photography club, overseeing the development of visual content and promotional materials. Utilized skills in Adobe Illustrator, Photoshop, After Effects, Figma, and Material UI to create engaging designs that enhanced the club's online presence and member engagement.",
      skills: [
        "Illustrator",
        "After Effects",
        "photoshop",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: SvvvLogo,
      school: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
      date: "Sept 2022 - July 2026 (Expected)",
      grade: " CGPA",
      desc: "I am currently pursuing my Bachelor's degree in Technology (B.Tech) in Computer Science and Engineering from Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore. My coursework has provided me with a strong foundation in computer science principles, programming languages, and software development methodologies. I have gained practical experience through various projects, allowing me to apply theoretical knowledge to real-world scenarios.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 1,
      img: svmLogo,
      school: "SVM Sharda Vihar, Bhopal",
      date: "2021 - 2022",
      grade: "78%",
      desc: "I completed my class 12 education from SVM Sharda Vihar, Bhopal, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: svmLogo,
      school: "SVM Sharda Vihar, Bhopal",
      date: "2019 - 2020",
      grade: "86%",
      desc: "I completed my class 10 education from SVM Sharda Vihar, Bhopal, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  //   {
  //     id: 0,
  //     title: "GitHub Profile Detective",
  //     description:
  //       "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
  //     image: githubdetLogo,
  //     tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
  //     github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
  //     webapp: "https://githubprofiledetective.netlify.app/",
  //   },
  //   {
  //     id: 1,
  //     title: "CS Prep",
  //     description:
  //       "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
  //     image: csprepLogo,
  //     tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  //     github: "https://github.com/codingmastr/CSPrep",
  //     webapp: "https://csprep.netlify.app/",
  //   },
  //   {
  //     id: 2,
  //     title: "Movie Recommendation App",
  //     description:
  //       "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //     image: movierecLogo,
  //     tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //     github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //     webapp: "https://movie-recommendation-app-jet.vercel.app/",
  //   },
  //   {
  //     id: 3,
  //     title: "Email Validator NPM Package",
  //     description:
  //       "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //     image: npmLogo,
  //     tags: ["React JS", "Node.js", "NPM", "Validation"],
  //     github: "https://github.com/codingmastr/cmtk-email-validator",
  //     webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  //   },
  //   {
  //     id: 4,
  //     title: "Task Reminder Chrome Extension Tool",
  //     description:
  //       "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //     image: taskremLogo,
  //     tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //     github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //     webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  //   },
  //   {
  //     id: 5,
  //     title: "Webverse Digital",
  //     description:
  //       "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //     image: webverLogo,
  //     tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //     github: "https://github.com/codingmastr/Webverse-Digital",
  //     webapp: "https://webversedigital.com/",
  //   },
  //   {
  //     id: 6,
  //     title: "Coding Master",
  //     description:
  //       "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //     image: cmLogo,
  //     tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //     github: "https://codingmasterweb.in/",
  //     webapp: "https://codingmasterweb.in/",
  //   },
  //   {
  //     id: 7,
  //     title: "Image Search App",
  //     description:
  //       "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //     image: imagesearchLogo,
  //     tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Search-App",
  //     webapp: "https://imagsearch.netlify.app/",
  //   },
  //   {
  //     id: 8,
  //     title: "Image Background Remover",
  //     description:
  //       "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //     image: removebgLogo,
  //     tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Background-Remover",
  //     webapp: "https://removeyourbg.netlify.app/",
  //   },
  // ];  