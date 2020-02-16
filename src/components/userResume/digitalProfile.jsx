import React, { useState } from "react";
import { Button, Modal, Input, Tooltip, Icon } from "antd";
import { useForm, Controller } from "react-hook-form";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import team from "./img/team.svg";
import Axios from "axios";
import { objectValidation } from "../validation/validation";

const DigitalProfile = ({ digitalProfile, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = data => {
    console.log(data);
    Axios.post(`${apiURL}/resume/add_digital_profiles`, data, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDigitalProfileButton = () => {
    setIsModalVisible(true);
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const printDigitalProfile = (digitalProfileData, name) => (
    <div
      style={{
        // display: "flex",
        // justifyContent: "space-between",
        margin: "0px 40px"
      }}
    >
      <section>{name}</section>
      <section>{digitalProfileData}</section>
    </div>
  );

  //! ---------------------------------- test ---------------------------------- */
  console.log(!!digitalProfile && objectValidation(digitalProfile));

  const isAllData = () => {
    return (
      !!digitalProfile &&
      (!!digitalProfile.facebook ||
        !!digitalProfile.instagram ||
        !!digitalProfile.linkedin ||
        !!digitalProfile.youtube ||
        !!digitalProfile.github ||
        !!digitalProfile.behance ||
        !!digitalProfile.dribbble ||
        !!digitalProfile.quora ||
        !!digitalProfile.blog ||
        !!digitalProfile.medium)
    );
  };

  return (
    <div className="digital-profile-block-one">
      <div
        className="digital-profile-block-two"
        style={{
          borderBottom: isAllData() ? "1px solid" : "none"
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            src={team}
            alt=""
            className="digital-profile-block-two-icon"
          ></img>
          <h2 className="digital-profile-block-two-heading">
            Digital Profiles
          </h2>
        </section>
        {isAllData() && (
          <section>
            <Tooltip title="edit">
              <Icon type="edit" onClick={handleEdit} />
            </Tooltip>
          </section>
        )}
      </div>
      {!!digitalProfile && objectValidation(digitalProfile) && isAllData() ? (
        <div>
          {!!digitalProfile.facebook &&
            printDigitalProfile(digitalProfile.facebook, "Facebook")}
          {!!digitalProfile.instagram &&
            printDigitalProfile(digitalProfile.instagram, "Instagram")}
          {!!digitalProfile.linkedin &&
            printDigitalProfile(digitalProfile.linkedin, "LinkedIn")}
          {!!digitalProfile.youtube &&
            printDigitalProfile(digitalProfile.youtube, "YouTube")}
          {!!digitalProfile.github &&
            printDigitalProfile(digitalProfile.github, "GitHub")}
          {!!digitalProfile.behance &&
            printDigitalProfile(digitalProfile.behance, "Behance")}
          {!!digitalProfile.dribbble &&
            printDigitalProfile(digitalProfile.dribbble, "Dribbble")}
          {!!digitalProfile.quora &&
            printDigitalProfile(digitalProfile.quora, "Quora")}
          {!!digitalProfile.blog &&
            printDigitalProfile(digitalProfile.blog, "Blog")}
          {!!digitalProfile.medium &&
            printDigitalProfile(digitalProfile.medium, "Medium")}
        </div>
      ) : (
        <Button
          // type="primary"
          shape="round"
          className="digital-profile-block-one-button"
          onClick={handleDigitalProfileButton}
        >
          Add Digital Profile
        </Button>
      )}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={<Input />}
            name="facebook"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.facebook
                ? digitalProfile.facebook
                : ""
            }
            addonBefore="facebook"
          />
          <Controller
            as={<Input />}
            name="behance"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.instagram
                ? digitalProfile.instagram
                : ""
            }
            addonBefore="Behance"
          />
          <Controller
            as={<Input />}
            name="instagram"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.linkedin
                ? digitalProfile.linkedin
                : ""
            }
            addonBefore="Instagram"
          />

          <Controller
            as={<Input />}
            name="dribbble"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.youtube
                ? digitalProfile.youtube
                : ""
            }
            addonBefore="Dribble"
          />
          <Controller
            as={<Input />}
            name="linkedin"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.github
                ? digitalProfile.github
                : ""
            }
            addonBefore="LinkedIn"
          />
          <Controller
            as={<Input />}
            name="quora"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.behance
                ? digitalProfile.behance
                : ""
            }
            addonBefore="Quora"
          />
          <Controller
            as={<Input />}
            name="youtube"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.dribbble
                ? digitalProfile.dribbble
                : ""
            }
            addonBefore="Youtube"
          />
          <Controller
            as={<Input />}
            name="blog"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.quora
                ? digitalProfile.quora
                : ""
            }
            addonBefore="Blog"
          />
          <Controller
            as={<Input />}
            name="github"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.blog
                ? digitalProfile.blog
                : ""
            }
            addonBefore="Github"
          />
          <Controller
            as={<Input />}
            name="medium"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.medium
                ? digitalProfile.medium
                : ""
            }
            addonBefore="Medium"
          />
          <div className="digitalProfile-modal-block">
          <Button
          htmlType="submit"
          className="digitalProfile-modal-block-button"
          
          shape="round"
          >
          Done
          </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DigitalProfile;
