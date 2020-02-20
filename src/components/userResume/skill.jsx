import React, { useState, useEffect } from "react";
import { Button, Modal, Popover, Rate, Icon } from "antd";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import { arrayValidation } from "../validation/validation";
import skillIcon from "./img/headingImg/skillIcon.svg";
import creativeIcon from "./img/skillImg/creativeIcon.svg";
import designIcon from "./img/skillImg/designIcon.svg";
import financeIcon from "./img/skillImg/financeIcon.svg";
import generalIcon from "./img/skillImg/generalIcon.svg";
import legalIcon from "./img/skillImg/legalIcon.svg";
import marketingIcon from "./img/skillImg/marketingIcon.svg";
import otherIcon from "./img/skillImg/otherIcon.svg";
import technicalIcon from "./img/skillImg/technicalIcon.svg";

const proficiencyRate = [
  "Beginner",
  "Intermediate",
  "Advance",
  "Professional",
  "Expert"
];

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

  //FIXME
  const [isSubcategory, setIsSubcategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategory = categoryData => {
    const selectedSkillData = skillData.filter(
      mySkill => mySkill.category === categoryData
    );
    setSelectedCategory(categoryData);
    // console.log("dikha", categoryData)
    setMySelectedSkillData(selectedSkillData);
    setIsSubcategory(true);
  };

  const handleBack = () => {
    setIsSubcategory(false);
  };

  const theCategory = (category, index) => {
    if (index === 2) {
      return (
        <div
          onClick={() => handleCategory(category)}
          className="skill-category-content-block"
        >
          {skillImage(category)}
          <h3 className="skill-category-content__h3">{category}</h3>
        </div>
      );
    }
  };
  // const [isSubcategory, setIsSubcategory] = useState(false);

  const handleSkillName = ({ name, category }) => {
    // setIsSubcategory(!isSubcategory);
    setBeforeRate({ name, category });
  };

  //TODO resume skills

  const [skillRate, setSkillRate] = useState(0);
  const [beforeRate, setBeforeRate] = useState({});
  const [allSkillData, setAllSkillData] = useState([]);

  const handleSkillRate = value => {
    console.log("skillss skillRate", value);
    setSkillRate(value);
    const c = { ...beforeRate, rating: value };
    setAllSkillData([...allSkillData, c]);
    // setAllSkillData(...allSkillData, { rating: value });
  };

  // let thisData = [{ rating: 1 }, { rating: 2 }, { rating: 3 }];
  // const b = [...thisData, { rating: 4 }];
  // console.log("testing", b);

  const popoverContent = (
    <div style={{ display: "flex" }}>
      <Rate
        tooltips={proficiencyRate}
        onChange={handleSkillRate}
        value={skillRate}
      />
    </div>
  );

  // const filterCategory = categoryData => {};

  const [isRateVisible, setIsRateVisible] = useState();
  const handleVisibleChange = visible => {
    console.log(visible);
    setIsRateVisible(visible);
  };

  console.log("skillss isRateVisible", isRateVisible);
  //! ---------------------------------- test ---------------------------------- */
  useEffect(() => {
    console.log("skillss", beforeRate);
  }, [beforeRate]);
  useEffect(() => {
    console.log("skillss", allSkillData);
  }, [allSkillData]);

  const skillImage = category => {
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

  return (
    <div className="skill-block-one">
      <div className="skill-block-two">
        <section style={{ display: "flex" }}>
          <img
            src={skillIcon}
            alt=""
            className="skill-block-two-icon"
            className=" skill-category-content__img"
          ></img>
          <h2 className="skill-block-two-heading">Skills</h2>
        </section>
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
        width={600}
        title="Add Skills"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="skill-modal-block">
          {arrayValidation(myCategory) &&
            !isSubcategory &&
            myCategory.map((category, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "25%"
                    // display: `${isSubcategory ? "none" : "block"}`
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
          {isSubcategory && (
            <div className="skill-subCategory-block">
              <div>
                <Icon type="arrow-left" onClick={handleBack} />
                <div>{skillImage(selectedCategory)}</div>
              </div>
              {arrayValidation(mySelectedSkillData) &&
                // category === mySelectedSkillData[0].category &&
                mySelectedSkillData.map((thisSkillData, index) => (
                  <div key={index} className="skill-subCategory-content-block">
                    <Popover
                      content={popoverContent}
                      trigger="click"
                      onVisibleChange={handleVisibleChange}
                    >
                      <p
                        onClick={() => handleSkillName(thisSkillData)}
                        className="skill-subCategory-content__p"
                      >
                        {thisSkillData.name}
                      </p>
                    </Popover>
                  </div>
                ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Skill;
