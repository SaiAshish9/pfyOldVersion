import React, { useState } from "react";
import { Button, Modal, Checkbox, Tooltip, Icon, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { arrayValidation } from "../validation/validation";
import axios from "axios";
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
  "Dec"
];

const year = new Date().getFullYear();
const startYear = Array.from(new Array(60), (val, index) => year - index);

const Experience = ({ workExperience, updateResume }) => {
  //#region
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  const { register, handleSubmit, errors, control, watch, setValue } = useForm({
    defaultValues: {
      isWorkHome: false,
      isCurrently: false,
      start: {
        year: year
      }
    }
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

  const onSubmit = data => {
    console.log(data);
    const myExpData = experienceData._id
      ? { ...data, _id: experienceData._id }
      : data;
    axios
      .post(`${apiURL}/resume/add_experience`, myExpData, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
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
    setIsModalVisible(true);
  };

  const handleEdit = selectedExp => {
    console.log(selectedExp);
    setExperienceData(selectedExp);
    setIsModalVisible(true);
    setValue("organisation", selectedExp.organisation);
    setValue("designation", selectedExp.designation);
    setValue("description", selectedExp.description);
    setValue("location", selectedExp.location);
    setValue("isWorkHome", selectedExp.isWorkHome);
    setValue("start.month", selectedExp.start.month);
    setValue("start.year", selectedExp.start.year);
    setValue("isCurrently", selectedExp.isCurrently);
  };

  const handleDelete = id => {
    axios
      .delete(`${apiURL}/resume/delete_experience/${id}`, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  //! --------------------------------- testing -------------------------------- */
  console.log(isWorkFromHome);
  console.log(errors);
  //#endregion

  return (
    <div className="experience-block-one">
      <div
        className="experience-block-two"
        style={{
          borderBottom: arrayValidation(workExperience) ? "1px solid" : "none"
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            src={experienceIcon}
            alt=""
            className="experience-block-two-icon"
          ></img>
          <h2 className="experience-block-two-heading">Work Experience</h2>
        </section>
        {arrayValidation(workExperience) && (
          <section>
            <Tooltip title="add">
              <Icon type="plus-circle" onClick={handleAdd} />
            </Tooltip>
          </section>
        )}
      </div>
      {arrayValidation(workExperience) ? (
        workExperience.map((myExp, index) => (
          <div key={index} className="experience-content-block ">
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
                  {(!isCurrentlyWorking && !!myExp.end && myExp.end.month) ||
                    "Present"}
                </h5>
                <h5 className="experience-content-sec-one-block-one__h5-four ">
                  {!isCurrentlyWorking && !!myExp.end && myExp.end.year}
                </h5>
              </div>
            </section>
            <section>
              <Tooltip title="edit">
                <Icon
                  type="edit"
                  onClick={() => handleEdit(myExp)}
                  style={{ marginRight: "32px" }}
                ></Icon>
              </Tooltip>
              <Tooltip title="delete">
                <Icon type="delete" onClick={() => handleDelete(myExp._id)} />
              </Tooltip>
            </section>
          </div>
        ))
      ) : (
        <Button
          // type="primary"
          shape="round"
          className="experience-block-one-button"
          onClick={handleAdd}
        >
          Add Work Experience
        </Button>
      )}
      <Modal
        title="Add Experience"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
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
            <Controller
              as={<Checkbox />}
              name="isWorkHome"
              control={control}
              // defaultValue={false}
            />
            <h3 className="experience-modal-sec-five__head">Work from home</h3>
          </section>

          <section className="experience-modal-sec-six">
            <h3 className="experience-modal-sec-six__head">Start From</h3>
            <div className="experience-modal-sec-six-block">
              <select
                name="start.month"
                ref={register}
                className="experience-modal-sec-six__select-one"
              >
                {monthList}
              </select>

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
              <h3 className="experience-modal-sec-seven__head">End On</h3>
              <div className="experience-modal-sec-seven-block">
                <select
                  name="end.Month"
                  ref={register}
                  className="experience-modal-sec-seven__select-one"
                >
                  {monthList}
                </select>
                <select
                  name="end.Year"
                  ref={register}
                  className="experience-modal-sec-seven__select-two"
                >
                  {endYear.reverse().map((year, index) => {
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
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Experience;
