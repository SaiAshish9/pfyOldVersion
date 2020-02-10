import React, { useState } from "react";
import { Button, Modal, Checkbox } from "antd";
import axios from "axios";
import team from "./img/team.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { useForm, Controller } from "react-hook-form";

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

const Project = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit, errors, watch, control } = useForm({
    defaultValues: {
      isCurrently: false,
      start: {
        year: year
      }
    }
  });

  const isCurrentlyWorking = watch("isCurrently");

  const monthList = month.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));

  const onSubmit = data => {
    console.log(data);
    axios
      .post(`${apiURL}/resume/add_project`, data, tokenHeader)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  const myStartYear = watch("start.year");
  console.log(errors);
  const endYear = Array.from(
    new Array(10),
    (val, index) => parseInt(myStartYear) + 9 - index
  );

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleProjectButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="project-block-one">
      <div className="project-block-two">
        <img src={team} alt="" className="project-block-two-icon"></img>
        <h2 className="project-block-two-heading">Projects</h2>
      </div>
      <Button
        // type="primary"
        shape="round"
        className="project-block-one-button"
        onClick={handleProjectButton}
      >
        Add Project
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <section>
            <h2>Title</h2>
            <input name="title" ref={register}></input>
          </section>

          <section>
            <h2>Description</h2>
            <textarea name="description" ref={register} />
          </section>

          <section>
            <h2>Project Link</h2>
            <input name="link" ref={register} />
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
              <select name="end.month" ref={register}>
                {monthList}
              </select>
              <select name="end.year" ref={register}>
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
            Currently working on this project
          </section>
          <Button htmlType="submit">Done</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Project;
