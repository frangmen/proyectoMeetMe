import React from "react";
import ConfettiGenerator from "confetti-js";

const Confetti = () => {
  React.useEffect(() => {
    const confettiSettings = { target: "my-canvas" ,  width: "960" , rotate: "true" , max:"150"};
    const confetti = new ConfettiGenerator(confettiSettings);
    
    confetti.render();

    return () => confetti.clear();
  }, []);
  return<canvas id="my-canvas">Hola</canvas>;
};

export default Confetti;
