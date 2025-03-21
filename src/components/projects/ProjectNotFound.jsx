import { Link } from "react-router-dom";
import projecterror from "../../../public/assets/projects/projecterror.png";

function ProjectNotFound() {
  return (
    <div className="flex px-8 flex-col h-screen items-center justify-center gap-5">
      <img src={projecterror} className="w-[33rem]" alt="error image" />
      <Link to="/" className="btn w-56">Go back</Link>
    </div>
  );
}

export default ProjectNotFound;
