/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef, useContext } from "react";
import { Button, Icon, Carousel, Modal } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import GigContext from "../../context/gigContext";
import CompanyQueForm from "../internship/companyQuesForm";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import { arrayValidation } from "../validation/validation";
import checkIcon from "../internship/img/checkIcon.svg";
import removeIcon from "../internship/img/removeIcon.svg";

// import { gigDetailStyled } from "./intershipDetailStyled";

const GigDetail = props => {
  //#region
  const { gig } = useContext(GigContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [companyQuestion, setCompanyQuestion] = useState("");

  const selectedGigId = props.match.params.id;

  const myGig = gig.find(thisGig => thisGig._id === selectedGigId);
  /* ------------------------ gig provider state ----------------------- */
  const companyLogo = myGig && myGig.company.logoUrl;
  const designation = myGig && myGig.title;
  const gigProvider = myGig && myGig.company.companyName;

  /* ------------------------- gig brief state ------------------------- */
  const reward = myGig && myGig.reward;
  const task = myGig && myGig.tasks.length;
  const appliedBeforeTime = myGig && myGig.applyBefore;
  const type = myGig && myGig.missionType;

  /* ------------------------- gig detail state ------------------------ */
  const aboutGigProvider = myGig && myGig.company.aboutCompany;
  const aboutGig = myGig && myGig.about;
  const requirement = myGig && myGig.requirements;

  useEffect(() => {
    console.log(gigProvider);
    // console.log(gig.company)
  }, [gigProvider]);

  //#endregion

  let myCarousel = useRef();

  useEffect(() => {
    axios
      .get(
        `${apiURL}/mission/fetchone_with_status/${selectedGigId}`,
        tokenHeader
      )
      .then(res => {
        console.log(res);
        if (res.data.appliedStatus === 601) {
          setIsApply(true);
        } else if (res.data.appliedStatus === 602) {
          setIsShortlisted(true);
        } else if (res.data.appliedStatus === 603) {
          setIsSelected(true);
        } else if (res.data.appliedStatus === 604) {
          setIsRejected(true);
        } else if (res.data.appliedStatus === 605) {
          setIsCompleted(true);
        } else if (res.data.appliedStatus === 606) {
          setIsFailed(true);
        } else {
          console.log(res.data.questions);
          setCompanyQuestion(res.data.questions);
        }
      })
      .catch(e => {
        console.log("error" + e);
      });
  }, [modalVisible]);

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

  const handleApply = () => {
    setModalVisible(true);
  };

  const handleSubmitModal = () => {
    setModalVisible(false);
    setIsApply(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="gig-details-page">
      <div className="gig-main-block">
        <div className="gig-provider-block-One">
          <div className="gig-provider-block-two">
            <div className="gig-provider-block-three">
              <img src={companyLogo ? companyLogo : ""}></img>
            </div>
            <div className="gig-provider-block-four">
              <h1 className="gig-provider-heading-one">{designation}</h1>
              <h3 className="gig-provider-heading-two">{gigProvider}</h3>
              {isApply && (
                <div className="update-message-block">
                  <img
                    className="update-message-block__icon"
                    alt=""
                    src={checkIcon}
                  ></img>
                  <span className="update-message-block__span">
                    You've applied to this internship
                  </span>
                </div>
              )}
              {isShortlisted && (
                <div className="update-message-block">
                  <img
                    className="update-message-block__icon"
                    alt=""
                    src={checkIcon}
                  ></img>
                  <span className="update-message-block__span">
                    You are shortlisted for this internship
                  </span>
                </div>
              )}
              {isSelected && (
                <div className="update-message-block">
                  <img
                    className="update-message-block__icon"
                    alt=""
                    src={checkIcon}
                  ></img>
                  <span className="update-message-block__span">
                    You are selected for this internship
                  </span>
                </div>
              )}
              {isRejected && (
                <div className="update-message-block">
                  <img
                    className="update-message-block__icon"
                    alt=""
                    src={removeIcon}
                  ></img>
                  <span className="update-message-block__span">
                    You've been rejected
                  </span>
                  <span className="update-message-block__span link">
                    learn more
                  </span>
                </div>
              )}
              {isCompleted && (
                <div className="update-message-block">
                  <img
                    className="update-message-block__icon"
                    alt=""
                    src={checkIcon}
                  ></img>
                  <span className="update-message-block__span">
                    Congratulations! you've successfully complete this
                    internship
                  </span>
                </div>
              )}
              {isFailed && (
                <div className="update-message-block">
                  <img alt="" src={removeIcon}></img>
                  <span className="update-message-block__span">
                    Sorry! your gig has been failed
                  </span>
                </div>
              )}
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
            {arrayValidation(requirement) &&
              requirement.map(myRequirement => (
                <p key={myRequirement.length}>
                  {requirement.indexOf(myRequirement) + 1}. {myRequirement}
                </p>
              ))}
          </div>
          <br />
        </div>

        <div className="apply-block">
          <Button
            type="primary"
            disabled={
              isApply ||
              isCompleted ||
              isFailed ||
              isRejected ||
              isSelected ||
              isShortlisted ||
              isFailed
            }
            onClick={handleApply}
          >
            {isApply ||
            isCompleted ||
            isFailed ||
            isRejected ||
            isSelected ||
            isShortlisted ||
            isFailed
              ? "APPLIED"
              : "APPLY"}
          </Button>
        </div>
        <Modal
          visible={modalVisible}
          onCancel={handleModalCancel}
          footer={null}
        >
          <CompanyQueForm
            isInternshipOrGig="gig"
            selectedId={selectedGigId}
            companyQuestion={companyQuestion}
            handleSubmitModal={handleSubmitModal}
            // refs={node => (myRef = node)}
          />
        </Modal>
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
