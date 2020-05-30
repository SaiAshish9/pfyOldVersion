/* eslint-disable jsx-a11y/alt-text */
import { Button, Modal, Tabs } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import MoreSuggestion from "../moreSuggestion/MoreSuggestion";
import { arrayValidation } from "../validation/validation";
import CompanyQueForm from "./companyQuesForm";
import checkIcon from "./img/checkIcon.svg";
import removeIcon from "./img/removeIcon.svg";
import calenderDateIcon from "../../assets/img/internship/calenderDateIcon.svg";
import calenderIcon from "../../assets/img/internship/calenderIcon.svg";
import locationIcon from "../../assets/img/internship/locationIcon.svg";
import positionIcon from "../../assets/img/internship/positionIcon.svg";
import rupeeIcon from "../../assets/img/internship/rupeeIcon.svg";
import responsibilityIcon from "../../assets/img/internship/responsibilityIcon.svg";
import benefitIcon from "../../assets/img/internship/benefitIcon.svg";
import skillRequiredIcon from "../../assets/img/internship/skillRequiredIcon.svg";
import { tokenHeader } from "../../constant/tokenHeader";

const { TabPane } = Tabs;
export default function InternshipDetail(props) {
  // const { internship } = useContext(InternshipContext);
  const myCookie = Cookies.get("token");

  const [internship, setInternship] = useState();
  console.log("internship", internship);

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
  const companyWebsite = myInternship && myInternship.company.websiteLink;

  const internResponsibilities = myInternship && myInternship.responsibilities;
  const skillRequired = myInternship && myInternship.skillsRequired;
  const benefit = myInternship && myInternship.benefits;
  const otherRequirement = myInternship && myInternship.otherRequirements;
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

  return (
    <div className="internship-details-page">
      <div className="internship-main-block">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Internship Description" key="1">
            <div className="internship-provider-block-One">
              <div className="internship-provider-block-two">
                <div className="internship-provider-block-three">
                  <img src={companyLogo ? companyLogo : ""} alt=""></img>
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

              <div className="internship-brief-content-five">
                <img src={calenderDateIcon} alt="" className="" />
                <span>
                  Apply Before:{" "}
                  {moment(appliedBeforeTime).format("Do MMMM YYYY")}
                </span>
              </div>
            </div>

            <div className="internship-detail-block">
              <div className="internship-detail-content">
                <img src={responsibilityIcon} alt="" />
                <h2>Responsibilities</h2>
                {arrayValidation(internResponsibilities) &&
                  internResponsibilities.map((responsibility) => (
                    <p key={internResponsibilities.indexOf(responsibility)}>
                      {internResponsibilities.indexOf(responsibility) + 1}.{" "}
                      {responsibility}
                    </p>
                  ))}
              </div>
              <div className="internship-detail-content">
                <img src={skillRequiredIcon} alt="" />
                <h2>Skills Required</h2>
                {arrayValidation(skillRequired) &&
                  skillRequired.map((skill) => {
                    return (
                      <p key={skill._id}>
                        {skillRequired.indexOf(skill) + 1}. {skill.skillName}
                      </p>
                    );
                  })}
              </div>
              <div className="internship-detail-content">
                <img src={benefitIcon} alt="" />
                <h2>Benefits</h2>
                {arrayValidation(benefit) &&
                  benefit.map((myBenefit) => {
                    return (
                      <p key={benefit.indexOf(myBenefit)}>
                        {benefit.indexOf(myBenefit) + 1}. {myBenefit}
                      </p>
                    );
                  })}
              </div>
              <div className="internship-detail-content">
                <img src={responsibilityIcon} alt="" />
                <h2>Requirements</h2>
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

            <div className="apply-block">
              <Button
                type="primary"
                disabled={isApply || isRejected || isSelected || isShortlisted}
                onClick={handleApply}
                className="apply-button-block"
              >
                {isApply || isRejected || isSelected || isShortlisted
                  ? "Applied"
                  : "Apply Now"}
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
                  <span className="internship-provider-heading-two">
                    {internshipProvider}
                  </span>
                </div>
              </div>
            </div>
            <div className="internship-provider-detail-block">
              <div>
                <h2 className="internship-provider-head">
                  About {internshipProvider}
                </h2>
                <p className="internship-provider-para">
                  {aboutInternshipProvider}
                </p>
              </div>
              <br />
              <div className="">
                <h2 className="internship-provider-head">
                  {internshipProvider} Website
                </h2>
                <p className="internship-provider-para">{companyWebsite}</p>
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
      <MoreSuggestion isGigOrInternship="internship" category={designation} />
    </div>
  );
}

// <ApplicationForm/>

//TODO
// {isApply && (
//   <div className="update-message-block">
//     <img
//       alt=""
//       src={checkIcon}
//       className="update-message-block__icon"
//     ></img>
//     <span className="update-message-block__span">
//       You've applied to this internship
//     </span>
//   </div>
// )}
// {isShortlisted && (
//   <div className="update-message-block">
//     <img
//       alt=""
//       src={checkIcon}
//       className="update-message-block__icon"
//     ></img>
//     <span className="update-message-block__span">
//       You are shortlisted for this internship
//     </span>
//   </div>
// )}
// {isSelected && (
//   <div className="update-message-block">
//     <img
//       alt=""
//       src={checkIcon}
//       className="update-message-block__icon"
//     ></img>
//     <span className="update-message-block__span">
//       You are selected for this internship
//     </span>
//   </div>
// )}
// {isRejected && (
//   <div className="update-message-block">
//     <img
//       alt=""
//       src={removeIcon}
//       className="update-message-block__icon"
//     ></img>
//     <span className="update-message-block__span">
//       You've been rejected
//     </span>
//     <span className="update-message-block__span link">
//       learn more
//     </span>
//   </div>
// )}
