import React, { useState } from "react";
import { Button, Modal, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
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

const Experience = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, errors, control, watch } = useForm({
    defaultValues: {
      isWorkHome: false,
      isCurrently: false,
      start: {
        year: year
      }
    }
  });

  const onSubmit = data => {
    console.log(data);
    axios
      .post(`${apiURL}/resume/add_experience`, data, tokenHeader)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e.response);
      });
  };
  console.log(errors);

  //! --------------------------------- testing -------------------------------- */
  const myStartYear = watch("start.year");
  const isWorkFromHome = watch("isWorkHome");
  const isCurrentlyWorking = watch("isCurrently");
  console.log(isWorkFromHome);

  const endYear = Array.from(new Array(10), (val, index) => {
    return parseInt(myStartYear) + 10 - index - 1;
  });

  const monthList = month.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleExperienceButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="experience-block-one">
      <div className="experience-block-two">
        <img
          src={experienceIcon}
          alt=""
          className="experience-block-two-icon"
        ></img>
        <h2 className="experience-block-two-heading">Work Experience</h2>
      </div>
      <Button
        // type="primary"
        shape="round"
        className="experience-block-one-button"
        onClick={handleExperienceButton}
      >
        Add Work Experience
      </Button>
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
