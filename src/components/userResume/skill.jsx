import { Icon, Modal, Popover, Rate, Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { arrayValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import cancelIcon from "./img/cancelIcon.svg";
import skillIcon from "./img/headingImg/skillIcon.svg";
import creativeIcon from "./img/skillImg/creativeIcon.svg";
import designIcon from "./img/skillImg/designIcon.svg";
import financeIcon from "./img/skillImg/financeIcon.svg";
import generalIcon from "./img/skillImg/generalIcon.svg";
import legalIcon from "./img/skillImg/legalIcon.svg";
import marketingIcon from "./img/skillImg/marketingIcon.svg";
import otherIcon from "./img/skillImg/otherIcon.svg";
import technicalIcon from "./img/skillImg/technicalIcon.svg";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { tokenHeader } from "../../constant/tokenHeader";

const proficiencyRate = [
  "Beginner",
  "Intermediate",
  "Advance",
  "Professional",
  "Expert",
];

export default function Skill({ skill }) {
  const [skillDummy, setSkillDummy] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setSkillDummy(skill);
  }, [skill]);

  useEffect(() => {
    axios
      .get(`skill/fetch`, tokenHeader())
      .then((res) => {
        console.log("%c skill", "color:red", res.data);
        setSkillData(res.data);
      })
      .catch((e) => {
        console.log("skillss", e);
      });
  }, []);

  const allCategory =
    arrayValidation(skillData) && skillData.map((data) => data.category);

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

  const handleAdd = () => {
    setIsModalVisible(true);
  };

  //FIXME
  const [isSubcategory, setIsSubcategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategory = (categoryData) => {
    const selectedSkillData = skillData.filter(
      (mySkill) => mySkill.category === categoryData
    );
    setSelectedCategory(categoryData);
    setSubCategory(selectedSkillData);
    setIsSubcategory(true);
  };

  const handleBack = () => {
    setIsSubcategory(false);
  };

  const handleSkillName = ({ name, category }) => {
    setBeforeRate({ name, category });
  };

  //TODO resume skills

  const [beforeRate, setBeforeRate] = useState({});
  const [allSkillData, setAllSkillData] = useState([]);

  const handleSkillRate = (value) => {
    console.log("skillss skillRate", value);
    const withRating = { ...beforeRate, rating: value };
    setSkillDummy([...skillDummy, withRating]);
    setAllSkillData([...allSkillData, withRating]);
  };

  //! ---------------------------------- test ---------------------------------- */

  useEffect(() => {
    console.log("skillDummy", skillDummy);
    console.log("skillss", allSkillData);
    console.log("beforeRate", beforeRate);
  }, [allSkillData, beforeRate, skillDummy]);

  const skillImage = (category) => {
    switch (category) {
      case "Creative":
        return (
          <img
            alt=""
            src={creativeIcon}
            className=" skill-category-content__img"
          ></img>
        );
      case "Design":
        return (
          <img
            alt=""
            src={designIcon}
            className=" skill-category-content__img"
          ></img>
        );
      case "Finance":
        return (
          <img
            alt=""
            src={financeIcon}
            className=" skill-category-content__img"
          ></img>
        );

      case "General":
        return (
          <img
            alt=""
            src={generalIcon}
            className=" skill-category-content__img"
          ></img>
        );

      case "Legal":
        return (
          <img
            alt=""
            src={legalIcon}
            className=" skill-category-content__img"
          ></img>
        );

      case "Marketing":
        return (
          <img
            alt=""
            src={marketingIcon}
            className=" skill-category-content__img"
          ></img>
        );

      case "Other":
        return (
          <img
            alt=""
            src={otherIcon}
            className=" skill-category-content__img"
          ></img>
        );

      case "Technical":
        return (
          <img
            alt=""
            src={technicalIcon}
            className=" skill-category-content__img"
          ></img>
        );

      case "Tech":
        return (
          <img
            alt=""
            src={technicalIcon}
            className=" skill-category-content__img"
          ></img>
        );
      default:
        return;
    }
  };

  const popoverContent = (skillName) => {
    const matchSkillName = selectedSkillCategory(skillName);

    return (
      <div style={{ display: "flex" }}>
        <Rate
          tooltips={proficiencyRate}
          onChange={handleSkillRate}
          defaultValue={!!matchSkillName ? matchSkillName.rating : undefined}
          disabled={!!matchSkillName}
        />
      </div>
    );
  };

  const subCategoryStyle = (skillName) => {
    const matchSkillName = selectedSkillCategory(skillName);
    return {
      backgroundColor: !!matchSkillName ? "#406AF8" : "#fff",
      border: !!matchSkillName ? "none" : "1px solid",
      color: !!matchSkillName ? "#fff" : "#000",
    };
  };

  const selectedSkillCategory = (skillName) => {
    const matchedSkill =
      arrayValidation(skillDummy) &&
      skillDummy.find((skill) => skill.name === skillName);
    console.log(matchedSkill);
    return matchedSkill;
  };

  const handleDelete = (skillName) => {
    const skillAfterDelete = skillDummy.filter(
      (skill) => skill.name !== skillName
    );
    setSkillDummy(skillAfterDelete);
  };

  const [isEditSkill, setIsEditSkill] = useState(false);

  const handleEditSkill = (data) => {
    setIsEditSkill(data);
  };

  const onSkillRateChange = (skillName, value) => {
    const a = skillDummy.map((skill) => {
      if (skill.name === skillName) {
        return {
          ...skill,
          rating: value,
        };
      } else {
        return skill;
      }
    });
    setSkillDummy(a);
    setIsEditSkill(false);
  };

  const editDisplay = () => {
    return {
      display: isEditSkill ? "flex" : "none",
    };
  };

  return (
    <div
      className="skill-block-one"
      onClick={isEditSkill ? () => handleEditSkill(false) : undefined}
    >
      <div className="skill-block-two">
        <section style={{ display: "flex" }}>
          <img
            src={skillIcon}
            alt=""
            className=" skill-category-content__img"
          ></img>
          <h2 className="skill-block-two-heading">Skills</h2>
        </section>
        <Tooltip title="add">
          <img
            src={addIcon}
            alt=""
            onClick={handleAdd}
            className="skill-block-one-button"
          />
        </Tooltip>
      </div>
      <div className="skill-data-main-block">
        {arrayValidation(skillDummy) &&
          skillDummy.map((skill, index) => (
            <div
              key={index}
              style={{ display: "flex" }}
              className="skill-data-icon-block"
            >
              <div className="skill-data-align-block">
                <div
                  onClick={() => handleEditSkill(true)}
                  className="skill-data-block"
                >
                  <p className="skill-data__p">{skill.name}</p>
                  {console.log("skill.rating", skill.rating)}
                  <Rate
                    // tooltips={proficiencyRate}
                    disabled
                    value={skill.rating}
                    className="skill-data__rating"
                  />
                  <div
                    style={editDisplay()}
                    className="skill-edit-data__rating"
                  >
                    <Rate
                      tooltips={proficiencyRate}
                      defaultValue={skill.rating}
                      onChange={(value) => onSkillRateChange(skill.name, value)}
                    />
                    <Tooltip title="remove">
                      <img
                        src={cancelIcon}
                        alt=""
                        onClick={() => handleDelete(skill.name)}
                        className="cancel__icon"
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Modal
        width={600}
        title="Add Skills"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {/* -------------------------------- category -------------------------------- */}
        <div className="skill-modal-block">
          {arrayValidation(myCategory) &&
            !isSubcategory &&
            myCategory.map((category, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "25%",
                  }}
                  className="skill-category-block"
                >
                  {!isSubcategory && (
                    <div
                      onClick={() => handleCategory(category)}
                      className="skill-category-content-block"
                    >
                      {skillImage(category)}
                      <h3 className="skill-category-content__h3">{category}</h3>
                    </div>
                  )}
                </div>
              );
            })}

          {/* -------------------------------- sub-category -------------------------------- */}
          {isSubcategory && (
            <div className="skill-subCategory-block">
              <div>
                {/* <Icon type="arrow-left"z onClick={handleBack} /> */}
                <ArrowLeftOutlined onClick={handleBack} />
                <div>{skillImage(selectedCategory)}</div>
              </div>
              <div className=""></div>
              {arrayValidation(subCategory) &&
                subCategory.map((thisSkillData, index) => (
                  <div key={index} className="skill-subCategory-block-two">
                    <div
                      className="skill-subCategory-content-block"
                      style={subCategoryStyle(thisSkillData.name)}
                    >
                      <Popover
                        content={popoverContent(thisSkillData.name)}
                        trigger="click"
                      >
                        <p
                          onClick={() => handleSkillName(thisSkillData)}
                          className="skill-subCategory-content__p"
                        >
                          {thisSkillData.name}
                        </p>
                      </Popover>
                    </div>
                    {!!selectedSkillCategory(thisSkillData.name) && (
                      <img
                        src={cancelIcon}
                        alt=""
                        className="delete-icon"
                        onClick={() => handleDelete(thisSkillData.name)}
                      />

                      // <Icon
                      //   type="delete"
                      //   className="delete-icon"
                      //   onClick={() => handleDelete(thisSkillData.name)}
                      // ></Icon>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
