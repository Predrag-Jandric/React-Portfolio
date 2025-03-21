import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function useScrollTo(offset = 0) {
  const navigate = useNavigate();

  const scrollToSection = useCallback(
    (targetId) => {
      const target = document.getElementById(targetId);
      if (target) {
        const topPosition = target.offsetTop - offset;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
        navigate(`#${targetId}`, { replace: true });
      }
    },
    [offset, navigate]
  );

  return scrollToSection;
}

export default useScrollTo;