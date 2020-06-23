import { Button, Input, Modal, Tooltip } from "antd";
import Axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import DataLayout from "../common/profileOrResumeLayout";
import { objectValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import behanceIcon from "./img/digitalProfileIcon/behanceIcon.svg";
import blogIcon from "./img/digitalProfileIcon/blogIcon.svg";
import dribbleIcon from "./img/digitalProfileIcon/dribbleIcon.svg";
import facebookIcon from "./img/digitalProfileIcon/facebookIcon.svg";
import githubIcon from "./img/digitalProfileIcon/githubIcon.svg";
import instagramIcon from "./img/digitalProfileIcon/instagramIcon.svg";
import linkedinIcon from "./img/digitalProfileIcon/linkedinIcon.svg";
import mediumIcon from "./img/digitalProfileIcon/mediumIcon.svg";
import quoraIcon from "./img/digitalProfileIcon/quoraIcon.svg";
import youtubeIcon from "./img/digitalProfileIcon/youtubeIcon.svg";
import editIcon from "./img/editIcon.svg";
import digitalProfileIcon from "./img/headingImg/digitalProfileIcon.svg";

export default function DigitalProfile({ digitalProfile, updateResume }) {
  console.log("digital Profile", digitalProfile);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Axios.post(`resume/add_digital_profiles`, data, tokenHeader())
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
    </div>
  );
  const isDigitalProfile =
    !!digitalProfile && objectValidation(digitalProfile) && isAllData();

  const content = (
    <div className="all-user-data-content">
      {isDigitalProfile && (
        <div className="user-data-content-img-block">
          {printDigitalProfile(digitalProfile.facebook, facebookIcon)}
          {printDigitalProfile(digitalProfile.instagram, instagramIcon)}
          {printDigitalProfile(digitalProfile.linkedin, linkedinIcon)}
          {printDigitalProfile(digitalProfile.youtube, youtubeIcon)}
          {printDigitalProfile(digitalProfile.github, githubIcon)}
          {printDigitalProfile(digitalProfile.behance, behanceIcon)}
          {printDigitalProfile(digitalProfile.dribbble, dribbleIcon)}
          {printDigitalProfile(digitalProfile.quora, quoraIcon)}
          {printDigitalProfile(digitalProfile.blog, blogIcon)}
          {printDigitalProfile(digitalProfile.medium, mediumIcon)}
        </div>
      )}
    </div>
  );

  return (
    <>
      <DataLayout
        img={<img src={digitalProfileIcon} alt="" className="user-data-img" />}
        head="Digital Profiles"
        icon={
          <img
            src={!isDigitalProfile ? addIcon : editIcon}
            alt=""
            onClick={handleAdd}
            className="user-data-icon"
          />
        }
        content={content}
        isData={isDigitalProfile}
      />
      <Modal
        title="Add Social Media Accounts"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
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
              SAVE
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
