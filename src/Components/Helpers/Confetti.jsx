import React from "react";
import ConfettiGenerator from "confetti-js";

const Confetti = () => {
  React.useEffect(() => {
    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  return<canvas id="my-canvas">Hola</canvas>;
};

export default Confetti;
