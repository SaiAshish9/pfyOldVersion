import React from "react";
// import Header from "../header/header";
import { HomeStyled } from "./homeStyled";

const Home = () => {
  return (
    <HomeStyled>
      <div className="content-background">
        <h1>finding you the best team to build your digital dream</h1>
        <h5>development make easy</h5>
        <p>
          We scout out the finest, best value development teams and put them
          through their paces so you don’t have to. Great teams. Competitive
          prices. Less stress. Stop hitting snooze and start building your
          digital dream!
        </p>
      </div>
    </HomeStyled>
  );
};

export default Home;
