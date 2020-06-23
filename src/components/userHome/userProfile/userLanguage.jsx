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
import DataLayout from "../../common/profileOrResumeLayout";

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

  let dataArr = [];
  if (profileData && profileData.languages) {
    dataArr = profileData.languages.map((lang, index) => (
      <div className="user-data-content-msg" key={index}>
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

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(languagesData) && (
        <div className="user-data-content-msg-block">{dataArr}</div>
      )}
    </div>
  );

  return (
    <>
      <DataLayout
        img={<img src={three} alt="" className="user-data-img" />}
        head="Languages"
        icon={
          <img
            src={!arrayValidation(languagesData) ? addIcon : editIcon}
            alt=""
            onClick={() => setIsModalVisible(true)}
            className="user-data-icon"
          />
        }
        content={content}
        isData={arrayValidation(languagesData)}
      />
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
    </>
  );
};

export default UserLanguage;
