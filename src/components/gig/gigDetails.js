/* eslint-disable jsx-a11y/alt-text */
import "@brainhubeu/react-carousel/lib/style.css";
import { Button, Modal, Tabs } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import CompanyQueForm from "../internship/companyQuesForm";
import checkIcon from "../internship/img/checkIcon.svg";
import timeIcon from "../../assets/img/timeIcon.svg";
import removeIcon from "../internship/img/removeIcon.svg";
import MoreSuggestion from "../moreSuggestion/MoreSuggestion";
import calendarDateIcon from "../../assets/img/gig/calendarDateIcon.svg";
import rupeeIcon from "../../assets/img/gig/rupeeIcon.svg";
import taskIcon from "../../assets/img/gig/taskIcon.svg";
import descriptionIcon from "../../assets/img/gig/descriptionIcon.svg";
import responsibilityIcon from "../../assets/img/gig/responsibilityIcon.svg";

import { arrayValidation } from "../validation/validation";
import GigTask from "./gigTask";
import { tokenHeader } from "../../constant/tokenHeader";

const { TabPane } = Tabs;
export default function GigDetail(props) {
  const myCookie = Cookies.get("token");
  //#region
  const [gig, setGig] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [companyQuestion, setCompanyQuestion] = useState("");
  const [isMyCookie, setIsMyCookie] = useState(!!myCookie);
  //#endregion
  useEffect(() => {
    setIsMyCookie(!!myCookie);
  }, [isMyCookie, myCookie]);

  const selectedGigId = props.match.params.id;

  const myGig = gig;

  console.log(myGig);

  //#region
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
  const companyWebsite = myGig && myGig.company.websiteLink;
  const aboutGig = myGig && myGig.about;
  const requirement = myGig && myGig.requirements;

  /* -------------------------------- gig-task -------------------------------- */
  const gigTask = myGig && myGig.tasks;
  //#endregion

  useEffect(() => {
    console.log("myCookie", myCookie);
    if (isMyCookie) {
      axios
        .get(`mission/fetchone_with_status/${selectedGigId}`, tokenHeader())
        .then((res) => {
          console.log("response", res);
          if (res.data.appliedStatus === 601) {
            setIsApply(true);
            setGig(res.data);
          } else if (res.data.appliedStatus === 602) {
            setGig(res.data);
            setIsShortlisted(true);
          } else if (res.data.appliedStatus === 603) {
            setGig(res.data);
            setIsSelected(true);
          } else if (res.data.appliedStatus === 604) {
            setGig(res.data);
            setIsRejected(true);
          } else if (res.data.appliedStatus === 605) {
            setGig(res.data);
            setIsCompleted(true);
          } else if (res.data.appliedStatus === 606) {
            setGig(res.data);
            setIsFailed(true);
          } else {
            console.log("gig details", res.data.questions);
            setGig(res.data);
            setCompanyQuestion(res.data.questions);
          }
        })
        .catch((e) => {
          console.log("error" + e);
        });
    } else {
      axios
        .get(`mission/fetchone/${selectedGigId}`)
        .then((res) => {
          setGig(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [isMyCookie, modalVisible, myCookie, selectedGigId]);

  const handleApply = () => {
    if (isMyCookie) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const handleSubmitModal = () => {
    setModalVisible(false);
    setIsApply(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const notApplied =
    !isApply &&
    !isShortlisted &&
    !isSelected &&
    !isRejected &&
    !isCompleted &&
    !isFailed;

  return (
    <div className="gig-details-page">
      <div className="gig-main-block">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Gig Description" key="1">
            <div className="gig-provider-block-One">
              <div className="gig-provider-block-two">
                <div className="gig-provider-block-three">
                  <img src={companyLogo ? companyLogo : ""}></img>
                </div>
                <div className="gig-provider-block-four">
                  <h1 className="gig-provider-heading-one">{designation}</h1>
                  <h3 className="gig-provider-heading-two">{gigProvider}</h3>
                </div>
              </div>
            </div>

            <div className="gig-brief-block">
              <div className="gig-brief-content-one">
                <img src={rupeeIcon} alt="" className="" />
                <span>Rewards: Rs. {reward}</span>
              </div>
              <div className="gig-brief-content-two">
                <img src={taskIcon} alt="" className="" />
                <span>Tasks: Rs. {task}</span>
              </div>
              <div
                className="gig-brief-content-three"
                style={{
                  borderLeft: !notApplied && "8px solid #444584",
                  borderRadius: !notApplied && "0 0 0 8px",
                }}
              >
                {notApplied && (
                  <>
                    <img src={calendarDateIcon} alt="" className="" />
                    <span>
                      Apply Before:{" "}
                      {moment(appliedBeforeTime).format("Do MMMM YYYY")}
                    </span>
                  </>
                )}
                {isApply && (
                  <div className="update-message-block">
                    <img
                      className="update-message-block__icon"
                      alt=""
                      src={timeIcon}
                    ></img>
                    <span className="update-message-block__span">
                      You've applied to this Gig
                    </span>
                  </div>
                )}
                {isShortlisted && (
                  <div className="update-message-block">
                    <img
                      className="update-message-block__icon"
                      alt=""
                      src={timeIcon}
                    ></img>
                    <span className="update-message-block__span">
                      You are shortlisted for this Gig
                    </span>
                  </div>
                )}
                {isSelected && (
                  <div className="update-message-block">
                    <img
                      className="update-message-block__icon"
                      alt=""
                      src={timeIcon}
                    ></img>
                    <span className="update-message-block__span">
                      You are selected for this Gig
                    </span>
                  </div>
                )}
                {isRejected && (
                  <div className="update-message-block">
                    <img
                      className="update-message-block__icon"
                      alt=""
                      src={timeIcon}
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
                      src={timeIcon}
                    ></img>
                    <span className="update-message-block__span">
                      Congratulations! you've successfully complete this Gig
                    </span>
                  </div>
                )}
                {isFailed && (
                  <div className="update-message-block">
                    <img alt="" src={timeIcon}></img>
                    <span className="update-message-block__span">
                      Sorry! your gig has been failed
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="gig-detail-block">
              <div className="gig-detail-content">
                <img src={descriptionIcon} alt="" className="gig-detail-img" />
                <h2 className="gig-detail-head">Description</h2>
                <p className="gig-detail-para">{aboutGig}</p>
              </div>
              <div className="gig-detail-content">
                <img src={taskIcon} alt="" className="gig-detail-img" />
                <h2 className="gig-detail-head">Tasks to Perform</h2>
                <div className="carousel-block">
                  <GigTask
                    gigTask={gigTask}
                    selectedGigId={selectedGigId}
                    isApply={isApply}
                    isCompleted={isCompleted}
                    isFailed={isFailed}
                    isRejected={isRejected}
                    isSelected={isSelected}
                    isShortlisted={isShortlisted}
                    isMyCookie={isMyCookie}
                  />
                </div>
              </div>
              <div className="gig-detail-content">
                <img
                  src={responsibilityIcon}
                  alt=""
                  className="gig-detail-img"
                />
                <h2 className="gig-detail-head">Requirements</h2>
                {arrayValidation(requirement) &&
                  requirement.map((myRequirement) => (
                    <p className="gig-detail-para" key={myRequirement.length}>
                      {requirement.indexOf(myRequirement) + 1}. {myRequirement}
                    </p>
                  ))}
              </div>
            </div>
            <div className="apply-block">
              <Button
                type="primary"
                disabled={!notApplied}
                onClick={handleApply}
                className="apply-button-block"
              >
                {notApplied ? "Apply Now" : "Applied"}
              </Button>
            </div>
          </TabPane>
          <TabPane tab={`About The Company`} key="2">
            <div className="gig-provider-block-One">
              <div className="gig-provider-block-two">
                <div className="gig-provider-block-three">
                  <img src={companyLogo ? companyLogo : ""}></img>
                </div>
                <div className="gig-provider-block-four">
                  <h1 className="gig-provider-heading-one">{designation}</h1>
                  <h3 className="gig-provider-heading-two">{gigProvider}</h3>
                </div>
              </div>
            </div>

            <div className="gig-provider-detail-block">
              <div>
                <h2 className="gig-provider-head">About {gigProvider}</h2>
                <p className="gig-provider-para">{aboutGigProvider}</p>
              </div>
              <br />
              <div className="">
                <h2 className="gig-provider-head">{gigProvider} Website</h2>
                <p className="gig-provider-para">{companyWebsite}</p>
              </div>
            </div>
          </TabPane>
        </Tabs>
        <Modal
          width={780}
          title="Gig Application"
          visible={modalVisible}
          onCancel={handleModalCancel}
          footer={null}
        >
          <CompanyQueForm
            isInternshipOrGig="gig"
            selectedId={selectedGigId}
            companyQuestion={companyQuestion}
            handleSubmitModal={handleSubmitModal}
          />
        </Modal>
      </div>
      <MoreSuggestion isGigOrInternship="gig" category={designation} />
    </div>
  );
}

// {
//   isApply && (
//     <div className="update-message-block">
//       <img className="update-message-block__icon" alt="" src={timeIcon}></img>
//       <span className="update-message-block__span">
//         You've applied to this Gig
//       </span>
//     </div>
//   );
// }
// {
//   isShortlisted && (
//     <div className="update-message-block">
//       <img className="update-message-block__icon" alt="" src={timeIcon}></img>
//       <span className="update-message-block__span">
//         You are shortlisted for this Gig
//       </span>
//     </div>
//   );
// }
// {
//   isSelected && (
//     <div className="update-message-block">
//       <img className="update-message-block__icon" alt="" src={timeIcon}></img>
//       <span className="update-message-block__span">
//         You are selected for this Gig
//       </span>
//     </div>
//   );
// }
// {
//   isRejected && (
//     <div className="update-message-block">
//       <img className="update-message-block__icon" alt="" src={timeIcon}></img>
//       <span className="update-message-block__span">You've been rejected</span>
//       <span className="update-message-block__span link">learn more</span>
//     </div>
//   );
// }
// {
//   isCompleted && (
//     <div className="update-message-block">
//       <img className="update-message-block__icon" alt="" src={timeIcon}></img>
//       <span className="update-message-block__span">
//         Congratulations! you've successfully complete this Gig
//       </span>
//     </div>
//   );
// }
// {
//   isFailed && (
//     <div className="update-message-block">
//       <img alt="" src={timeIcon}></img>
//       <span className="update-message-block__span">
//         Sorry! your gig has been failed
//       </span>
//     </div>
//   );
// }
