import React, { useState } from "react";
import { Button, Modal, Input, Tooltip, Icon } from "antd";
import { useForm, Controller } from "react-hook-form";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import Axios from "axios";
import { objectValidation } from "../validation/validation";
import digitalProfileIcon from "./img/headingImg/digitalProfileIcon.svg";
import facebookIcon from "./img/digitalProfileIcon/facebookIcon.svg";
import behanceIcon from "./img/digitalProfileIcon/behanceIcon.svg";
import blogIcon from "./img/digitalProfileIcon/blogIcon.svg";
import dribbleIcon from "./img/digitalProfileIcon/dribbleIcon.svg";
import githubIcon from "./img/digitalProfileIcon/githubIcon.svg";
import youtubeIcon from "./img/digitalProfileIcon/youtubeIcon.svg";
import linkedinIcon from "./img/digitalProfileIcon/linkedinIcon.svg";
import instagramIcon from "./img/digitalProfileIcon/instagramIcon.svg";
import quoraIcon from "./img/digitalProfileIcon/quoraIcon.svg";
import mediumIcon from "./img/digitalProfileIcon/mediumIcon.svg";
// import facebookIcon from "./img/digitalProfileIcon/";
import {DeleteOutlined, EditOutlined } from '@ant-design/icons';

import addIcon from "./img/addIcon.svg";

export default function DigitalProfile({ digitalProfile, updateResume }) {
  console.log("digital Profile", digitalProfile);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Axios.post(`${apiURL}/resume/add_digital_profiles`, data, tokenHeader)
      .then((res) => {
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const printDigitalProfile = (digitalProfileData, name, icon) => (
    <div className="digital-profile-content-block">
      <div className="">
        {/* <section>{name}</section>
        <section>{digitalProfileData}</section> */}

        <img src={icon} alt="" className="digital-profile-content__img" />
      </div>
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

  const addon = (icon, text) => (
    <div className="digital-profile-logo-block">
      <img src={icon} alt="" className="digital-profile-logo__img" />
      <p className="digital-profile-logo__p">{text}</p>
      {/* <div className="digital-profile-divider"></div> */}
    </div>
  );

  return (
    <div className="digital-profile-block-one">
      <div className="digital-profile-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img
            src={digitalProfileIcon}
            alt=""
            className="digital-profile-block-two-icon"
          ></img>
          <h2 className="digital-profile-block-two-heading">
            Digital Profiles
          </h2>
        </section>

        {isAllData() ? (
          <section>
            <Tooltip title="edit">
              {/* <Icon type="edit" onClick={handleEdit} /> */}
              <EditOutlined onClick={handleEdit} />
            </Tooltip>
          </section>
        ) : (
          <Tooltip title="add">
            <img
              src={addIcon}
              alt=""
              onClick={handleAdd}
              className="digital-block-one-button"
            />
          </Tooltip>
        )}
      </div>
      {!!digitalProfile && objectValidation(digitalProfile) && isAllData() && (
        <div className="user-digital-profile-block">
          {!!digitalProfile.facebook &&
            printDigitalProfile(
              digitalProfile.facebook,
              "Facebook",
              facebookIcon
            )}
          {!!digitalProfile.instagram &&
            printDigitalProfile(
              digitalProfile.instagram,
              "Instagram",
              instagramIcon
            )}
          {!!digitalProfile.linkedin &&
            printDigitalProfile(
              digitalProfile.linkedin,
              "LinkedIn",
              linkedinIcon
            )}
          {!!digitalProfile.youtube &&
            printDigitalProfile(digitalProfile.youtube, "YouTube", youtubeIcon)}
          {!!digitalProfile.github &&
            printDigitalProfile(digitalProfile.github, "GitHub", githubIcon)}
          {!!digitalProfile.behance &&
            printDigitalProfile(digitalProfile.behance, "Behance", behanceIcon)}
          {!!digitalProfile.dribbble &&
            printDigitalProfile(
              digitalProfile.dribbble,
              "Dribbble",
              dribbleIcon
            )}
          {!!digitalProfile.quora &&
            printDigitalProfile(digitalProfile.quora, "Quora", quoraIcon)}
          {!!digitalProfile.blog &&
            printDigitalProfile(digitalProfile.blog, "Blog", blogIcon)}
          {!!digitalProfile.medium &&
            printDigitalProfile(digitalProfile.medium, "Medium", mediumIcon)}
        </div>
      )}
      <Modal
        title="Add Social Media Accounts"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={680}
        className="digitalProfile-modal-main-block"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={
              <Input
                addonBefore={addon(facebookIcon, "Facebook")}
                className="digital-profile-input"
              />
            }
            name="facebook"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.facebook
                ? digitalProfile.facebook
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(behanceIcon, "Behance")}
              />
            }
            name="behance"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.behance
                ? digitalProfile.behance
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(instagramIcon, "Instagram")}
              />
            }
            name="instagram"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.instagram
                ? digitalProfile.instagram
                : ""
            }
          />

          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(dribbleIcon, "Dribble")}
              />
            }
            name="dribbble"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.dribbble
                ? digitalProfile.dribbble
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(linkedinIcon, "LinkedIn")}
              />
            }
            name="linkedin"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.linkedin
                ? digitalProfile.linkedin
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(quoraIcon, "Quora")}
              />
            }
            name="quora"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.quora
                ? digitalProfile.quora
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(youtubeIcon, "Youtube")}
              />
            }
            name="youtube"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.youtube
                ? digitalProfile.youtube
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(blogIcon, "Blog")}
              />
            }
            name="blog"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.blog
                ? digitalProfile.blog
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(githubIcon, "Github")}
              />
            }
            name="github"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.github
                ? digitalProfile.github
                : ""
            }
          />
          <Controller
            as={
              <Input
                className="digital-profile-input"
                addonBefore={addon(mediumIcon, "Medium")}
              />
            }
            name="medium"
            control={control}
            defaultValue={
              !!digitalProfile && !!digitalProfile.medium
                ? digitalProfile.medium
                : ""
            }
          />
          <div className="digitalProfile-button-block">
            <Button
              htmlType="submit"
              className="digitalProfile__button"
              shape="round"
            >
              Done
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
