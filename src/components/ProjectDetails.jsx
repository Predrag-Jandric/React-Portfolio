import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdTimer, IoIosArrowBack } from "react-icons/io";
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
    <>
      <nav className="flex h-[8vh] w-screen items-center justify-center bg-dark font-body font-normal text-white shadow-md">
        <Link
          to="/"
          className="mr-4 flex w-full max-w-[70rem] items-center p-2.5 text-xl transition hover:text-primary xl:pl-0"
        >
          <IoIosArrowBack className="size-7" />
          Back
        </Link>
      </nav>

      <div className="my-12 flex flex-col items-center px-3 font-headings xs:px-5">
        <section className="container text-grayText">
          <p className="text-center text-[2.3rem] font-medium">
            {project.name}
          </p>

          <div className="mt-3 flex flex-col items-center justify-center gap-2 font-body xs:flex-row xs:gap-5">
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
            className="mx-auto mb-10 w-full object-cover md:w-[80%]"
            src={project.projectsImageUrl}
            alt={project.name}
          />

          <article className="flex items-center justify-center gap-6 font-body xs:gap-7">
            <Button
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1rem] xs:w-56"
            >
              Demo
            </Button>
            <Button
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1rem] xs:w-56"
            >
              Code
            </Button>
          </article>

          <hr className="my-10" />

          <h5 className="mb-5 text-center text-[2rem] font-medium">About</h5>
          <div className="flex flex-col gap-6 font-body">
            <p>{project.textOne}</p>
            <p>{project.textTwo}</p>
            <p>{project.textThree}</p>
            <p>{project.textFour}</p>
          </div>

          <hr className="my-10" />

          <h5 className="mb-5 text-center text-[2rem] font-medium">
            How it works
          </h5>

          <div className="flex flex-col gap-6 font-body">
            <p>{project.textFive}</p>
            <p>{project.textSix}</p>
          </div>

          {project.flowchart.map((flowchart, index) => (
            <img
              key={index}
              className="mx-auto mb-3 mt-10 w-full object-cover md:w-[80%]"
              src={flowchart}
            />
          ))}

          {/* <hr className="my-10" /> */}

          {/* <Link to="/" className="btn mx-auto ">
          Go back
        </Link> */}
        </section>
      </div>
    </>
  );
}

export default ProjectDetails;
