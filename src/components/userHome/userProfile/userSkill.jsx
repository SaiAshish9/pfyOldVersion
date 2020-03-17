import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";
import comedyIcon from "./img/interestIcon/comedyIcon.svg";
import danceIcon from "./img/interestIcon/danceIcon.svg";
import dataEntryIcon from "./img/interestIcon/dataEntryIcon.svg";
import designingIcon from "./img/interestIcon/designingIcon.svg";
import drawingIcon from "./img/interestIcon/drawingIcon.svg";
import fashionIcon from "./img/interestIcon/fashionIcon.svg";
import fieldWorkIcon from "./img/interestIcon/fieldWorkIcon.svg";
import hindiIcon from "./img/interestIcon/hindiIcon.svg";
import marketingIcon from "./img/interestIcon/marketingIcon.svg";
import photographyIcon from "./img/interestIcon/photographyIcon.svg";
import rappingIcon from "./img/interestIcon/rappingIcon.svg";
import samplingIcon from "./img/interestIcon/samplingIcon.svg";
import singingIcon from "./img/interestIcon/singingIcon.svg";
import socialMediaIcon from "./img/interestIcon/socialMediaIcon.svg";
import storeAuditIcon from "./img/interestIcon/storeAuditIcon.svg";
import videoMaking from "./img/interestIcon/videoMaking.svg";
import writingIcon from "./img/interestIcon/writingIcon.svg";
import four from "./img/(4).svg";

const skillImg = [
  { icon: comedyIcon, text: "comedy" },
  { icon: danceIcon, text: "dance" },
  { icon: dataEntryIcon, text: "Data Entry" },
  { icon: designingIcon, text: "Designing" },
  { icon: drawingIcon, text: "Drawing" },
  { icon: fashionIcon, text: "Fashion" },
  { icon: fieldWorkIcon, text: "Field Work" },
  { icon: hindiIcon, text: "Hindi" },
  { icon: marketingIcon, text: "Marketing" },
  { icon: photographyIcon, text: "Photography" },
  { icon: rappingIcon, text: "Rapping" },
  { icon: samplingIcon, text: "Sampling" },
  { icon: singingIcon, text: "Singing" },
  { icon: socialMediaIcon, text: "Social Media" },
  { icon: storeAuditIcon, text: "Store Audit" },
  { icon: videoMaking, text: "Video Making" },
  { icon: writingIcon, text: "Writing" }
];

const UserSkill = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data.objectiveTextarea);
    // axios
    //   .put(
    //     `${apiURL}/resume/addobjective?careerObjectives=${data.objectiveTextarea}`,
    //     null,
    //     tokenHeader
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(e => {
    //     console.log(e.response);
    //   });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSkillButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="skill-of-avatar-block">
      <div className="skill-of-avatar-content-block">
        <img className="skill-of-avatar-img" src={four} alt=""></img>
        <div className="skill-of-avatar-content">
          <h2>Skills</h2>
          <p>What are you good at?</p>
        </div>
      </div>
      <Button
        type="primary"
        shape="round"
        className="skill-of-avatar-button"
        onClick={handleSkillButton}
      >
        Add
      </Button>
      <Modal
        title="Add Skills"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ display: "flex", flexFlow: "wrap" }}>
          {skillImg.map((image, index) => (
            <div key={index} style={{ margin: "10px 25px" }}>
              <img src={image.icon} alt="No Img"></img>
              <p>{image.text}</p>
            </div>
          ))}
        </div>
        <Button
          htmlType="submit"
          className="objective-block-one__buttonTwo"
          style={{ alignSelf: "center", marginTop: "32px" }}
        >
          Done
        </Button>
      </Modal>
    </div>
  );
};

export default UserSkill;
