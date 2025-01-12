import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import Button from "./Button";
import { useParams } from "react-router-dom";
import { projectsMap } from "./Projects";

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsMap.find((proj) => proj.id === parseInt(id));

  if (!project) return <p>Project not found.</p>;
  return (
    <div className="xs:px-5 px-3 my-12 flex flex-col items-center">
      <section className="container">
        <p className="text-[2.3rem] font-medium font-headings text-center mb-3">
          {project.name}
        </p>

        <div className="flex gap-5 items-center justify-center">
          <span className="flex items-center gap-2">
            {" "}
            <IoMdTimer size={20} />
            <p>Build Time: {project.buildTime}</p>
          </span>
          <span className="flex items-center gap-2">
            {" "}
            <FaPeopleGroup size={20} />
            <p>Team size: {project.teamSize}</p>
          </span>
        </div>

        <hr className="mt-5" />

        <img
          className="my-10 md:w-2/3 w-full mx-auto  object-cover"
          src="/assets/projects/frame.png"
          alt=""
        />

        <article className="flex items-center justify-center gap-6 xs:gap-7 mb-10">
          <Button
            href={projectsMap.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 xs:w-40"
          >
            Demo
          </Button>
          <Button
            href={projectsMap.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 xs:w-40"
          >
            Code
          </Button>
        </article>

        <hr className="mb-5" />

        <p className="text-[2rem] font-medium font-headings text-center mb-5">
          Introduction
        </p>
        <p>
          Description: Start with a concise and engaging title that accurately
          reflects the projects purpose. Provide a brief overview of the
          project, highlighting its key features and functionalities.
          <br />
          <br />
          Project Goals & Objectives: Clearly state the projects goals and
          objectives. What problems did it aim to solve? What were the intended
          outcomes?
          <br />
          <br />
          Target Audience/User Base: Who was this project designed for?
          Understanding the target audience helps demonstrate your ability to
          tailor solutions to specific needs.
        </p>
        <br />

        <p>
          Achievements: Highlight the key achievements of the project. Did it
          meet its goals and objectives? Did it have a positive impact on users
          or the business?
        </p>
        <br />

        <p>
          Lessons Learned: Reflect on the lessons learned from the project. What
          would you do differently next time? How did this project contribute to
          your professional growth?
        </p>
        <hr className="mt-5" />

        <p className="text-[2rem] font-medium font-headings text-center mb-5">
          How it works
        </p>
        <p>
          Technologies Used: List all the technologies used in the project
          (e.g., programming languages, frameworks, libraries, databases,
          tools). This showcases your technical expertise and versatility.
          <br />
          <br />
          Development Approach: Describe the development process you followed
          (e.g., Agile methodologies, waterfall model). Briefly explain your
          design and implementation decisions.
          <br />
          <br />
          Technical Challenges & Solutions: Discuss any technical challenges you
          encountered during development and how you overcame them. This
          demonstrates your problem-solving and critical thinking skills.
          <br />
          <br />
          Key Features & Functionality: Delve deeper into the specific features
          and functionalities of the project. Use bullet points or concise
          descriptions to make it easy to read. Use clear and concise language
          to describe the user flow. Break down the process into logical steps.
          <br />
          <br />
          <img
            className="my-10 md:w-2/3 w-full mx-auto  object-cover"
            src="/assets/projects/flowchart.png"
            alt=""
          />
        </p>
        <hr className="mb-5" />
        <p className="text-[2rem] font-medium font-headings text-center mb-5">
          Teamwork
        </p>
        <p>
          Specific Responsibilities: Clearly outline your specific roles and
          responsibilities within the project. Did you work independently or as
          part of a team? What were your contributions to the projects success?
          <br />
          <br />
          Teamwork & Collaboration: If it was a team project, describe your
          experiences with teamwork and collaboration. How did you effectively
          communicate and coordinate with other team members?
          <br />
          <br />
          Live Demo/Link to Project Code Repository Link Awards or Recognition:
          If the project received any awards or recognition, mention them here.
        </p>
      </section>
    </div>
  );
}

export default ProjectDetails;
