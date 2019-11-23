import React from "react";

import PetGrid from "./pet-card/pet-grid";

interface GsapExampleProps {}

export const GsapExample: React.FunctionComponent<GsapExampleProps> = () => {
  return (
    <div>
      GSAP Example
      <PetGrid />
    </div>
  );
};
