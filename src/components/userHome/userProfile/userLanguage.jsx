import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { getUserProfile } from "../../../api/userProfileApi";
import { tokenHeader } from "../../../constant/tokenHeader";
import { UserProfileContext } from "../../../store/userProfileStore";
import { arrayValidation } from "../../validation/validation";
import three from "./img/(3).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";

const languages = [
  "Assamese",
  "Dogri",
  "Hindi",
  "English",
  "Kashmiri",
  "Maithili",
  "Manipuri",
  "Nepali",
  "Punjabi",
  "Sindhi",
  "Telugu",
  "Bengali",
  "Bodo",
  "Gujarati",
  "Kannada",
  "Konkani",
  "Malayalam",
  "Marathi",
  "Oriya",
  "Santhali",
  "Tamil",
  "Urdu",
  "Sanskrit",
  "Italian",
  "Mandarin",
  "Korean",
  "Spanish",
  "Portugese",
  "Russian",
  "Japanese",
  "Arabic",
  "French",
  "German",
];

const UserLanguage = () => {
  const { profileData, dispatchUserProfile } = UserProfileContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const languagesData = profileData ? profileData.languages : [];

  const newSubmitHandler = () => {
    const url = "user/update";
    const data1 = {
      languages: [...selectLang],
    };
    axios
      .put(url, data1, tokenHeader())
      .then((res) => {
        console.log(res.data);
        getUserProfile(dispatchUserProfile);
        setIsModalVisible(false);
      })
      .catch((error) => {
        console.log(error.res);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleLanguageButton = () => {
    setIsModalVisible(true);
  };
  let dataArr = [];
  if (profileData && profileData.languages) {
    dataArr = profileData.languages.map((lang, index) => (
      <div className="single-selected-language" key={index}>
        {lang}
      </div>
    ));
  }

  const [selectLang, setSelectLang] = useState(languagesData);
  const selectHandler = (lang) => {
    if (!selectLang.includes(lang)) {
      setSelectLang([...selectLang, lang]);
    } else {
      setSelectLang(selectLang.filter((el) => el !== lang));
    }
  };

  return (
    <div className="language-of-avatar-block">
      <div className="language-of-avatar-content-block">
        <div className="icon-heading">
          <img className="language-of-avatar-img" src={three} alt=""></img>
          <div className="language-of-avatar-content">
            <h2>Languages</h2>
            {arrayValidation(languagesData) && (
              <div className="selected-languages">{dataArr}</div>
            )}
          </div>
        </div>
        <img
          src={
            profileData.languages && profileData.languages.length > 0
              ? editIcon
              : addIcon
          }
          alt=""
          onClick={handleLanguageButton}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
        />
      </div>

      <Modal
        width={780}
        title="Add Languages"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-languages-modal"
      >
        <form className="objective-block-one__form">
          <div className="languages-list">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="single-language"
                onClick={() => selectHandler(lang)}
                style={{
                  border:
                    selectLang && selectLang.includes(lang)
                      ? "solid 2px #444584"
                      : "",
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        </form>
        <div style={{ textAlign: "center" }}>
          <Button
            shape={"round"}
            onClick={newSubmitHandler}
            htmlType="submit"
            className="submit-btn"
          >
            SAVE
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UserLanguage;
