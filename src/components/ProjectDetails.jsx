import { IoMdTimer, IoIosArrowBack } from "react-icons/io";
import { VscTypeHierarchySub } from "react-icons/vsc";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { projectsMap } from "../utils/data";
import { useEffect } from "react";
import ZoomImage from "../utils/ZoomImage";
import { RiTeamLine } from "react-icons/ri";

function ProjectDetails() {
  const { projectName } = useParams();
  const decodedProjectName = decodeURIComponent(projectName);

  const project = projectsMap.find(
    (proj) =>
      proj.name.toLowerCase().replace(/\s+/g, "-") === decodedProjectName,
  );

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top when route is changed
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

          <div className="mt-3 flex flex-col items-center justify-center gap-2 font-body md:flex-row md:gap-5">
            <span className="flex items-center gap-2">
              <IoMdTimer size={20} />
              <p>
                Build Time:{" "}
                <span className="font-bold">{project.buildTime}</span>
              </p>
            </span>
            <span className="flex items-center gap-2">
              <RiTeamLine size={20} />
              <p>
                Team size: <span className="font-bold">{project.teamSize}</span>
              </p>
            </span>
            <span className="flex items-center gap-2">
              <VscTypeHierarchySub size={20} />
              <p>
                Type: <span className="font-bold">{project.type}</span>
              </p>
            </span>
          </div>

          <hr className="mb-8 mt-6" />

          <img
            className="mx-auto mb-10 w-full object-cover md:w-[85%]"
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

          <p className="mb-4 mt-8 text-center font-body text-sm italic text-grayText/65">
            Hover or Tap to zoom in
          </p>
          {project.flowchart.map((flowchart, index) => (
            <ZoomImage key={index} src={flowchart} alt={`Flowchart ${index}`} />
          ))}

          {/* <Link to="/" className="btn mx-auto ">
          Go back
        </Link> */}
        </section>
      </div>
    </>
  );
}

export default ProjectDetails;
