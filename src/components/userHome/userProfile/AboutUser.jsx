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
import DataLayout from "../../common/profileOrResumeLayout";
import modalCloseIcon from "../../../assets/img/modalCloseIcon.svg";

const AboutUser = () => {
  const { profileData, dispatchUserProfile } = UserProfileContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  const aboutMeData = profileData.aboutMe && profileData.aboutMe.trim();

  const onSubmitAboutMe = (data) => {
    const url = "user/update";
    const data1 = {
      aboutMe: data.aboutMe ? data.aboutMe : " ",
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

  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const content = (
    <div className="all-user-data-content">
      {!!aboutMeData && (
        <div className="user-data-content-main-block">
          <div className="user-data-content-block">
            <p className="user-data-para" id="user-data-last-el">
              {profileData && profileData.aboutMe}
            </p>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <>
      <DataLayout
        img={<img src={userFaceIcon} alt="" className="user-data-img" />}
        head="About Me"
        icon={
          <img
            src={!aboutMeData ? addIcon : editIcon}
            alt=""
            onClick={handleAdd}
            className="user-data-icon"
          />
        }
        content={content}
        isData={!!aboutMeData}
      />
      <Modal
        title="Add About Yourself"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
        closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
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
    </>
  );
};

export default AboutUser;
