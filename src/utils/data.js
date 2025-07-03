// DATA FOR MAP METHODS ACROSS THE APP
// MODIFY MAP DATA HERE AND NOWHERE ELSE.

export const navLinks = [
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "roadmap", label: "Roadmap" },
  { href: "endorsements", label: "Endorsements" },
  { href: "contact", label: "Contact" },
];

export const mobilenavLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "roadmap", label: "Roadmap" },
  { href: "endorsements", label: "Endorsements" },
  { href: "FAQ", label: "FAQ" },
  { href: "contact", label: "Contact" },
];

export const skillsMap = [
  { name: "JavaScript", skillsImageUrl: "/assets/skills/js.png" },
  { name: "React", skillsImageUrl: "/assets/skills/react.png" },
  {
    name: "Redux Toolkit",
    skillsImageUrl: "/assets/skills/redux-toolkit.png",
  },
  { name: "Next.js", skillsImageUrl: "/assets/skills/nextjs.png" },
  { name: "Tailwind", skillsImageUrl: "/assets/skills/tailwind.png" },
  { name: "Node.js", skillsImageUrl: "/assets/skills/nodejs.png" },
  { name: "Mongo DB", skillsImageUrl: "/assets/skills/mongodb.png" },
  { name: "Html", skillsImageUrl: "/assets/skills/html.png" },
  { name: "Css", skillsImageUrl: "/assets/skills/css.png" },
  { name: "Git", skillsImageUrl: "/assets/skills/git.png" },
];

export const projectsMap = [
  {
    name: "Split Smart",
    description:
      "Split Smart is a dashboard app that helps people keep track of shared costs with friends, family, or roommates. Users can make groups, add members and costs, and keep track of their balances. The app figures out how to pay off debts between people in the group.",
    projectsImageUrl: "/assets/projects/splitsmartprev.png",
    flowchart: [
      "/assets/projects/splitsmartflowchartone.png",
      "/assets/projects/splitsmartflowcharttwo.png",
    ],
    effort: "Team project",
    TechUsed: ["React, ", "Tailwind, ", "Redux Toolkit, ", "React Router. "],
    githubLink: "https://github.com/Predrag-Jandric/Split-Smart",
    previewLink: "https://split-smart.netlify.app/",
    id: 3456267564,
    buildTime: "7 weeks",
    teamSize: "5 people",
    type: "Front end only",
    about: `Split Smart is an application that aims to make splitting expenses among friends, family, or colleagues easy. Whether planning a trip, organizing a group dinner, or managing shared expenses, Split Smart helps you keep track of who owes what and ensures that everyone pays their equal or unequal share. Your data is automatically saved in your browser locally so that you can always come back to where you left off.\n\nBuilding Split Smart taught me valuable lessons about listening to feedback and improving the app with in-depth testing. I also learned the importance of clear documentation for future development and maintenance. One of the major technical challenges was implementing the logic for accurate contribution changes for each member and ensuring that the app was user-friendly and intuitive.\n\nOur team consisted of one Product Owner, two Developers, one UX/UI Designer, and one Scrum Master. We followed Agile methodologies, with regular sprints, iterations, and backlog management. Design and implementation decisions were made collaboratively, ensuring a simple and efficient approach.\n\nMy role included implementing complex logic, managing state with Redux, turning designs into a fully responsive user interface, fixing bugs and optimizing. I also worked on integrating animations and charts, writing documentation, testing and implementing the dark mode.`,
    howItWorksList: `Users can:\n1. Create groups for different events or activities.\n2. Add members to the groups and assign expenses.\n3. Track total budget, expenses, and remaining budget.\n4. Customize contributions for each member.\n5. Edit group details, such as name, description, and image.\n6. Search for groups using the search bar.\n7. Toggle between light and dark modes for a comfortable viewing experience.`,
    howItWorksText: `The app is built with React for the UI and core logic. We used Redux Toolkit to handle global state, and React Router to manage page navigation. Tailwind CSS took care of the styling, while Framer Motion added smooth animations. For visualizing data, we used Recharts, and React Icons along with React Toastify helped with icons and toast notifications.`,
  },
  {
    name: "Crusty's pizza",
    description:
      "Crusty's pizza online simulates a local pizza business where people can order pizza easily, to be delivered to their location. Users can pick from a variety of pizzas, add them to cart, and input details for delivery. The app also has a search function to find orders quickly.",
    projectsImageUrl: "/assets/projects/pizzaprev.png",
    flowchart: ["/assets/projects/pizzaflowchart.png"],
    effort: null,
    TechUsed: [
      "React, ",
      "RESTful API integration, ",
      "React Router, ",
      "Tailwind, ",
      "Redux Toolkit. ",
    ],
    githubLink: "https://github.com/Predrag-Jandric/Crustys-Pizza",
    previewLink: "https://crusty-pizza.netlify.app/",
    id: 4311466798264,
    buildTime: "4 weeks",
    teamSize: "1 person",
    type: "Front end only",
    about: `This small scale solo project served to practice my React skills and learn how to work with APIs. I used the API from the fakestoreapi.com to get the data. I learned how to fetch data from an API, display it in a user friendly way, and manage the state of the app.\n\nThis was a solo project that was initially built as a part of the tutorial but which I later expanded and customized according to my vision. I learned how to structure a project, manage state, and implement logic for a small scale e-commerce app.`,
    howItWorksList: `Users can:\n1. Order different pizzas in their cart and change quantity.\n2. Input their details for delivery.\n3. Search for their order in the search bar.`,
    howItWorksText: `As a main framework, I've used React to build the user interface and logic. Redux Toolkit for global state management. React Router for page switching. Tailwind CSS for styling. React Icons and React hot toast for icons and notifications.`,
  },
  {
    name: "Pangea Dino Museum",
    description:
      "Pangea is an online museum website for adults who love dinosaurs, that teaches and entertains them. Users can learn about different types of dinosaurs and time periods, play a quiz game testing their knowledge, and buy dinosaur items In a small simulated online store.",
    projectsImageUrl: "/assets/projects/pangeaprev.png",
    flowchart: ["/assets/projects/pangeaflowchart.png"],
    effort: "Team project",
    TechUsed: [
      "MongoDB, ",
      "NodeJS, ",
      "React, ",
      "Redux Toolkit, ",
      "Tailwind. ",
    ],
    githubLink: "https://github.com/Predrag-Jandric/Pangea-Dino-Museum",
    previewLink: "https://pangea-dino-museum.netlify.app/",
    id: 4379867828864,
    buildTime: "6 weeks",
    teamSize: "5 people",
    type: "Full stack",
    about: `Pangea Dino Museum has a museum section that educates users about different dinosaur species and time periods, and the e-commerce section where users can purchase dinosaur images. The app also features a quiz game where users can test their knowledge of dinosaurs.\n\nBuilding Pangea, I reinforced an important lesson of working within a larger team and connecting the front end with the back end. I learned for the first how to work with MongoDB databases, and how to build an API using Node.js, and Express. In the quiz game, I also practiced implementing complex boolean logic using switch statements and conditional rendering.\n\nAs a team, we used Agile methodology for project management along with regular sprints, iterations, and backlog management. Our team consisted of two Product owners, two Developers, and one Scrum Master.\n\nMy role was building the UI and logic for the e-commerce section, quiz game section, timeline section, animations, and navigation. I also created a simple API and connected it to the front end. This project was a scaled down version of the original which has even more features.`,
    howItWorksList: `Users can:\n1. Learn about different dinosaur periods.\n2. Add items to the cart in the e-commerce store section.\n3. Modify the items on the shopping cart page.\n4. Play the quiz game.\n5. Navigate through the museum.`,
    howItWorksText: `We used React as the main framework for building the user interface and logic. Redux Toolkit for global state management. React Router for page switching. Tailwind CSS for styling. MongoDB for the database. Node.js and Express for the API. React Icons and React hot toast for icons and notifications.`,
  },
  {
    name: "Ebuy",
    description:
      "Ebuy is a smaller, full stack version of eBay. People can sign up, log in, look at items, and see what they bought in the past. They can also search for products, add or remove items from their cart, and use different filtering criteria. This is the biggest project I've ever worked on.",
    projectsImageUrl: "/assets/projects/ebuyprev.png",
    flowchart: ["/assets/projects/ebuyflowchart.png"],
    effort: "Team project",
    TechUsed: [
      "Typescript, ",
      "React, ",
      "MongoDB, ",
      "NodeJS, ",
      "Redux Toolkit, ",
      "Tailwind. ",
    ],
    githubLink: "https://github.com/Predrag-Jandric/Ebuy",
    previewLink: "https://ebuy.fly.dev/",
    id: 221678558264,
    buildTime: "8 weeks",
    teamSize: "8 people",
    type: "Full stack",
    about: `Ebuy is a full stack app that’s a simplified version of eBay. Users can browse through products, filter them by categories, search for specific items, and add things to their shopping cart. Logged in users can also view their past orders. The app is fully responsive, works across all devices, and includes features like pagination and login/logout.\n\nWorking on this project helped me get more comfortable with things like syncing filters and search queries, handling paginated product data, and managing a lot of global state using Redux. I also got to use TypeScript, which made the development easier and helped catch bugs early. Figuring out how to keep the cart and user sessions working well across the app and how to connect and sync frontend with the backend were the biggest challenges which took team collaboration and a lot of pair programming sessions.\n\nWe followed an Agile process with sprints, planning sessions, and team check ins. In the beginning, we had separate frontend and backend teams, but as technical debt started to build up, we realized we needed to work as one team to succeed and solve all the problems. There was a lot of pair programming, testing, and helping each other out along the way.\n\nMy main focus was on the frontend, building out the core logic, implementing API calls, styling the UI with Tailwind, and making sure everything worked well across different devices. I worked on the cart, search and filter functionality, order history, and page layouts. I also did a lot of pair programming with the team. Actually, the idea for this app was mine, and the team voted to build it so I am very happy that we finished it successfully.`,
    howItWorksList:
      "Users can:\n1. Browse through a variety of products in a grid layout.\n2. Filter products by category (like Electronics, Clothes, Music).\n3. Search for specific items using the search bar.\n4. Sort and paginate through product listings.\n5. Add items to the shopping cart, adjust quantities, and remove them.\n6. Register, log in, and log out. \n7. View past orders on their profile page.\n8. Use the app on any device, it’s fully responsive.",
    howItWorksText:
      "React with TypeScript for the frontend, Redux Toolkit for global state management, React Router for page navigation, and Tailwind CSS for styling.The backend is built with Express and MongoDB using Mongoose. The backend team used JWT and bcrypt for secure login, registration and tools like dotenv for config, cookie parser for handling cookies, and morgan for request logging.",
  },
];

export const endorsementsMap = [
  {
    endorsementsImageUrl: "/assets/endorsements/jim.jpg",
    name: "Jim Medlock",
    job: "Founder of Chingu.io",
    message:
      "In the short time Predrag has been with Chingu he has left his mark as an active participant in multiple of our 6 week remote team projects, as a presenter at our weekly Spotlight sessions, and as a contributor of suggestions on how we can improve.\n\nHe is an excellent Developer, but also understands the importance of teamwork and is a teammate everyone has come to trust and value.In ",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/fari.jpg",
    name: "Farzaneh Falakrou",
    job: "UI/UX Designer",
    message:
      "Predrag and I were part of a dedicated team on a ‘‘Chingu’’ project, where we worked together to build an app from the scratch in six weeks. As a developer, he made important contributions with his technical skills and dedication.\n\nPredrag showed a good understanding of development, followed our design guidelines, and kept communication open. His active participation and constructive feedback enhanced our teamwork.",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/afrah.jpg",
    name: "Afrah Ali",
    job: "Scrum Master",
    message:
      "I had the pleasure of working alongside Predrag at Chingu, where we collaborated on developing an app from the ground up. As the Scrum Master and Predrag as the developer, I was consistently impressed by his dedication to delivering high quality work. His commitment was unparalleled, always ensuring that tasks were completed to the highest standard.\n\nPredrag was incredibly supportive when team members encountered challenges, often creating video tutorials to explain complex concepts.",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/anitta.jpg",
    name: "Anita Boakye-Yiadom",
    job: "Product owner and Agile coach",
    message: `Predrag was an outstanding front end developer in my Chingu scrum team. As a scrum master during the 6 week Solar Panel Planner app project, his problem solving skills and attention to detail were instrumental. \n\nPredrag is a committed and dedicated professional who constantly shows outstanding leadership with teammates as a senior developer, guiding and initiating pair programming sessions.`,
  },
];

export const faqMap = [
  {
    question: "What makes you stand out from other developers?",
    answer: `- I have a strong drive to keep learning, which is essential in the tech field which always evolves.\n- I have a lot of experience working on different projects with different teams, and I always keep a solution focused mindset. \n- I am disciplined, focused on writing code that is easy to read and maintain, and dedicated to making the workplace a positive place for everyone.\n- I like writing documentation, giving talks, and helping to create a culture of learning together. These things aren't a chore for me.`,
  },
  {
    question:
      "How much experience do you have as a frontend developer, and what kinds of projects have you worked on?",
    answer:
      "I've been coding for a few years and have worked on more than 100+ projects of different sizes and levels of difficulty. You can see them all on my GitHub page. I follow best practices and design principles that are scalable, responsive, and pixel perfect, to make sure that the code is high quality, easy to read, and easy to maintain over time.",
  },
  {
    question: "Do you have experience with [specific framework/tool]?",
    answer:
      "I might not have used every tool directly, but I learn quickly and want to learn new skills to meet the needs of the project. I don't think programming is about remembering syntax; it's about being able to solve problems and understand concepts. A big part of my development process is staying curious, learning new things, and keeping up with the latest tech trends.",
  },
  {
    question:
      "Do you have experience with full stack development or backend technologies?",
    answer:
      "Most of my work has been in front end development, but I also know most things about backend technologies like Node.js, Express, and MongoDB databases. I'm always trying to get better at these things.",
  },
  {
    question: "How do you work in teams, and how do you respond to feedback?",
    answer:
      "I have worked on opensource projects with developers from a wide range of backgrounds, and I have often been the lead developer. This has helped me become a better team player. I value working together and talking to each other, and I can quickly adjust to how different teams work. I like getting constructive criticism because it helps me become a better developer. I helped my coworkers when they had problems by sharing what I knew and helping them figure out how to fix them. This made sure that we all grew together.",
  },
  {
    question: "How do you meet deadlines and handle challenges?",
    answer:
      "In my opinion, effective team communication is essential to establishing reasonable deadlines and meeting them on schedule. In order to stay on course and deliver for the end user on time, I have worked with the Scrum framework, which promotes cooperation between the development team, Scrum Master, and Product Owner. My strategy when faced with difficulties is to divide the issue into smaller, easier to manage components. I usually find that taking a short walk helps me unwind and come up with new ideas. We then all present our solutions during the following team brainstorming session, and we collectively select the best ideas.",
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
