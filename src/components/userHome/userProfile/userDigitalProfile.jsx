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
      facebook: !!digitalProfileData.facebook.trim() ? true : false,
      instagram: !!digitalProfileData.instagram.trim() ? true : false,
      tiktok: !!digitalProfileData.tiktok.trim() ? true : false
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
      setIsModalVisible(false)
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
          src={digitalProfileData.facebook || digitalProfileData.instagram || digitalProfileData.tiktok  ? editIcon : addIcon }
          alt=""
          onClick={() => setIsModalVisible(true)}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
        />
      </div>
      <div className="social-media">
          {digitalProfileData.facebook ? <i style={{color: "#3b5999"}} className="single-icon fa fa-facebook " aria-hidden="true"></i> : null}
          {digitalProfileData.instagram ? <i style={{color: "#e95950"}} className="single-icon fa fa-instagram " aria-hidden="true"></i>: null  }      
      </div>
      
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
