/* eslint-disable jsx-a11y/alt-text */
import { Button, Modal, Tabs } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import benefitIcon from "../../assets/img/internship/benefitIcon.svg";
import calenderDateIcon from "../../assets/img/internship/calenderDateIcon.svg";
import calenderIcon from "../../assets/img/internship/calenderIcon.svg";
import locationIcon from "../../assets/img/internship/locationIcon.svg";
import positionIcon from "../../assets/img/internship/positionIcon.svg";
import responsibilityIcon from "../../assets/img/internship/responsibilityIcon.svg";
import rupeeIcon from "../../assets/img/internship/rupeeIcon.svg";
import skillRequiredIcon from "../../assets/img/internship/skillRequiredIcon.svg";
import timeIcon from "../../assets/img/timeIcon.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import SimilarGigOrInternship from "../similarGigOrInternship/similarGigOrInternship";
import { arrayValidation } from "../validation/validation";
import CompanyQueForm from "./companyQuesForm";
import modalCloseIcon from "../../assets/img/modalCloseIcon.svg";
import { s3URL } from "../../constant/url";

const { TabPane } = Tabs;
export default function InternshipDetail(props) {
  const myCookie = Cookies.get("token");

  const [internship, setInternship] = useState();
  console.log("internship", internship);

  const [modalVisible, setModalVisible] = useState(false);
  const [isApply, setIsApply] = useState(true);
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
  const companyWebsite = myInternship && myInternship.company.websiteLink;

  const internResponsibilities = myInternship && myInternship.responsibilities;
  const skillRequired = myInternship && myInternship.skillsRequired;
  const benefit = myInternship && myInternship.benefits;
  const otherRequirement = myInternship && myInternship.otherRequirements;
  const appliedStatus = myInternship && myInternship.appliedStatus;

  console.log("appliedStatus", appliedStatus);

  //#endregion

  useEffect(() => {
    if (isMyCookie) {
      axios
        .get(
          `internship/fetchone_with_status/${selectedInternshipId}`,
          tokenHeader()
        )
        .then((res) => {
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
            setIsApply(false);
            setInternship(res.data);
            setCompanyQuestion(res.data.questions);
          }
        })
        .catch((e) => {
          console.log("error" + e);
        });
    } else {
      axios
        .get(`internship/fetchone/${selectedInternshipId}`)
        .then((res) => {
          setInternship(res.data);
          // console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [isMyCookie, modalVisible, selectedInternshipId]);

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
  const tokenHead = tokenHeader().headers.token;
  const notApplied = !isApply && !isShortlisted && !isSelected && !isRejected;
  return (
    <div
      className="internship-details-page"
      style={{
        padding: !!tokenHead ? "100px 60px 80px 60px" : "140px 60px 80px 60px",
      }}
    >
      <div className="internship-main-block">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Internship Description" key="1">
            <div className="internship-provider-block-One">
              <div className="internship-provider-block-two">
                <div className="internship-provider-block-three">
                  <img
                    src={companyLogo ? s3URL + companyLogo : ""}
                    alt=""
                  ></img>
                </div>
                <div className="internship-provider-block-four">
                  <h1 className="internship-provider-heading-one">
                    {designation}
                  </h1>
                  <span className="internship-provider-heading-two">
                    {internshipProvider}
                  </span>
                </div>
              </div>
            </div>

            <div className="internship-brief-block">
              <div className="internship-brief-content-one">
                <img src={rupeeIcon} alt="" className="" />
                <span>Stipend: Rs. {stipend}</span>
              </div>

              <div className="internship-brief-content-two">
                <img src={calenderIcon} alt="" className="" />
                <span>Duration: {duration}</span>
              </div>

              <div className="internship-brief-content-three">
                <img src={locationIcon} alt="" className="" />
                <span>Location: {internshipLocation}</span>
              </div>

              <div className="internship-brief-content-four">
                <img src={positionIcon} alt="" className="" />
                <span>Positions: {numberOfPositions}</span>
              </div>

              <div
                className="internship-brief-content-five"
                style={{
                  borderLeft: !notApplied && "8px solid #444584",
                  borderRadius: !notApplied && "0 0 0 8px",
                }}
              >
                {notApplied && (
                  <>
                    <img src={calenderDateIcon} alt="" className="" />
                    <span>
                      Apply Before:{" "}
                      {moment(appliedBeforeTime).format("Do MMMM YYYY")}
                    </span>
                  </>
                )}
                {appliedStatus === 300 && (
                  <div className="update-message-block">
                    <img
                      alt=""
                      src={timeIcon}
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
                      src={timeIcon}
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
                      src={timeIcon}
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
                      src={timeIcon}
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

            <div className="internship-detail-block">
              <div className="internship-detail-content">
                <img src={responsibilityIcon} alt="" />
                <h2>Responsibilities</h2>
                <div className="internship-detail-para-block">
                  {arrayValidation(internResponsibilities) &&
                    internResponsibilities.map((responsibility) => (
                      <p key={internResponsibilities.indexOf(responsibility)}>
                        {internResponsibilities.indexOf(responsibility) + 1}.{" "}
                        {responsibility}
                      </p>
                    ))}
                </div>
              </div>
              <div className="internship-detail-content">
                <img src={skillRequiredIcon} alt="" />
                <h2>Skills Required</h2>
                <div className="internship-detail-para-block">
                  {arrayValidation(skillRequired) &&
                    skillRequired.map((skill) => {
                      return (
                        <p key={skill._id}>
                          {skillRequired.indexOf(skill) + 1}. {skill.skillName}
                        </p>
                      );
                    })}
                </div>
              </div>
              <div className="internship-detail-content">
                <img src={benefitIcon} alt="" />
                <h2>Benefits</h2>
                <div className="internship-detail-para-block">
                  {arrayValidation(benefit) &&
                    benefit.map((myBenefit) => {
                      return (
                        <p key={benefit.indexOf(myBenefit)}>
                          {benefit.indexOf(myBenefit) + 1}. {myBenefit}
                        </p>
                      );
                    })}
                </div>
              </div>
              <div className="internship-detail-content">
                <img src={responsibilityIcon} alt="" />
                <h2>Requirements</h2>
                <div className="internship-detail-para-block">
                  {arrayValidation(otherRequirement) &&
                    otherRequirement.map((myOtherRequirement) => {
                      return (
                        <p key={otherRequirement.indexOf(myOtherRequirement)}>
                          {otherRequirement.indexOf(myOtherRequirement) + 1}.{" "}
                          {myOtherRequirement}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>

            {notApplied && (
              <div className="apply-block">
                <Button
                  type="primary"
                  onClick={handleApply}
                  className="apply-button-block"
                >
                  {notApplied ? "Apply Now" : "Applied"}
                </Button>
              </div>
            )}
          </TabPane>
          <TabPane tab={`About The Company`} key="2">
            <div className="internship-provider-block-One">
              <div className="internship-provider-block-two">
                <div className="internship-provider-block-three">
                  <img src={companyLogo ? s3URL + companyLogo : ""}></img>
                </div>
                <div className="internship-provider-block-four">
                  <h1 className="internship-provider-heading-one">
                    {designation}
                  </h1>
                  <span className="internship-provider-heading-two">
                    {internshipProvider}
                  </span>
                </div>
              </div>
            </div>
            <div className="internship-provider-detail-block">
              <div className="internship-provider">
                <h2 className="internship-provider-head">
                  About {internshipProvider}
                </h2>
                <p className="internship-provider-para">
                  {aboutInternshipProvider}
                </p>
              </div>
              <div className="internship-provider">
                <h2 className="internship-provider-head">
                  {internshipProvider} Website
                </h2>
                <p className="internship-provider-para">{companyWebsite}</p>
              </div>
            </div>
          </TabPane>
        </Tabs>
        <Modal
          width={780}
          title="Internship Application"
          visible={modalVisible}
          onCancel={handleModalCancel}
          footer={null}
          closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
        >
          <CompanyQueForm
            isInternshipOrGig="internship"
            selectedId={selectedInternshipId}
            companyQuestion={companyQuestion}
            handleSubmitModal={handleSubmitModal}
          />
        </Modal>
      </div>
      <SimilarGigOrInternship
        isGigOrInternship="internship"
        category={designation}
      />
    </div>
  );
}
