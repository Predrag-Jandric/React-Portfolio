import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { projectsMap } from "../utils/data";
import { useEffect } from "react";

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsMap.find((proj) => proj.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when ProjectDetails is mounted
  }, []);

  if (!project) return <p>Project not found.</p>;
  return (
    <div className="xs:px-5 px-3 my-12 flex flex-col items-center">
      <section className="container">
        <p className="text-[2.3rem] font-medium font-headings text-center ">
          {project.name}
        </p>

        <div className="flex mt-3 flex-col xs:flex-row gap-2 xs:gap-5 items-center justify-center">
          <span className="flex items-center gap-2">
            <IoMdTimer size={20} />
            <p>Build Time: {project.buildTime}</p>
          </span>
          <span className="flex items-center gap-2">
            <FaPeopleGroup size={20} />
            <p>Team size: {project.teamSize}</p>
          </span>
        </div>

        <hr className="my-10" />

        <img
          className="mb-10 md:w-[80%] w-full mx-auto object-cover"
          src={project.projectsImageUrl}
          alt={project.name}
        />

        <article className="flex items-center justify-center gap-6 xs:gap-7 ">
          <Button
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" xs:w-56"
          >
            Demo
          </Button>
          <Button
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" xs:w-56"
          >
            Code
          </Button>
        </article>

        <hr className="my-10" />

        <p className="text-[2rem] font-medium font-headings text-center mb-5">
          About
        </p>
        <p>{project.textOne}</p>
        <br />
        <p>{project.textTwo}</p>
        <br />
        <p>{project.textThree}</p>
        <br />
        <p>{project.textFour}</p>

        <hr className="my-10" />

        <p className="text-[2rem] font-medium font-headings text-center mb-5">
          How it works
        </p>

        <p>{project.textFive}</p>
        <br />
        <p>{project.textSix}</p>

        <img
          className="mt-10 mb-3 md:w-[80%] w-full mx-auto object-cover"
          src={project.flowchartOne}
          alt="flowchart"
        />
        <hr className="border border-gray-300" />
        <img
          className=" mt-3 md:w-[80%] w-full mx-auto object-cover"
          src={project.flowchartTwo}
          alt="flowchart"
        />

        {/* <hr className="my-10" /> */}

        {/* <Link to="/" className="btn mx-auto ">
          Go back
        </Link> */}
      </section>
    </div>
  );
}

export default ProjectDetails;
