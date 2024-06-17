import { useEffect } from "react";

const BlurCircle = () => {
  useEffect(() => {
    let animationId;

    const loop = () => {
      const circle = document.querySelector(".circle");
      const footer = document.querySelector(".footer");

      const hRange = window.document.body.offsetWidth - circle.clientWidth;
      const vRange =
        window.document.body.offsetHeight -
        circle.clientHeight -
        footer.clientHeight;
      const time = performance.now() * 0.3;
      const x = Math.abs((time % (hRange * 2)) - hRange);
      circle.style.left = `${x}px`;
      const y = Math.abs((time % (vRange * 2)) - vRange);
      circle.style.top = `${y}px`;

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-64 h-64 bg-blue-500 blur-3xl rounded-full circle absolute top-0 left-0 z-0"></div>
  );
};

export default BlurCircle;
