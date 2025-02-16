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
            className="w-28 xs:w-40"
          >
            Demo
          </Button>
          <Button
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 xs:w-40"
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
          className="my-10 md:w-2/3 w-full mx-auto  object-cover"
          src="/assets/projects/flowchart.png"
          alt=""
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
