import { Button, Icon, Input, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import five from "./img/(5).svg";
import six from "./img/(6).svg";
import seven from "./img/(7).svg";
import eight from "./img/(8).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from './img/editIcon.svg';




const UserDigitalProfile = ({ profileData, isUpdate }) => {
  const digitalProfileData = profileData
    ? profileData.digitalProfile
    : {
        facebook: null,
        instagram: null,
        tiktok: null
      };
  // const digitalProfile = profileData && profileData.digitalProfile;
  // console.table(digitalProfile)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRerender, setIsRerender] = useState(false);
  // const [DigitalProfile, setDigitalProfile] = useState({
  //   facebook:  null,
  //   instagram:    null,
  //   tiktok:  null,
  // })

  const [isDisabled, setIsDisabled] = useState({
    facebook: false,
    instagram: false,
    tiktok: false
  });

  useEffect(() => {
    setIsDisabled({
      facebook: !!digitalProfileData.facebook ? true : false,
      instagram: !!digitalProfileData.instagram ? true : false,
      tiktok: !!digitalProfileData.tiktok ? true : false
    });
    // setDigitalProfile({
    //   facebook:  digitalProfileData.facebook ? digitalProfileData.facebook : null,
    //   instagram:    digitalProfileData.instagram ? digitalProfileData.instagram : null,
    //   tiktok:  digitalProfileData.tiktok ? digitalProfileData.tiktok : null,
    // })
  }, [isRerender]);

  // console.table(DigitalProfile)

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data.objectiveTextarea);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleProfileButton = () => {
    // setIsModalVisible(true);
    const url = "user/update";
    const data = {
      digitalProfile: { ...SM }
    };
    axios.put(url, data).then(res => {
      console.log(res.data);
      isUpdate();
      // setIsRerender(Math.random());
    });
  };

  const [SM, setSM] = useState({});
  const onChange = (e, media) => {
    const SocialMediaID = e.target.value.trim();
    console.log(e.target.value + " and media " + media);

    setSM({ ...SM, [media]: SocialMediaID });
  };
  console.log(SM);

  const SMHandler = () => {};

  const setDisableHandler = val => {
    setIsDisabled({ ...isDisabled, [val]: false });
  };

  console.log("isDisable", isDisabled);

  return (
    <div className="avatar-digital-profile-block">
      <div className="avatar-digital-profile-content-block">
        <div className="" style={{ display: "flex" }}>
          <img className="avatar-digital-profile-img" src={five} alt=""></img>
          <div className="avatar-digital-profile-content">
            <h2>Digital Profile</h2>
          </div>
        </div>
        <img
          src={isDisabled.facebook || isDisabled.instagram || isDisabled.tiktok ? editIcon : addIcon }
          alt=""
          onClick={() => setIsModalVisible(true)}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
        />
      </div>
      {/* <div className="social-media-block">
      <div className="fb-block">
        <img src={six} alt=""></img>
        <Input
          style={{
            width:
              digitalProfileData.facebook && isDisabled.facebook ? "73%" : "80%"
          }}
          disabled={isDisabled.facebook}
          defaultValue={digitalProfileData.facebook}
          onChange={e => onChange(e, "facebook")}
        />
        <div
          style={{
            cursor: "pointer",
            display: isDisabled.facebook ? "inherit" : "none"
          }}
        >
          <Icon
            onClick={() => setDisableHandler("facebook")}
            type="edit"
          ></Icon>
        </div>
      </div>
      <div className="insta-block">
        <img src={seven} alt=""></img>
        <Input
          style={{
            width:
              digitalProfileData.instagram && isDisabled.instagram
                ? "73%"
                : "80%"
          }}
          disabled={isDisabled.instagram}
          defaultValue={digitalProfileData.instagram}
          onChange={e => onChange(e, "instagram")}
        ></Input>
        <div
          style={{
            cursor: "pointer",
            display: isDisabled.instagram ? "inherit" : "none"
          }}
        >
          <Icon
            onClick={() => setDisableHandler("instagram")}
            type="edit"
          ></Icon>
        </div>
      </div>
      <div className="tik-tok-block">
        <img src={eight} alt=""></img>
        <Input
          style={{
            width:
              digitalProfileData.tiktok && isDisabled.tiktok ? "73%" : "80%"
          }}
          disabled={isDisabled.tiktok}
          defaultValue={digitalProfileData.tiktok}
          onChange={e => onChange(e, "tiktok")}
        ></Input>
        <div
          style={{
            cursor: "pointer",
            display: isDisabled.tiktok ? "inherit" : "none"
          }}
        >
          <Icon onClick={() => setDisableHandler("tiktok")} type="edit"></Icon>
        </div>
      </div>
      </div> */}
      
      <Modal
        title="Add Social Media Accounts"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
          className="objective-block-one__form"
        >
          <div className="social-media-input">
            <Input onChange={(e) => onChange(e, "facebook")}  className="social-media-single-input" addonBefore="facebook" defaultValue={digitalProfileData.facebook} />
            <Input onChange={(e) => onChange(e, "instagram")} className="social-media-single-input" addonBefore="instagram" defaultValue={digitalProfileData.instagram} />
            <Input onChange={(e) => onChange(e, "tiktok")} className="social-media-single-input" addonBefore="tiktok" defaultValue={digitalProfileData.tiktok} />
          </div>
          
          <Button
            onClick={handleProfileButton}
            htmlType="submit"
            className="objective-block-one__buttonTwo"
            style={{ alignSelf: "center", marginTop: "32px" }}>
            
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default UserDigitalProfile;
