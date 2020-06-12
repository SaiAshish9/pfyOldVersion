import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
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

const year = new Date().getFullYear();
const startYear = Array.from(new Array(60), (val, index) => year - index);

const Experience = ({ workExperience, updateResume }) => {
  //#region
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  const { register, handleSubmit, errors, control, watch, reset } = useForm({
    defaultValues: {
      isWorkHome: false,
      isCurrently: false,
      start: {
        month: "",
        year: "",
      },
      end: {
        month: "",
        year: "",
      },
    },
  });

  const myStartYear = watch("start.year");
  const isWorkFromHome = watch("isWorkHome");
  const isCurrentlyWorking = watch("isCurrently");

  const endYear = Array.from(new Array(10), (val, index) => {
    return parseInt(myStartYear) + 10 - index - 1;
  });

  const monthList = month.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));

  const onSubmit = (data) => {
    console.log(data);
    const myExpData = experienceData._id
      ? { ...data, _id: experienceData._id }
      : data;
    axios
      .post(`resume/add_experience`, myExpData, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setExperienceData(false);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setExperienceData(false);
  };

  const handleAdd = () => {
    reset({
      organisation: "",
      designation: "",
      description: "",
      location: "",
      isWorkHome: false,
      start: {
        month: "",
        year: "",
      },
      end: {
        month: "",
        year: "",
      },
      isCurrently: false,
    });
    setIsModalVisible(true);
  };

  const handleEdit = (selectedExp) => {
    console.log(selectedExp);

    setExperienceData("selectedExp", selectedExp);
    reset({
      organisation: selectedExp.organisation,
      designation: selectedExp.designation,
      description: selectedExp.description,
      location: selectedExp.location,
      isWorkHome: selectedExp.isWorkHome,
      start: {
        month: selectedExp.start.month,
        year: selectedExp.start.year,
      },
      end: {
        month: !!selectedExp.end && selectedExp.end.month,
        year: !!selectedExp.end && selectedExp.end.year,
      },
      isCurrently: selectedExp.isCurrently,
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

  //! --------------------------------- testing -------------------------------- */
  console.log(isWorkFromHome);
  console.log(errors);
  //#endregion

  return (
    <div className="experience-block-one">
      <div className="experience-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img
            src={experienceIcon}
            alt=""
            className="experience-block-two-icon"
          ></img>
          <div className="experience-block-heading-content">
            <h2 className="experience-block-two-heading">Work Experience</h2>
            {arrayValidation(workExperience) &&
              workExperience.map((myExp, index) => (
                <div key={index} className="experience-content-block">
                  <section className="experience-content-sec-one ">
                    <h1 className="experience-content-sec-one__h1 ">
                      {myExp.organisation}
                    </h1>
                    <h2 className="experience-content-sec-one__h2 ">
                      {myExp.designation}
                    </h2>
                    <p className="experience-content-sec-one__p ">
                      {myExp.description}
                    </p>
                    <h4 className="experience-content-sec-one__h4 ">
                      {myExp.location}
                    </h4>
                    <div className="experience-content-sec-one-block-one ">
                      <h5 className="experience-content-sec-one-block-one__h5-one ">
                        {myExp.start.month}
                      </h5>
                      <h5 className="experience-content-sec-one-block-one__h5-two ">
                        {myExp.start.year}
                      </h5>
                      <h5 className="experience-content-sec-one-block-one__h5-three ">
                        {(!!myExp.end && myExp.end.month) || "Present"}
                      </h5>
                      <h5 className="experience-content-sec-one-block-one__h5-four ">
                        {!!myExp.end && myExp.end.year}
                      </h5>
                    </div>
                  </section>
                  <section className="experience-edit-delete-icon">
                    <Tooltip title="edit">
                      <img
                        src={editIcon}
                        onClick={() => handleEdit(myExp)}
                        style={{ marginRight: "32px" }}
                        alt=""
                        className=""
                      />
                    </Tooltip>
                    <Tooltip title="delete">
                      <DeleteOutlined onClick={() => handleDelete(myExp._id)} />
                    </Tooltip>
                  </section>
                </div>
              ))}
          </div>
        </section>

        <Tooltip title="add">
          <img
            src={addIcon}
            alt=""
            onClick={handleAdd}
            className="experience-block-one-button"
          />
        </Tooltip>
      </div>

      <Modal
        title="Add Experience"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
        className="experience-modal"
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

          {!isWorkFromHome && (
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
            <Controller as={<Checkbox />} name="isWorkHome" control={control} />
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
                  {startYear.map((year, index) => {
                    return (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </section>

            {!isCurrentlyWorking && (
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
                    {endYear.map((year, index) => {
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
            <Controller
              as={<Checkbox />}
              name="isCurrently"
              control={control}
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
    </div>
  );
};

export default Experience;
