import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import userFaceIcon from "./img/(1).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";
import { tokenHeader } from "../../../constant/tokenHeader";

const AboutUser = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const aboutMeData = props.profileData.aboutMe.trim();

  console.log("aboutMeData", !!aboutMeData);

  const onSubmitAboutMe = (data) => {
    const url = "user/update";
    console.log("%c ABOUT ME", "font-size: 20px, color: darkblue");
    console.log(data.aboutMe);
    const data1 = {
      aboutMe: data.aboutMe ? data.aboutMe : " ",
    };
    axios.put(url, data1, tokenHeader()).then((res) => {
      console.log(res.data);
      props.isUpdate();
      setIsModalVisible(false);
    });
    console.log("in about me handler ");
    console.log(data.aboutMe);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAboutButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="about-avatar-block">
      <div className="about-avatar-content-block">
        <div className="icon-heading">
          <img src={userFaceIcon} alt="" className="about-avatar-img"></img>
          <div className="about-avatar-content">
            <h2>About me</h2>
            <div className="about-content-block">
              {!!aboutMeData && (
                <p className="about-content-block__p">
                  {props.profileData.aboutMe}
                </p>
              )}
            </div>
          </div>
        </div>
        <img
          src={aboutMeData ? editIcon : addIcon}
          alt=""
          onClick={handleAboutButton}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
          className="add-icon"
        />
      </div>

      <Modal
        title="Add About Yourself"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
      >
        <form
          onSubmit={handleSubmit(onSubmitAboutMe)}
          className="objective-block-one__form"
        >
          <h2>Description</h2>
          <textarea
            name="aboutMe"
            ref={register}
            defaultValue={aboutMeData ? aboutMeData : null}
            rows={5}
            className="objective-modal__textarea"
          />
          <Button htmlType="submit" className="objective-block-one__buttonTwo">
            Save
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AboutUser;
