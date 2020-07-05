import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Element, scroller } from "react-scroll";
import modalCloseIcon from "../../assets/img/modalCloseIcon.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import DataLayout from "../common/profileOrResumeLayout";
import { arrayValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import experienceIcon from "./img/headingImg/experienceIcon.svg";
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Experience({ workExperience, updateResume }) {
  const { register, handleSubmit, reset } = useForm({});

  const year = new Date().getFullYear();
  const years = Array.from(new Array(60), (val, index) => year - index);

  const monthList = month.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));
  //#region
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  const [isWorkHome, setIsWorkHome] = useState(false);
  const [isCurrently, setIsCurrently] = useState(false);

  console.log("isWorkFromHomeWWW", isWorkHome);
  console.log("isWorkFromHomeCCC", isCurrently);

  const scrollToElement = () => {
    scroller.scrollTo("scroll-to-experience", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
  };
  const onSubmit = (data) => {
    const end = isCurrently ? null : data.end;
    const location = isWorkHome ? null : data.location;
    const myExpData = experienceData
      ? {
          ...data,
          _id: experienceData._id,
          end,
          location,
          isCurrently,
          isWorkHome,
        }
      : { ...data, isCurrently, location, isWorkHome, end };

    axios
      .post(`resume/add_experience`, myExpData, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setIsModalVisible(false);
    setExperienceData(false);
    scrollToElement();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setExperienceData(false);
    scrollToElement();
  };

  const handleAdd = () => {
    setIsCurrently(false);
    setIsWorkHome(false);
    reset({
      organisation: "",
      designation: "",
      description: "",
      location: "",
      start: {
        month: "",
        year: "",
      },
      end: {
        month: "",
        year: "",
      },
    });
    setIsModalVisible(true);
  };

  const handleEdit = (selectedExp) => {
    console.log(selectedExp);

    setExperienceData(selectedExp);
    setIsWorkHome(selectedExp.isWorkHome);
    setIsCurrently(selectedExp.isCurrently);

    reset({
      organisation: selectedExp.organisation,
      designation: selectedExp.designation,
      description: selectedExp.description,
      location: selectedExp.location,
      start: {
        month: selectedExp.start.month,
        year: selectedExp.start.year,
      },
      end: !!selectedExp.end && {
        month: selectedExp.end.month,
        year: selectedExp.end.year,
      },
    });
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`resume/delete_experience/${id}`, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  //#endregion

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(workExperience) &&
        workExperience.map((myExp, index) => (
          <div key={index} className="user-data-content-main-block">
            <div className="user-data-content-block">
              <h1 className="user-data-h1">{myExp.organisation}</h1>
              <h2 className="user-data-h2">{myExp.designation}</h2>
              <p className="user-data-h2">{myExp.description}</p>
              <h4 className="user-data-h2">{myExp.location}</h4>
              <div className="user-data-last-el">
                <span className="user-data-h2">{myExp.start.month}</span>
                <span className="user-data-h2"> {myExp.start.year}</span>
                <span className="user-data-h2">
                  {" "}
                  - {(!!myExp.end && myExp.end.month) || "Present"}
                </span>
                {!!myExp.end && (
                  <span className="user-data-h2"> {myExp.end.year}</span>
                )}
              </div>
            </div>
            <div className="user-data-content-icon-block">
              <img
                src={editIcon}
                alt=""
                onClick={() => handleEdit(myExp)}
                className="user-data-content-icon"
              />
              <DeleteOutlined
                onClick={() => handleDelete(myExp._id)}
                className="user-data-content-icon"
              />
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <>
      <Element name="scroll-to-experience" className="element">
        <DataLayout
          img={<img src={experienceIcon} alt="" className="user-data-img" />}
          head="Work Experience"
          icon={
            <img
              src={addIcon}
              alt=""
              onClick={handleAdd}
              className="user-data-icon"
            />
          }
          content={content}
          isData={arrayValidation(workExperience)}
        />
      </Element>
      <Modal
        title="Add Experience"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
        className="experience-modal"
        closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="experience-modal__form"
        >
          <section className="experience-modal-sec-one">
            <h3 className="experience-modal-sec-one__head">Organization</h3>
            <input
              name="organisation"
              ref={register}
              className="experience-modal-sec-one__input"
            ></input>
          </section>

          <section className="experience-modal-sec-two">
            <h3 className="experience-modal-sec-two__head">Profile</h3>
            <input
              name="designation"
              ref={register}
              className="experience-modal-sec-two__input"
            />
          </section>

          <section className="experience-modal-sec-three">
            <h3 className="experience-modal-sec-three__head">Description</h3>
            <textarea
              name="description"
              ref={register}
              className="experience-modal-sec-three__textarea"
            />
          </section>

          {!isWorkHome && (
            <section className="experience-modal-sec-four">
              <h3 className="experience-modal-sec-four__head">Location</h3>
              <input
                name="location"
                ref={register}
                className="experience-modal-sec-four__input"
              />
            </section>
          )}

          <section className="experience-modal-sec-five">
            <Checkbox
              checked={isWorkHome}
              onChange={(e) => {
                setIsWorkHome(e.target.checked);
              }}
            />
            <h3 className="experience-modal-sec-five__head">Work from home</h3>
          </section>
          <div className="startOrEndYear-block">
            <section className="experience-modal-sec-six">
              <h3 className="experience-modal-sec-six__head">From</h3>
              <div className="experience-modal-sec-six-block">
                <select
                  name="start.month"
                  ref={register}
                  className="experience-modal-sec-six__select-one"
                >
                  {monthList}
                </select>
                <span className="date-separator">/</span>
                <select
                  name="start.year"
                  ref={register}
                  className="experience-modal-sec-six__select-two"
                >
                  {years.map((year, index) => {
                    return (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </section>

            {!isCurrently && (
              <section className="experience-modal-sec-seven">
                <h3 className="experience-modal-sec-seven__head">To</h3>
                <div className="experience-modal-sec-seven-block">
                  <select
                    name="end.month"
                    ref={register}
                    className="experience-modal-sec-seven__select-one"
                  >
                    {monthList}
                  </select>
                  <span className="date-separator">/</span>
                  <select
                    name="end.year"
                    ref={register}
                    className="experience-modal-sec-seven__select-two"
                  >
                    {years.map((year, index) => {
                      return (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </section>
            )}
          </div>

          <section className="experience-modal-sec-eight">
            <Checkbox
              checked={isCurrently}
              onChange={(e) => {
                setIsCurrently(e.target.checked);
              }}
            />
            <h3 className="experience-modal-sec-eight__head">
              Currently working
            </h3>
          </section>

          <Button
            htmlType="submit"
            className="experience-modal__button"
            shape="round"
          >
            SAVE
          </Button>
        </form>
      </Modal>
    </>
  );
}
