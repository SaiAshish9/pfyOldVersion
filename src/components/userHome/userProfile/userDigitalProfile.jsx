import { Button, Input, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { getUserProfile } from "../../../api/userProfileApi";
import { tokenHeader } from "../../../constant/tokenHeader";
import { UserProfileContext } from "../../../store/userProfileStore";
import five from "./img/(5).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";
import facebookIcon from "./img/facebookIcon.svg";
import instagramIcon from "./img/instagramIcon.svg";
import tikTokIcon from "./img/tikTokIcon.svg";
import DataLayout from "../../common/profileOrResumeLayout";

const UserDigitalProfile = () => {
  const { profileData, dispatchUserProfile } = UserProfileContext();
  const digitalProfileData = profileData
    ? profileData.digitalProfile
    : {
        facebook: null,
        instagram: null,
        tiktok: null,
      };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [SM, setSM] = useState({});

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleProfileButton = (e) => {
    e.preventDefault();
    const url = "user/update";
    const data = {
      digitalProfile: { ...SM },
    };
    axios.put(url, data, tokenHeader()).then((res) => {
      console.log(res.data);
      getUserProfile(dispatchUserProfile);
      setIsModalVisible(false);
    });
  };

  const printDigitalProfile = (digitalProfileData, icon) => (
    <>
      {!!digitalProfileData && (
        <a
          href={digitalProfileData}
          target="_blank"
          rel="noopener noreferrer"
          className="user-data-img-block"
        >
          <img src={icon} alt="" className="user-data-img" />
        </a>
      )}
    </>
  );

  const onChange = (e, media) => {
    const SocialMediaID = e.target.value.trim();
    console.log(e.target.value + " and media " + media);
    setSM({ ...SM, [media]: SocialMediaID });
  };
  console.log(SM);

  const addon = (icon, text) => (
    <div className="digital-profile-logo-block">
      <img src={icon} alt="" className="digital-profile-logo__img" />
      <p className="digital-profile-logo__p">{text}</p>
    </div>
  );

  const isDigitalIcon =
    digitalProfileData.facebook ||
    digitalProfileData.instagram ||
    digitalProfileData.tiktok;

  const content = (
    <div className="all-user-data-content">
      {digitalProfileData && (
        <div className="user-data-content-img-block">
          {printDigitalProfile(digitalProfileData.facebook, facebookIcon)}
          {printDigitalProfile(digitalProfileData.instagram, instagramIcon)}
          {printDigitalProfile(digitalProfileData.tiktok, tikTokIcon)}
        </div>
      )}
    </div>
  );

  return (
    <>
      <DataLayout
        img={<img src={five} alt="" className="user-data-img" />}
        head="Social Media Accounts"
        icon={
          <img
            src={!isDigitalIcon ? addIcon : editIcon}
            alt=""
            onClick={() => setIsModalVisible(true)}
            className="user-data-icon"
          />
        }
        content={content}
        isData={isDigitalIcon}
      />
      <Modal
        title="Add Social Media Accounts"
        visible={isModalVisible}
        onCancel={handleCancel}
        width={780}
        footer={null}
        className="social-media-modal"
      >
        <form style={{ display: "flex", flexDirection: "column" }} className="">
          <div className="social-media-input">
            <Input
              onChange={(e) => onChange(e, "facebook")}
              className="social-media-single-input"
              addonBefore={addon(facebookIcon, "Facebook")}
              defaultValue={digitalProfileData.facebook}
            />
            <Input
              onChange={(e) => onChange(e, "instagram")}
              className="social-media-single-input"
              addonBefore={addon(instagramIcon, "Instagram")}
              defaultValue={digitalProfileData.instagram}
            />
            <Input
              onChange={(e) => onChange(e, "tiktok")}
              className="social-media-single-input"
              addonBefore={addon(tikTokIcon, "TikTok")}
              defaultValue={digitalProfileData.tiktok}
            />
          </div>

          <Button
            onClick={handleProfileButton}
            htmlType="submit"
            className="social-media-btn"
          >
            SAVE
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default UserDigitalProfile;
