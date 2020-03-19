import React, { useState, useEffect } from "react";
import { Button, Modal, Select } from "antd";
import { useForm, Controller  } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";
import three from "./img/(3).svg";
const { Option } = Select;

const languages = ["Assamese", "Dogri", "Hindi", "English", "Kashmiri", "Maithili", "Manipuri", "Nepali", "Punjabi", "Sindhi", "Telugu", "Bengali", "Bodo", "Gujarati", "Kannada", "Konkani", "Malayalam", "Marathi", "Oriya", "Santhali", "Tamil", "Urdu", "Sanskrit", "Italian", "Mandarin", "Korean", "Spanish", "Portugese", "Russian", "Japanese", "Arabic", "French", "German"]

const UserLanguage = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const languagesData = props.profileData ? props.profileData.languages : [];

  const { register, handleSubmit, watch, errors, control } = useForm();

  useEffect(() => {
    setSelectLang([...languagesData])
  }, [])

  const languagesArr = [];
  // useEffect(() => {
  //   for (let i = 0; languages.length < 36; i++) {
  //     languagesArr.push(<Option key={i}>{languages[i]}</Option>);
  //   }
  // }, [])
  
 const newSubmitHandler = () => {
    if(selectLang.length > 0){
      const url = 'user/update';
      const data1 = {
        languages: [...selectLang]
      }
      axios.put(url,data1)
        .then(res => {
          console.log(res.data)
          props.isUpdate()
          setIsModalVisible(false)
        })
    }
  } 

  const onSubmit = data => {
    console.log(data.languages);
    if(data.languages.length > 0){
      const url = 'user/update';
      const data1 = {
        languages: [...data.languages]
      }
      axios.put(url,data1)
        .then(res => {
          console.log(res.data)
          props.isUpdate()
          setIsModalVisible(false)
        })
    }
    // axios
    //   .put(
    //     `${apiURL}/resume/addobjective?careerObjectives=${data.objectiveTextarea}`,
    //     null,
    //     tokenHeader
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(e => {
    //     console.log(e.response);
    //   });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleLanguageButton = () => {
    setIsModalVisible(true);
  };
  let dataArr = []
  if(props.profileData && props.profileData.languages){
    dataArr = props.profileData.languages.map((lang, index) => <p key={index}>{lang}</p>)
  }

  const [selectLang, setSelectLang] = useState([])
  const selectHandler = (lang) => {
    if(!selectLang.includes(lang)){
      setSelectLang([...selectLang, lang ])
    } else{
      setSelectLang(selectLang.filter(el => el !== lang))
    }
  }
  console.log(selectLang)

  return (
    <div className="language-of-avatar-block">
      <div className="language-of-avatar-content-block">
        <img className="language-of-avatar-img" src={three} alt=""></img>
        <div className="language-of-avatar-content">
          <h2>Languages</h2>
          <div> {props.profileData && props.profileData.languages ? dataArr : "Which language do you speak?" } </div>
        </div>
      </div>
      <Button
        type="primary"
        shape="round"
        className="language-of-avatar-button"
        onClick={handleLanguageButton}
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
      style={{ display: "flex", flexWrap: "wrap" }}
      className="objective-block-one__form"
      >
      {languages.map((lang, index) =>
            <div onClick={() => selectHandler(lang)} style={{margin: '0.5rem', color: selectLang.includes(lang) ? "darkorange" :  "inherit" }} key={lang}>{lang}</div>
          )}
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
    <div style={{ textAlign: "center"}}>
      <Button
        onClick={newSubmitHandler}
        htmlType="submit"
        className="objective-block-one__buttonTwo"
        style={{ alignSelf: "center", marginTop: "32px" }}
      >
        Done
      </Button></div>
      </Modal>
    </div>
  );
};

export default UserLanguage;
