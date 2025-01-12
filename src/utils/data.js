// DATA FOR MAP METHODS ACROSS THE APP
// MODIFY MAP DATA HERE AND NOWHERE ELSE.

export const navLinks = [
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "roadmap", label: "Roadmap" },
  { href: "endorsements", label: "Endorsements" },
  { href: "faq", label: "Faq" },
];

export const endorsementsMap = [
  {
    endorsementsImageUrl: "/assets/endorsements/face1.jpg",
    name: "Pera Peric",
    job: "Policeman at  XYZ Osiguranje",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/face3.jpg",
    name: "Marko Maric",
    job: "Freelancer at Self-Employed",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/face2.jpg",
    name: "Natasa Nikic",
    job: "Coleague at XYZ company",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
  },
];

export const faqMap = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "How does useState work?",
    answer:
      "The useState hook lets you add state to functional components. It returns an array with two values: the current state and a function to update it.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly in your JavaScript code.",
  },
];

export const footerMap = [
  {
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
    footerImageUrl: "/assets/all-social-icons/linkedIn.png",
  },
  {
    linkUrl: "https://github.com/Predrag-Jandric",
    footerImageUrl: "/assets/all-social-icons/github-footer.png",
  },
  {
    linkUrl: "https://www.youtube.com/@predragjandric/videos",
    footerImageUrl: "/assets/all-social-icons/youtube.png",
  },
];

export const projectsMap = [
  {
    name: "1Project_name1",
    description:
      "1111Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/frame.png",
    effort: "Solo project",
    TechUsed: ["Javascript", "Css", "Sass", "Html"],
    githubLink: "./",
    previewLink: "./",
    id: 456264,
    buildTime: "5 weeks",
    teamSize: "3 people",
  },
  {
    name: "2Project_name2",
    description:
      "2222Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/frame.png",
    effort: "Team effort",
    TechUsed: ["React", "Tailwind", "Redux Toolkit", "MongoDB"],
    githubLink: "./",
    previewLink: "./",
    id: 234234,
  },
];

export const skillsMap = [
  { name: "Html", skillsImageUrl: "/assets/skills/html.png" },
  { name: "Css", skillsImageUrl: "/assets/skills/css.png" },
  { name: "JavaScript", skillsImageUrl: "/assets/skills/js.png" },
  { name: "React", skillsImageUrl: "/assets/skills/react.png" },
  {
    name: "Redux Toolkit",
    skillsImageUrl: "/assets/skills/redux-toolkit.png",
  },
  { name: "Next.js", skillsImageUrl: "/assets/skills/nextjs.png" },
  { name: "Sass", skillsImageUrl: "/assets/skills/sass.png" },
  { name: "Tailwind", skillsImageUrl: "/assets/skills/tailwind.png" },
  { name: "Git", skillsImageUrl: "/assets/skills/git.png" },
  { name: "Figma", skillsImageUrl: "/assets/skills/figma.png" },
];
