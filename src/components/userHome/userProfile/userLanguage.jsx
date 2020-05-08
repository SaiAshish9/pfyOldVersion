import { Button, Modal, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import three from "./img/(3).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";

const { Option } = Select;

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

const UserLanguage = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const languagesData = props.profileData ? props.profileData.languages : [];

  const { register, handleSubmit, watch, errors, control } = useForm();

  useEffect(() => {
    setSelectLang([...languagesData]);
  }, []);

  const languagesArr = [];

  const newSubmitHandler = () => {
    const url = "user/update";
    const data1 = {
      languages: [...selectLang],
    };
    axios.put(url, data1).then((res) => {
      console.log(res.data);
      props.isUpdate();
      setIsModalVisible(false);
    });
  };

  const onSubmit = (data) => {
    console.log(data.languages);
    if (data.languages.length > 0) {
      const url = "user/update";
      const data1 = {
        languages: [...data.languages],
      };
      axios.put(url, data1).then((res) => {
        console.log(res.data);
        props.isUpdate();
        setIsModalVisible(false);
      });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleLanguageButton = () => {
    setIsModalVisible(true);
  };
  let dataArr = [];
  if (props.profileData && props.profileData.languages) {
    dataArr = props.profileData.languages.map((lang, index) => (
      <div className="single-selected-language" key={index}>
        {lang}
      </div>
    ));
  }

  const [selectLang, setSelectLang] = useState([]);
  const selectHandler = (lang) => {
    if (!selectLang.includes(lang)) {
      setSelectLang([...selectLang, lang]);
    } else {
      setSelectLang(selectLang.filter((el) => el !== lang));
    }
  };
  console.log(selectLang);

  return (
    <div className="language-of-avatar-block">
      <div className="language-of-avatar-content-block">
        <div style={{ display: "flex" }}>
          <img className="language-of-avatar-img" src={three} alt=""></img>
          <div className="language-of-avatar-content">
            <h2>Languages</h2>
            {props.profileData && props.profileData.languages ? (
              <div className="selected-languages">{dataArr}</div>
            ) : (
              "Which language do you speak?"
            )}{" "}
          </div>
        </div>
        <img
          src={
            props.profileData && props.profileData.languages.length > 0
              ? editIcon
              : addIcon
          }
          alt=""
          onClick={handleLanguageButton}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
        />
      </div>

      <Modal
        width={"67%"}
        title="Add Languages"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-languages-modal"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexWrap: "wrap" }}
          className="objective-block-one__form"
        >
          <div className="languages-list">
            {languages.map((lang, index) => (
              <div
                className="single-language"
                onClick={() => selectHandler(lang)}
                style={{
                  background: selectLang.includes(lang) ? "#ccc" : "inherit",
                }}
                key={lang}
              >
                {lang}
              </div>
            ))}
          </div>

          {/* <Controller
        as={<Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select languages"
          // defaultValue={['English']}
          // onChange={handleChange}
        >
          {languages.map((lang, index) =>
            <Option key={lang}>{lang}</Option>
          )}
        </Select>}
        control={control}
        name="languages"
        // defaultValue={{ value: 'English' }}
      /> */}
        </form>
        <div style={{ textAlign: "center" }}>
          <Button
            shape={"round"}
            onClick={newSubmitHandler}
            htmlType="submit"
            className="submit-btn"
            style={{}}
          >
            Done
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UserLanguage;
