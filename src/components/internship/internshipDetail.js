/* eslint-disable jsx-a11y/alt-text */
import { Button, Modal, Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
/* --------------------------------- ****** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import MoreSuggestion from "../moreSuggestion/MoreSuggestion";
import { arrayValidation } from "../validation/validation";
import CompanyQueForm from "./companyQuesForm";
import checkIcon from "./img/checkIcon.svg";
import removeIcon from "./img/removeIcon.svg";

const { TabPane } = Tabs;
const InternshipDetail = props => {
  // const { internship } = useContext(InternshipContext);
  const myCookie = Cookies.get("token");

  const [internship, setInternship] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [companyQuestion, setCompanyQuestion] = useState("");
  const [isMyCookie, setIsMyCookie] = useState(!!myCookie);
  useEffect(() => {
    setIsMyCookie(!!myCookie);
  }, [isMyCookie, myCookie]);

  const selectedInternshipId = props.match.params.id;
  const myInternship = internship;

  //#region
  /* --------------------------- internship provider state --------------------------- */
  const companyLogo = myInternship && myInternship.company.logoUrl;
  const designation = myInternship && myInternship.designation;
  const internshipProvider = myInternship && myInternship.company.companyName;

  /* ----------------------------- internship brief state ---------------------------- */
  const numberOfPositions = myInternship && myInternship.noOfPosition;
  const stipend = myInternship && myInternship.stipend;
  const duration = myInternship && myInternship.duration;
  const appliedBeforeTime = myInternship && myInternship.applyBefore;
  const internshipLocation = myInternship && myInternship.location;
  const internshipStartingTime =
    myInternship && myInternship.startingOfInternship;

  /* ---------------------------- internship detail state ---------------------------- */
  const aboutInternshipProvider =
    myInternship && myInternship.company.aboutCompany;
  const internResponsibilities = myInternship && myInternship.responsibilities;
  const skillRequired = myInternship && myInternship.skillsRequired;
  const benefit = myInternship && myInternship.benefits;
  const otherRequirement = myInternship && myInternship.otherRequirements;
  //#endregion

  useEffect(() => {
    if (isMyCookie) {
      axios
        .get(
          `${apiURL}/internship/fetchone_with_status/${selectedInternshipId}`,
          tokenHeader
        )
        .then(res => {
          console.log(res);
          if (res.data.appliedStatus === 300) {
            setIsApply(true);
            setInternship(res.data);
          } else if (res.data.appliedStatus === 301) {
            setIsShortlisted(true);
            setInternship(res.data);
          } else if (res.data.appliedStatus === 302) {
            setIsSelected(true);
            setInternship(res.data);
          } else if (res.data.appliedStatus === 303) {
            setIsRejected(true);
            setInternship(res.data);
          } else {
            setInternship(res.data);
            setCompanyQuestion(res.data.questions);
          }
        })
        .catch(e => {
          console.log("error" + e);
        });
    } else {
      axios
        .get(`internship/fetchone/${selectedInternshipId}`)
        .then(res => {
          setInternship(res.data);
          // console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, [modalVisible]);

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
    <div className="internship-details-page">
      <div className="internship-main-block">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Internship Description" key="1">
            <div className="internship-provider-block-One">
              <div className="internship-provider-block-two">
                <div className="internship-provider-block-three">
                  <img src={companyLogo ? companyLogo : ""}></img>
                </div>
                <div className="internship-provider-block-four">
                  <h1 className="internship-provider-heading-one">
                    {designation}
                  </h1>
                  <h3 className="internship-provider-heading-two">
                    {internshipProvider}
                  </h3>
                  {isApply && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={checkIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You've applied to this internship
                      </span>
                    </div>
                  )}
                  {isShortlisted && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={checkIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You are shortlisted for this internship
                      </span>
                    </div>
                  )}
                  {isSelected && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={checkIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You are selected for this internship
                      </span>
                    </div>
                  )}
                  {isRejected && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={removeIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You've been rejected
                      </span>
                      <span className="update-message-block__span link">
                        learn more
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="internship-brief-block">
              <div className="internship-brief-content">
                <h5>Positions</h5>
                <h4>{numberOfPositions}</h4>
              </div>
              <div className="internship-brief-content">
                <h5>Stipend</h5>
                <h4>{stipend}</h4>
              </div>
              <div className="internship-brief-content">
                <h5>Duration</h5>
                <h4>{duration}</h4>
              </div>
              <div className="internship-brief-content">
                <h5>Deadline</h5>
                <h4>{appliedBeforeTime}</h4>
              </div>
              <div className="internship-brief-content">
                <h5>Location</h5>
                <h4>{internshipLocation}</h4>
              </div>
              <div className="internship-brief-content">
                <h5>Starting</h5>
                <h4>{internshipStartingTime}</h4>
              </div>
            </div>
            <div className="boundary-one" />

            <div className="internship-detail-block">
              <div>
                <h2>Responsibilities</h2>
                {arrayValidation(internResponsibilities) &&
                  internResponsibilities.map(responsibility => (
                    <p key={internResponsibilities.indexOf(responsibility)}>
                      {internResponsibilities.indexOf(responsibility) + 1}.{" "}
                      {responsibility}
                    </p>
                  ))}
              </div>
              <br />
              <div>
                <h2>Skills Required</h2>
                {arrayValidation(skillRequired) &&
                  skillRequired.map(skill => {
                    return (
                      <p key={skill._id}>
                        {skillRequired.indexOf(skill) + 1}. {skill.skillName}
                      </p>
                    );
                  })}
              </div>
              <br />
              <div>
                <h2>Benefits</h2>
                {arrayValidation(benefit) &&
                  benefit.map(myBenefit => {
                    return (
                      <p key={benefit.indexOf(myBenefit)}>
                        {benefit.indexOf(myBenefit) + 1}. {myBenefit}
                      </p>
                    );
                  })}
              </div>
              <br />
              <div>
                <h2>Benefits</h2>
                {arrayValidation(otherRequirement) &&
                  otherRequirement.map(myOtherRequirement => {
                    return (
                      <p key={otherRequirement.indexOf(myOtherRequirement)}>
                        {otherRequirement.indexOf(myOtherRequirement) + 1}.{" "}
                        {myOtherRequirement}
                      </p>
                    );
                  })}
              </div>
              <br />
            </div>

            <div className="apply-block">
              <Button
                type="primary"
                disabled={isApply || isRejected || isSelected || isShortlisted}
                onClick={handleApply}
                className="apply-button-block"
              >
                {isApply || isRejected || isSelected || isShortlisted
                  ? "APPLIED"
                  : "APPLY NOW"}
              </Button>
            </div>
          </TabPane>
          <TabPane tab={`About the ${internshipProvider}`} key="2">
            <div className="internship-provider-block-One">
              <div className="internship-provider-block-two">
                <div className="internship-provider-block-three">
                  <img src={companyLogo ? companyLogo : ""}></img>
                </div>
                <div className="internship-provider-block-four">
                  <h1 className="internship-provider-heading-one">
                    {designation}
                  </h1>
                  <h3 className="internship-provider-heading-two">
                    {internshipProvider}
                  </h3>
                  {isApply && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={checkIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You've applied to this internship
                      </span>
                    </div>
                  )}
                  {isShortlisted && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={checkIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You are shortlisted for this internship
                      </span>
                    </div>
                  )}
                  {isSelected && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={checkIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You are selected for this internship
                      </span>
                    </div>
                  )}
                  {isRejected && (
                    <div className="update-message-block">
                      <img
                        alt=""
                        src={removeIcon}
                        className="update-message-block__icon"
                      ></img>
                      <span className="update-message-block__span">
                        You've been rejected
                      </span>
                      <span className="update-message-block__span link">
                        learn more
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="internship-detail-block">
              <div>
                <h2>{internshipProvider}</h2>
                <p>{aboutInternshipProvider}</p>
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
            isInternshipOrGig="internship"
            selectedId={selectedInternshipId}
            companyQuestion={companyQuestion}
            handleSubmitModal={handleSubmitModal}
            // refs={node => (myRef = node)}
          />
        </Modal>
      </div>
      <MoreSuggestion />
    </div>
  );
};
export default InternshipDetail;

// <ApplicationForm/>
