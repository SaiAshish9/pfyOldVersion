import React, { useState } from "react";
import { Button, Modal, Checkbox, Tooltip, Icon } from "antd";
import { useForm, Controller } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { arrayValidation } from "../validation/validation";
import axios from "axios";
import experienceIcon from "./img/experienceIcon.svg";

const month = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
];

const year = new Date().getFullYear();
const startYear = Array.from(new Array(60), (val, index) => year - index);

const Experience = ({ workExperience, updateResume }) => {
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

  return (
    <div className="experience-block-one">
      <div
        className="experience-block-two"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          paddingBottom: "12px"
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
        <section>
          <Tooltip title="add">
            <Icon type="plus-circle" onClick={handleAdd} />
          </Tooltip>
        </section>
      </div>
      {arrayValidation(workExperience) ? (
        workExperience.map((myExp, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 40px"
            }}
          >
            <section>
              <h2>{myExp.organisation}</h2>
              <h3>{myExp.designation}</h3>
              <p>{myExp.description}</p>
              <h4>{myExp.location}</h4>
              <h5>{myExp.start.month}</h5>
              <h5>{myExp.start.year}</h5>
              <h5>end on</h5>
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
        >
          <section>
            <h2>Organization</h2>
            <input name="organisation" ref={register}></input>
          </section>

          <section>
            <h2>Profile</h2>
            <input name="designation" ref={register} />
          </section>

          <section>
            <h2>Description</h2>
            <textarea name="description" ref={register} />
          </section>

          {!isWorkFromHome && (
            <section>
              <h2>Location</h2>
              <input name="location" ref={register} />
            </section>
          )}

          <section>
            <Controller
              as={<Checkbox />}
              name="isWorkHome"
              control={control}
              // defaultValue={false}
            />
            Work from home
          </section>

          <section>
            <h2>Start From</h2>
            <select name="start.month" ref={register}>
              {monthList}
            </select>

            <select name="start.year" ref={register}>
              {startYear.map((year, index) => {
                return (
                  <option key={index} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </section>

          {!isCurrentlyWorking && (
            <section>
              <h2>End On</h2>
              <select name="end.Month" ref={register}>
                {monthList}
              </select>
              <select name="end.Year" ref={register}>
                {endYear.reverse().map((year, index) => {
                  return (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </section>
          )}

          <section>
            <Controller
              as={<Checkbox />}
              name="isCurrently"
              control={control}
            />
            Currently working
          </section>

          <Button htmlType="submit">Done</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Experience;
