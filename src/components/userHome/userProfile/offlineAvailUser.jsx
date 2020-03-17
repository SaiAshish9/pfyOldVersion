import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

import two from "./img/(2).svg";

const OfflineAvailUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openDone, setOpenDone] = useState(false);
  const [openConveyance, setOpenConveyance] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data.objectiveTextarea);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handlePreferenceButton = () => {
    setIsModalVisible(true);
  };
  const handleYes = () => {
    setOpenDone(true);
    setOpenConveyance(true);
  };
  const handleNo = () => {
    setOpenDone(true);
    setOpenConveyance(false);
  };
  return (
    <div className="offline-available-avatar-block">
      <div className="offline-available-avatar-content-block">
        <img src={two} alt="" className="offline-available-avatar-img"></img>
        <div className="offline-available-avatar-content">
          <h2>Offline Gigs</h2>
          <p>Can you travel to complete Gigs?</p>
        </div>
      </div>
      <Button
        type="primary"
        shape="round"
        className="offline-available-avatar-button"
        onClick={handlePreferenceButton}
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
          <h3>Can you travel to complete Gigs?</h3>
          <div style={{display:"flex"}}>
          <Button onClick={handleYes}>YES</Button>
          <Button onClick={handleNo}>NO</Button>
          </div>
          {openConveyance && (
            <div style={{ display: "flex" }}>
              <p style={{marginLeft:"20px"}}>BIKE</p>
              <p style={{marginLeft:"20px"}}>CAR</p>
              <p style={{marginLeft:"20px"}}>METRO</p>
              <p style={{marginLeft:"20px"}}>BUS</p>
            </div>
          )}
          {openDone && (
            <Button
              htmlType="submit"
              className="objective-block-one__buttonTwo"
              style={{ alignSelf: "center", marginTop: "32px" }}
            >
              DONE
            </Button>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default OfflineAvailUser;

// Assamese	Dogri	Hindi	Kashmiri	Maithili	Manipuri	Nepali	Punjabi	Sindhi	Telugu	Bengali
// Bodo	Gujarati	Kannada	Konkani	Malayalam	Marathi	Oriya	Santhali	Tamil	Urdu	Sanskrit
// Italian	Mandarin	Korean	Spanish	Portugese	Russian	Japanese	Arabic	French 	German	