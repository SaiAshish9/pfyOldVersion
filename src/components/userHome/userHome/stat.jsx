import React, { useContext } from "react";
import { Icon } from "antd";
import bag from "./img/bag.png";
import clipboard from "./img/clipboard.png";
import rupee from "./img/rupee.png";
import UserContext from "../../../context/userContext";

const Stat = () => {
  const { user } = useContext(UserContext);

  // console.log(user);
  // console.log(user);
  
  return (
    <div className="stat-block">
      <div className="stat-heading-block">
        <h2>Your Stats</h2>
      </div>
      <div className="stat-card-block">
        <div className="stat-internship-block">
          <div className="internship-img-block">
            <img src={bag} alt="img"></img>
          </div>
          <div className="internship-data-block">
            <h1>{user.appliedInternships}</h1>
            <p>Applied Internships</p>
          </div>
          <Icon type="right" className="icon" />
        </div>
        <div className="stat-gig-block">
          <div className={"gig-img-block"}>
            <img src={clipboard} alt="img"></img>
          </div>
          <div className="gig-data-block">
            <h1>{user.appliedMissions}</h1>
            <p>Applied Gigs</p>
          </div>
          <Icon type="right" className="icon" />
        </div>
        <div className="stat-money-block">
          <div className="money-img-block">
            <img src={rupee} alt="img"></img>
          </div>
          <div className="money-data-block">
            <h1>pese</h1>
            <p>Money Earned</p>
          </div>
          <Icon type="right" className="icon" />
        </div>
      </div>
    </div>
  );
};
export default Stat;
