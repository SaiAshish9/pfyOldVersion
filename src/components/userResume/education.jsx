import React, { useState } from "react";
import { Button, Modal, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import educationIcon from "./img/educationIcon.svg";

const year = new Date().getFullYear();
const startYear = Array.from(new Array(60), (val, index) => year - index);

const Education = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit, errors, control, watch } = useForm({
    defaultValues: {
      isCurrently: false,
      startYear: year
    }
  });

  const isCheckbox = watch("isCurrently");
  console.log(isCheckbox);

  const myStartYear = watch("startYear");

  const onSubmit = data => {
    console.log(data);
    axios
      .put(`${apiURL}/resume/addeducation`, data, tokenHeader)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEducationClick = () => {
    setIsModalVisible(true);
  };

  const endYear = Array.from(
    new Array(10),
    (val, index) => parseInt(myStartYear) + 9 - index
  );
  // console.log(endYear);

  return (
    <div className="education-block-one">
      <div className="education-block-two">
        <img
          src={educationIcon}
          alt=""
          className="education-block-two-icon"
        ></img>
        <h2 className="education-block-two-heading">Education</h2>
      </div>
      <Button
        // type="primary"
        shape="round"
        className="education-block-one-button"
        onClick={handleEducationClick}
      >
        Add Education
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
          <h2>Institute type</h2>
          <select name="educationType.typeNo" ref={register}>
            <option value={4}>Class 10th</option>
            <option value={5}>High School/ Junior College</option>
            <option value={0}>Graduation</option>
            <option value={1}>Post Graduation</option>
          </select>

          <section>
            <h2>Institute Name</h2>
            <input
              name="instituteName"
              ref={register}
              placeholder="please enter the institute name"
            />
          </section>

          <section>
            <h2>Board Name</h2>
            <h2>Course Name</h2>
            <input name="course" ref={register} placeholder="" />
          </section>

          <section>
            <h2>Marks</h2>
            <div>
              <input name="marks.val" ref={register} placeholder=""></input>
              <select name="marks.type" ref={register}>
                <option value="CGPA">CGPA</option>
                <option value="%">Percentage(%)</option>
              </select>
            </div>
          </section>

          <section>
            <h2>Start Year</h2>
            <select name="startYear" ref={register}>
              {startYear.map((year, index) => {
                return (
                  <option key={index} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </section>

          {!isCheckbox && (
            <section>
              <h2>end year</h2>
              <select name="endYear" ref={register}>
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
            Currently studying here
          </section>
          <Button htmlType="submit">Done</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Education;
