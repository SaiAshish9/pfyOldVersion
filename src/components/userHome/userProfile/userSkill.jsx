import { Button, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
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
import musicIcon from "./img/interestIcon/musicIcon.svg";
import marketingIcon from "./img/interestIcon/marketingIcon.svg";
import photographyIcon from "./img/interestIcon/photographyIcon.svg";
import rappingIcon from "./img/interestIcon/rappingIcon.svg";
import researchIcon from "./img/interestIcon/researchIcon.svg";
import samplingIcon from "./img/interestIcon/samplingIcon.svg";
import singingIcon from "./img/interestIcon/singingIcon.svg";
import socialMediaIcon from "./img/interestIcon/socialMediaIcon.svg";
import storeAuditIcon from "./img/interestIcon/storeAuditIcon.svg";
import videoMaking from "./img/interestIcon/videoMaking.svg";
import writingIcon from "./img/interestIcon/writingIcon.svg";
import { tokenHeader } from "../../../constant/tokenHeader";
import { arrayValidation } from "../../validation/validation";

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

const UserSkill = (props) => {
  const skillsData = props.profileData ? props.profileData.skills : [];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const submitHandler = (e) => {
    e.preventDefault();
    const url = "user/update";
    const data1 = {
      skills: skills1,
    };
    axios.put(url, data1, tokenHeader()).then((res) => {
      console.log(res.data);
      props.isUpdate();
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
    if (!skills1.includes(val)) {
      setSkills1([...skills1, val]);
    } else {
      const index = skills1.indexOf(val);
      if (index > -1) {
        setSkills1(skills1.filter((el) => el !== val));
      }
      console.log("already there");
    }
  };

  return (
    <div className="skill-of-avatar-block">
      <div className="skill-of-avatar-content-block">
        <div className="icon-heading">
          <img className="skill-of-avatar-img" src={four} alt=""></img>
          <div className="skill-of-avatar-content">
            <h2>Skills</h2>
            {
              arrayValidation(skillsData) && (
                <div className="skill-list">
                  {skillsData.map((el, i) => (
                    <div className="single-skill" key={i}>
                      {" "}
                      {el}{" "}
                    </div>
                  ))}
                </div>
              )
              // : (
              //   <span style={{ marginLeft: "10px" }}>What are you good at?</span>
              // )
            }
          </div>
        </div>
        <img
          src={skillsData.length > 0 ? editIcon : addIcon}
          alt=""
          onClick={handleSkillButton}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
        />
      </div>

      <Modal
        width={780}
        title="Add Skills"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-skill-modal"
      >
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
          }}
        >
          {skillImg.map((image, index) => (
            <div
              onClick={() => selectHandler(image.text)}
              key={index}
              style={{
                boxShadow:
                  skills1 && skills1.includes(image.text)
                    ? "2px 3px 5px #ccc"
                    : "0 0 4px -1px black",
                backgroundColor:
                  skills1 && skills1.includes(image.text) ? "#5468d1" : "#fff",
                color:
                  skills1 && skills1.includes(image.text) ? "#fff" : "#000",
                margin: "0.5rem",
                height: "100px",
                width: "100px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                style={{ width: "50px", height: "50px" }}
                src={image.icon}
                alt="No Img"
              ></img>
              <div
                style={{
                  marginTop: "4px",
                  textTransform: "capitalize",
                }}
              >
                {image.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            shape="round"
            onClick={submitHandler}
            htmlType="submit"
            className="objective-block-one__buttonTwo submit-btn"
          >
            SAVE
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UserSkill;
