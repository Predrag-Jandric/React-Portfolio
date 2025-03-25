import Button from "../Button";
import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";
import ZoomImage from "../../utils/ZoomImage";
import { projectsMap } from "../../utils/data";
import ProjectNotFound from "../projects/ProjectNotFound";
import ScrollToTop from "../../utils/ScrollToTop";
import {
  LuPresentation,
  LuCodeXml,
  LuSendToBack,
  LuUsers,
  LuTimer,
  LuChevronLeft,
} from "react-icons/lu";

function ProjectDetails() {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const decodedProjectName = decodeURIComponent(projectName);

  const project = projectsMap.find(
    (proj) =>
      proj.name.toLowerCase().replace(/\s+/g, "-") === decodedProjectName,
  );

  // useEffect(() => {
  //   window.scrollTo(0, 0); // scroll to the top when route is changed
  // }, []);

  if (!project) return <ProjectNotFound />;

  const howItWorksListArray = project.howItWorksList.split("\n");
  const aboutArray = project.about.split("\n\n");

  const handleBackClick = () => {
    navigate("/#projects");
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        const topPosition = element.offsetTop - 230; 
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    }, 100); //delay
  };

  return (
    <>
      <nav className="flex h-[8vh] w-full items-center justify-center bg-dark font-body font-normal text-white shadow-md">
        <div className="mx-[1.1rem] w-full max-w-[70rem]">
          <button
            onClick={handleBackClick}
            className="flex items-center justify-start p-3.5 pl-0 text-xl transition hover:text-primary"
          >
            <LuChevronLeft className="size-7" />
            Back
          </button>
        </div>
      </nav>

      <ScrollToTop />

      <div className="my-12 flex flex-col items-center px-3 font-headings xs:px-5">
        <section className="container text-grayText">
          <p className="text-center text-[2.3rem] font-medium">
            {project.name}
          </p>

          <div className="mt-3 flex flex-col items-center justify-center gap-2 font-body md:flex-row md:gap-7">
            <span className="flex items-center gap-1">
              <LuTimer size={20} />
              <p>
                Build Time:{" "}
                <span className="font-bold">{project.buildTime}</span>
              </p>
            </span>
            <span className="flex items-center gap-1">
              <LuUsers size={20} />
              <p>
                Team size: <span className="font-bold">{project.teamSize}</span>
              </p>
            </span>
            <span className="flex items-center gap-1">
              <LuSendToBack size={20} />
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
              className="flex gap-2 text-[1rem] xs:w-56"
            >
              Demo{" "}
              <span>
                <LuPresentation className="size-5" />
              </span>
            </Button>
            <Button
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 text-[1rem] xs:w-56"
            >
              Code{" "}
              <span>
                <LuCodeXml className="size-5" />
              </span>
            </Button>
          </article>

          <hr className="mb-8 mt-10" />

          <h5 className="mb-3 text-center text-[2rem] font-medium">About</h5>
          <div className="flex flex-col gap-6 font-body">
            {aboutArray.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <hr className="mb-8 mt-10" />

          <h5 className="mb-3 text-center text-[2rem] font-medium">
            How it works
          </h5>

          <div className="flex flex-col gap-6 font-body">
            <ol>
              {howItWorksListArray.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <p>{project.howItWorksText}</p>
          </div>

          <p className="mb-4 mt-8 text-center font-body text-sm italic text-grayText/65">
            Hover or Tap to zoom in
          </p>
          {project.flowchart.map((flowchart, index) => (
            <ZoomImage key={index} src={flowchart} alt={`Flowchart ${index}`} />
          ))}
        </section>
      </div>
    </>
  );
}

export default ProjectDetails;
