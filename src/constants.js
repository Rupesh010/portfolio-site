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
import BrandingBazzarLogo from './assets/company_logo/BrandingBazzar_logo.jpg';
import AmoghLogo from './assets/company_logo/Amogh_logo.jpg';
import PlasmidLogo from './assets/company_logo/Plasmid_logo.jpg';

// Education Section Logo's
import SvvvLogo from './assets/education_logo/Svvv_logo.jpg';
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
  
