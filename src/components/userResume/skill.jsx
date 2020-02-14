import React, { useState, useEffect } from "react";
import { Button, Modal, Popover } from "antd";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import { arrayValidation } from "../validation/validation";
import skillIcon from "./img/skillIcon.svg";

const Skill = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [skillData, setSkillData] = useState([]);
  const [mySelectedSkillData, setMySelectedSkillData] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiURL}/skill/fetch`, tokenHeader)
      .then(res => {
        console.log(res.data);
        setSkillData(res.data);
      })
      .catch(e => {
        console.log("skillss", e);
      });
  }, []);

  const allCategory =
    arrayValidation(skillData) && skillData.map(data => data.category);

  const myCategory =
    arrayValidation(allCategory) &&
    allCategory.reduce((accumulator, currentValue) => {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSkillButton = () => {
    setIsModalVisible(true);
  };

  const handleCategory = categoryData => {
    // mySelectedSkillData(categoryData);
    const selectedSkillData = skillData.filter(
      mySkill => mySkill.category === categoryData
    );
    setMySelectedSkillData(selectedSkillData);
  };

  //TODO resume skills
  const popoverContent = (
    <div style={{ display: "flex" }}>
      <p
        style={{ margin: "8px" }}
        onClick={() => {
          setThisState(false);
        }}
      ></p>
      <p style={{ margin: "8px" }}>2</p>
      <p style={{ margin: "8px" }}>3</p>
      <p style={{ margin: "8px" }}>4</p>
      <p style={{ margin: "8px" }}>5</p>
    </div>
  );
  // const filterCategory = categoryData => {};
  const handleSkillName = a => {
    console.log(a);
  };

  const [thisState, setThisState] = useState();
  const handleVisibleChange = visible => {
    console.log(visible);
    setThisState(visible);
  };
  console.log(thisState);
  //! ---------------------------------- test ---------------------------------- */
  useEffect(() => {
    console.log(mySelectedSkillData);
  }, [mySelectedSkillData]);

  return (
    <div className="skill-block-one">
      <div className="skill-block-two">
        <img src={skillIcon} alt="" className="skill-block-two-icon"></img>
        <h2 className="skill-block-two-heading">Skills</h2>
      </div>
      <Button
        // type="primary"
        shape="round"
        className="skill-block-one-button"
        onClick={handleSkillButton}
      >
        Add Skill
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          {arrayValidation(myCategory) &&
            myCategory.map((category, index) => {
              return (
                <div key={index}>
                  <h3 onClick={() => handleCategory(category)}>{category}</h3>
                  <div>
                    {arrayValidation(mySelectedSkillData) &&
                      category === mySelectedSkillData[0].category &&
                      mySelectedSkillData.map((thisSkillData, index) => (
                        <div key={index}>
                          <Popover
                            content={popoverContent}
                            title="Title"
                            trigger="click"
                            onVisibleChange={handleVisibleChange}
                          >
                            <p onClick={() => handleSkillName(thisSkillData)}>
                              {thisSkillData.name}
                            </p>
                          </Popover>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
        </div>
      </Modal>
    </div>
  );
};

export default Skill;
