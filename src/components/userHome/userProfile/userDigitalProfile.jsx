import { Button, Input, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { tokenHeader } from "../../../constant/tokenHeader";
import five from "./img/(5).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";
import facebookIcon from "./img/facebookIcon.svg";
import instagramIcon from "./img/instagramIcon.svg";
import tikTokIcon from "./img/tikTokIcon.svg";

const UserDigitalProfile = ({ profileData, isUpdate }) => {
  const digitalProfileData = profileData
    ? profileData.digitalProfile
    : {
        facebook: null,
        instagram: null,
        tiktok: null,
      };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleProfileButton = () => {
    const url = "user/update";
    const data = {
      digitalProfile: { ...SM },
    };
    axios.put(url, data, tokenHeader()).then((res) => {
      console.log(res.data);
      isUpdate();
      setIsModalVisible(false);
    });
  };

  const [SM, setSM] = useState({});
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

  return (
    <div className="avatar-digital-profile-block">
      <div className="avatar-digital-profile-content-block">
        <div className="icon-heading" >
          <img className="avatar-digital-profile-img" src={five} alt=""></img>
          <div className="avatar-digital-profile-content">
            <h2>Digital Profile</h2>
          </div>
        </div>
        <img
          src={
            digitalProfileData.facebook ||
            digitalProfileData.instagram ||
            digitalProfileData.tiktok
              ? editIcon
              : addIcon
          }
          alt=""
          onClick={() => setIsModalVisible(true)}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
        />
      </div>
      <div className="social-media">
        {digitalProfileData.facebook ? (
          <i
            style={{ color: "#3b5999" }}
            className="single-icon fa fa-facebook "
            aria-hidden="true"
          ></i>
        ) : null}
        {digitalProfileData.instagram ? (
          <i
            style={{ color: "#e95950" }}
            className="single-icon fa fa-instagram "
            aria-hidden="true"
          ></i>
        ) : null}
      </div>

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
            style={{ alignSelf: "center", marginTop: "12px" }}
          >
            SAVE
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default UserDigitalProfile;
