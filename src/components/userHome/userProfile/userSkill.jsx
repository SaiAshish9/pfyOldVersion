import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { getUserProfile } from "../../../api/userProfileApi";
import { tokenHeader } from "../../../constant/tokenHeader";
import { UserProfileContext } from "../../../store/userProfileStore";
import { arrayValidation } from "../../validation/validation";
import four from "./img/(4).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";
import comedyIcon from "./img/interestIcon/comedyIcon.svg";
import danceIcon from "./img/interestIcon/danceIcon.svg";
import dataEntryIcon from "./img/interestIcon/dataEntryIcon.svg";
import designingIcon from "./img/interestIcon/designingIcon.svg";
import drawingIcon from "./img/interestIcon/drawingIcon.svg";
import fashionIcon from "./img/interestIcon/fashionIcon.svg";
import fieldWorkIcon from "./img/interestIcon/fieldWorkIcon.svg";
import marketingIcon from "./img/interestIcon/marketingIcon.svg";
import musicIcon from "./img/interestIcon/musicIcon.svg";
import photographyIcon from "./img/interestIcon/photographyIcon.svg";
import rappingIcon from "./img/interestIcon/rappingIcon.svg";
import researchIcon from "./img/interestIcon/researchIcon.svg";
import samplingIcon from "./img/interestIcon/samplingIcon.svg";
import singingIcon from "./img/interestIcon/singingIcon.svg";
import socialMediaIcon from "./img/interestIcon/socialMediaIcon.svg";
import storeAuditIcon from "./img/interestIcon/storeAuditIcon.svg";
import videoMaking from "./img/interestIcon/videoMaking.svg";
import writingIcon from "./img/interestIcon/writingIcon.svg";
import DataLayout from "../../common/profileOrResumeLayout";

const skillImg = [
  { icon: comedyIcon, text: "comedy" },
  { icon: danceIcon, text: "dance" },
  { icon: dataEntryIcon, text: "Data Entry" },
  { icon: designingIcon, text: "Designing" },
  { icon: drawingIcon, text: "Drawing" },
  { icon: fashionIcon, text: "Fashion" },
  { icon: fieldWorkIcon, text: "Field Work" },
  { icon: musicIcon, text: "Music" },
  { icon: marketingIcon, text: "Marketing" },
  { icon: photographyIcon, text: "Photography" },
  { icon: rappingIcon, text: "Rapping" },
  { icon: researchIcon, text: "Research" },
  { icon: samplingIcon, text: "Sampling" },
  { icon: singingIcon, text: "Singing" },
  { icon: socialMediaIcon, text: "Social Media" },
  { icon: storeAuditIcon, text: "Store Audit" },
  { icon: videoMaking, text: "Video Making" },
  { icon: writingIcon, text: "Writing" },
];

const UserSkill = () => {
  const { profileData, dispatchUserProfile } = UserProfileContext();
  const skillsData = profileData ? profileData.skills : [];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const url = "user/update";
    const data1 = {
      skills: skills1,
    };
    axios.put(url, data1, tokenHeader()).then((res) => {
      console.log(res.data);
      getUserProfile(dispatchUserProfile);
      setIsModalVisible(false);
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSkillButton = () => {
    setIsModalVisible(true);
  };
  const [skills1, setSkills1] = useState(skillsData);
  const selectHandler = (val) => {
    if (skills1 && !skills1.includes(val)) {
      setSkills1([...skills1, val]);
    } else {
      const index = skills1 && skills1.indexOf(val);
      if (index > -1) {
        setSkills1(skills1.filter((el) => el !== val));
      }
      console.log("already there");
    }
  };

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(skillsData) && (
        <div className="user-data-content-msg-block">
          {skillsData.map((skill, i) => (
            <div className="user-data-content-msg" key={i}>
              {" "}
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
  return (
    <>
      <DataLayout
        img={<img src={four} alt="" className="user-data-img" />}
        head="Skills"
        icon={
          <img
            src={!arrayValidation(skillsData) ? addIcon : editIcon}
            alt=""
            onClick={() => setIsModalVisible(true)}
            className="user-data-icon"
          />
        }
        content={content}
        isData={arrayValidation(skillsData)}
      />

      <Modal
        width={780}
        title="Add Skills"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-skill-modal"
      >
        <div className="add-skill-main-block">
          {skillImg.map((image, index) => (
            <div
              onClick={() => selectHandler(image.text)}
              key={index}
              className="add-skill-block"
              style={{
                border:
                  skills1 && skills1.includes(image.text)
                    ? "2px solid #444584"
                    : "2px solid #ccc",
                // backgroundColor:
                //   skills1 && skills1.includes(image.text) ? "#5468d1" : "#fff",
                // color:
                //   skills1 && skills1.includes(image.text) ? "#fff" : "#000",
              }}
            >
              <img src={image.icon} alt="No Img"></img>
              <div className="add-skill-text">{image.text}</div>
            </div>
          ))}
        </div>
        <div className="submit-btn-block">
          <Button
            shape="round"
            onClick={submitHandler}
            htmlType="submit"
            className="submit-btn"
          >
            SAVE
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default UserSkill;
