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
      <nav className="bg-dark flex items-center justify-center shadow-md font-normal text-white w-screen h-[8vh] font-body">
        <Link
          to="/"
          className="hover:text-primary w-full max-w-[70rem] mr-4 p-2.5 xl:pl-0 transition text-xl flex items-center"
        >
          <IoIosArrowBack className="size-7" />
          Back
        </Link>
      </nav>

      <div className="xs:px-5 px-3 my-12 flex flex-col items-center font-headings">
        <section className="container text-grayText">
          <p className="text-[2.3rem] font-medium  text-center">
            {project.name}
          </p>

          <div className="flex mt-3 flex-col xs:flex-row gap-2 font-body xs:gap-5 items-center justify-center">
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

          <article className="flex items-center justify-center font-body gap-6 xs:gap-7 ">
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

          <h5 className="text-[2rem] font-medium text-center mb-5">About</h5>
          <div className="flex flex-col gap-6 font-body">
            <p>{project.textOne}</p>
            <p>{project.textTwo}</p>
            <p>{project.textThree}</p>
            <p>{project.textFour}</p>
          </div>

          <hr className="my-10" />

          <h5 className="text-[2rem] font-medium text-center mb-5">
            How it works
          </h5>

          <div className="flex flex-col gap-6 font-body">
            <p>{project.textFive}</p>
            <p>{project.textSix}</p>
          </div>

          <img
            className="mt-10 mb-3 md:w-[80%] w-full mx-auto object-cover"
            src={project.flowchartOne}
          />
          <img
            className=" mt-3 md:w-[80%] w-full mx-auto object-cover"
            src={project.flowchartTwo}
          />

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
