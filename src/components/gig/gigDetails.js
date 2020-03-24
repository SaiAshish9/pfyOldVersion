/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef, useContext } from "react";
import { Button, Icon, Modal, Tabs } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import "@brainhubeu/react-carousel/lib/style.css";
import GigContext from "../../context/gigContext";
import CompanyQueForm from "../internship/companyQuesForm";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import { arrayValidation } from "../validation/validation";
import checkIcon from "../internship/img/checkIcon.svg";
import removeIcon from "../internship/img/removeIcon.svg";
import MoreSuggestion from "../moreSuggestion/MoreSuggestion";
import GigTask from "./gigTask";

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
  const aboutGig = myGig && myGig.about;
  const requirement = myGig && myGig.requirements;

  /* -------------------------------- gig-task -------------------------------- */
  const gigTask = myGig && myGig.tasks;
  //#endregion

  useEffect(() => {
    console.log("myCookie", myCookie);
    if (isMyCookie) {
      axios
        .get(
          `${apiURL}/mission/fetchone_with_status/${selectedGigId}`,
          tokenHeader
        )
        .then(res => {
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
            console.log(res.data.questions);

            setGig(res.data);
            setCompanyQuestion(res.data.questions);
          }
        })
        .catch(e => {
          console.log("error" + e);
        });
    } else {
      axios
        .get(`mission/fetchone/${selectedGigId}`)
        .then(res => {
          setGig(res.data);
          console.log(res.data);
        })
        .catch(e => {
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
                  {isApply && (
                    <div className="update-message-block">
                      <img
                        className="update-message-block__icon"
                        alt=""
                        src={checkIcon}
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
                        src={checkIcon}
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
                        src={checkIcon}
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
                        Congratulations! you've successfully complete this Gig
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
                <h5>Deadline</h5>
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
                className="apply-button-block"
              >
                {isApply ||
                isCompleted ||
                isFailed ||
                isRejected ||
                isSelected ||
                isShortlisted ||
                isFailed
                  ? "APPLIED"
                  : "APPLY NOW"}
              </Button>
            </div>
          </TabPane>
          <TabPane tab={`About the ${gigProvider}`} key="2">
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
                        You've applied to this Gig
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
                        You are shortlisted for this Gig
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
                        You are selected for this Gig
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
                        Congratulations! you've successfully complete this Gig
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

            <div className="gig-detail-block">
              <div>
                <h2>{gigProvider}</h2>
                <p>{aboutGigProvider}</p>
              </div>
            </div>
          </TabPane>
        </Tabs>
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
      <MoreSuggestion />
    </div>
  );
}
