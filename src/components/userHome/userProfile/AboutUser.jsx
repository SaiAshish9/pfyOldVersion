import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { getUserProfile } from "../../../api/userProfileApi";
import { tokenHeader } from "../../../constant/tokenHeader";
import { UserProfileContext } from "../../../store/userProfileStore";
import userFaceIcon from "./img/(1).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";

const AboutUser = () => {
  const { profileData, dispatchUserProfile } = UserProfileContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  const aboutMeData = profileData.aboutMe && profileData.aboutMe.trim();

  const onSubmitAboutMe = (data) => {
    const url = "user/update";
    console.log("%c ABOUT ME", "font-size: 20px, color: darkblue");
    console.log(data.aboutMe);
    const data1 = {
      aboutMe: data.aboutMe ? data.aboutMe : " ",
    };
    axios.put(url, data1, tokenHeader()).then((res) => {
      console.log(res.data);
      getUserProfile(dispatchUserProfile);
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
                  {profileData && profileData.aboutMe}
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
