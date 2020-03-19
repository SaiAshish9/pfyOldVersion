import React, { useState, Fragment } from "react";
import { Button, Input, Modal, Icon } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

import five from "./img/(5).svg";
import six from "./img/(6).svg";
import seven from "./img/(7).svg";
import eight from "./img/(8).svg";
import { useEffect } from "react";

const UserDigitalProfile = ({ profileData, isUpdate }) => {
  const digitalProfile = profileData && profileData.digitalProfile;
  console.table(digitalProfile);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRerender, setIsRerender] = useState(false);

  useEffect(() => {
    setIsDisabled({
      facebook: digitalProfile.facebook.trim() ? true : false,
      instagram: digitalProfile.instagram.trim() ? true : false,
      tiktok: digitalProfile.tiktok.trim() ? true : false
    });
  }, [isRerender]);

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
      setIsRerender(Math.random());
    });
  };

  const [SM, setSM] = useState({});
  const onChange = (e, media) => {
    const id = e.target.value.trim();
    console.log(e.target.value + " and media " + media);

    setSM({ ...SM, [media]: id });
  };
  console.log(SM);

  const SMHandler = () => {};

  console.log("SOCIAL MEDIA");
  console.table(SM);

  const [isDisabled, setIsDisabled] = useState({});

  const setDisableHandler = val => {
    setIsDisabled({ ...isDisabled, [val]: false });
  };

  console.log("isDisable", isDisabled);

  return (
    <div className="avatar-digital-profile-block">
      <Fragment>
        <div className="avatar-digital-profile-content-block">
          <img className="avatar-digital-profile-img" src={five} alt=""></img>
          <div className="avatar-digital-profile-content">
            <h2>Digital Profile</h2>
          </div>
        </div>
        <div className="fb-block">
          <img src={six} alt=""></img>
          <Input
            style={{
              width:
                digitalProfile.facebook && isDisabled.facebook ? "73%" : "80%"
            }}
            disabled={isDisabled.facebook}
            defaultValue={digitalProfile.facebook}
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
                digitalProfile.facebook && isDisabled.instagram ? "73%" : "80%"
            }}
            disabled={isDisabled.instagram}
            defaultValue={digitalProfile.instagram}
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
                digitalProfile.facebook && isDisabled.tiktok ? "73%" : "80%"
            }}
            disabled={isDisabled.tiktok}
            defaultValue={digitalProfile.tiktok}
            onChange={e => onChange(e, "tiktok")}
          ></Input>
          <div
            style={{
              cursor: "pointer",
              display: isDisabled.tiktok ? "inherit" : "none"
            }}
          >
            <Icon
              onClick={() => setDisableHandler("tiktok")}
              type="edit"
            ></Icon>
          </div>
        </div>
        <Button
          type="primary"
          shape="round"
          className="avatar-digital-profile-button"
          onClick={handleProfileButton}
        >
          Add
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column" }}
            className="objective-block-one__form"
          >
            <Button
              htmlType="submit"
              className="objective-block-one__buttonTwo"
              style={{ alignSelf: "center", marginTop: "32px" }}
            >
              Done
            </Button>
          </form>
        </Modal>
      </Fragment>
    </div>
  );
};

export default UserDigitalProfile;
