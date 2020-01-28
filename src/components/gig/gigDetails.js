/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef, useContext } from "react";
import { Button, Icon, Carousel } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import GigContext from "../../context/gigContext";

// import { gigDetailStyled } from "./intershipDetailStyled";

const GigDetail = props => {
 

  //#region
  const { gig } = useContext(GigContext);

  const selectedGigId = props.match.params.id;

  const myGig = gig.find(thisGig => thisGig._id === selectedGigId);

  /* ------------------------ gig provider state ----------------------- */
  const companyLogo = myGig.company.logoUrl;
  const designation = myGig.title;
  const gigProvider = myGig.company.companyName;

  /* ------------------------- gig brief state ------------------------- */
  const reward = myGig.reward;
  const task = myGig.tasks.length;
  const appliedBeforeTime = myGig.applyBefore;
  const type = myGig.missionType;

  /* ------------------------- gig detail state ------------------------ */
  const aboutGigProvider = myGig.company.aboutCompany;
  const aboutGig = myGig.about;
  const requirement = myGig.requirements;

  useEffect(() => {
    console.log(gigProvider);
    // console.log(gig.company)
  }, [gigProvider]);

  //#endregion

  let myCarousel = useRef();

  const next = () => {
    myCarousel.next();
  };
  const previous = () => {
    myCarousel.prev();
  };

  const carouselProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="gig-details-page">
      <div className="gig-main-block">
        <div className="gig-provider-block-One">
          <div className="gig-provider-block-two">
            <div className="gig-provider-block-three">
              <img src={companyLogo}></img>
            </div>
            <div className="gig-provider-block-four">
              <h1 className="gig-provider-heading-one">{designation}</h1>
              <h3 className="gig-provider-heading-two">{gigProvider}</h3>
            </div>
          </div>
        </div>

        <div className="gig-brief-block">
          <div className="gig-brief-content">
            <h5>Rewards</h5>
            <h4>{reward}</h4>
          </div>
          <div className="gig-brief-content">
            <h5>Tasks</h5>
            <h4>{task}</h4>
          </div>
          <div className="gig-brief-content">
            <h5>Apply Before</h5>
            <h4>{appliedBeforeTime}</h4>
          </div>
          <div className="gig-brief-content">
            <h5>Type</h5>
            <h4>{type}</h4>
          </div>
        </div>
        <div className="boundary-one" />

        <div className="gig-detail-block">
          <div>
            <h2>Task to be done</h2>
            <div>
              <Icon type="left-circle" onClick={previous} />
              <Carousel ref={node => (myCarousel = node)} {...carouselProps}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
              <Icon type="right-circle" onClick={next} />
            </div>
          </div>
          <br />
          <div>
            <h2>About {gigProvider}</h2>
            <p>{aboutGigProvider}</p>
          </div>
          <br />
          <div>
            <h2>About the Gig</h2>
            <p>{aboutGig}</p>
          </div>
          <br />
          <div>
            <h2>Requirements</h2>
            {requirement.map(myRequirement => (
              <p key={myRequirement.length}>
                {requirement.indexOf(myRequirement) + 1}. {myRequirement}
              </p>
            ))}
          </div>
          <br />
        </div>

        <div className="apply-block">
          <Button type="primary">APPLY</Button>
        </div>
      </div>
    </div>
  );
};
export default GigDetail;

// {skillRequired.map(skill => {
//     return (
//       <p key={skill._id}>
//         {skillRequired.indexOf(skill) + 1}. {skill.skillName}
//       </p>
//     );
//   })}
