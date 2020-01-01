import React from "react";
import { FrontBlockStyled } from "./homeStyled";


const FrontBlock = () => {
  return (
    <FrontBlockStyled>
      <div className="content-background">
        <div className="content-data">
          <h1>finding you the best team to build your digital dream</h1>
          <h5>development make easy</h5>
          <p>
            We scout out the finest, best value development teams and put them
            through their paces so you don’t have to. Great teams. Competitive
            prices. Less stress. Stop hitting snooze and start building your
            digital dream!
          </p>
        </div>
        <div className="content-image">image</div>
      </div>
    </FrontBlockStyled>
  );
};

export default FrontBlock;
