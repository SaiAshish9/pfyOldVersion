import { Button, Checkbox, Icon, Modal, Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { objectValidation } from "../validation/validation";
import educationIcon from "./img/headingImg/educationIcon.svg";
import { EditOutlined } from "@ant-design/icons";

import addIcon from "./img/addIcon.svg";
import { tokenHeader } from "../../constant/tokenHeader";

const year = new Date().getFullYear();
const startYear = Array.from(new Array(60), (val, index) => year - index);

export default function Education({ education, updateResume }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit, errors, control, watch, setValue } = useForm({
    defaultValues: {
      isCurrently: false,
      startYear: year,
      educationType: {
        typeNo: "4",
      },
      marks: {
        type: "CGPA",
      },
    },
  });

  const isCheckbox = watch("isCurrently");
  const myStartYear = watch("startYear");
  const standardSelect = watch("educationType.typeNo");
  console.log("standardSelect", standardSelect);

  const allEndYear = Array.from(
    new Array(10),
    (val, index) => parseInt(myStartYear) + 9 - index
  );

  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(`resume/addeducation`, data, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddEducation = () => {
    setIsModalVisible(true);
  };

  const handleEdit = (educationData) => {
    // setSelectedEducation(educationData);
    console.log(educationData);
    setValue("educationType.typeNo", educationData.educationType.typeNo);
    setValue("instituteName", educationData.instituteName);
    setValue("course", educationData.course);
    setValue("marks.val", educationData.marks.val);
    setValue("marks.type", educationData.marks.type);
    setValue("startYear", educationData.startYear);
    setValue("endYear", educationData.endYear);
    setValue("isCurrently", educationData.isCurrently);

    setIsModalVisible(true);
  };

  // const handleDelete = educationData => {
  //   console.log("myEducation", educationData);
  // };

  const printEducation = (educationData) => {
    const educationStandard =
      educationData.educationType.typeNo === 0
        ? "Graduation"
        : educationData.educationType.typeNo === 1
        ? "Post Graduation"
        : educationData.educationType.typeNo === 4
        ? "Class 10th"
        : educationData.educationType.typeNo === 5
        ? "Class 12th"
        : false;
    return (
      <div className="education-content-block">
        <section className="education-content-sec-one">
          <h1 className="education-content-sec-one__h1">
            {!!educationStandard && educationStandard}
          </h1>
          <h2 className="education-content-sec-one__h2">
            {educationData.instituteName}
          </h2>
          <h4 className="education-content-sec-one__h4">
            {educationData.course}
          </h4>
          <div className="education-content-sec-one-block-one">
            <h4 className="education-content-sec-one-block-one__h4-one">
              {educationData.marks.val}
            </h4>

            <h4 className="education-content-sec-one-block-one__h4-two">
              {educationData.marks.type}
            </h4>
          </div>
          <div className="education-content-sec-one-block-two">
            <h5 className="education-content-sec-one-block-two__h5-one">
              {educationData.startYear}-
            </h5>
            <h5 className="education-content-sec-one-block-two__h5-two">
              {educationData.endYear}
            </h5>
          </div>
        </section>
        <section className="education-edit-delete-icon" style={{}}>
          <Tooltip title="edit">
            {/* <Icon type="edit" onClick={() => handleEdit(educationData)}></Icon> */}
            <EditOutlined onClick={() => handleEdit(educationData)} />
          </Tooltip>
        </section>
      </div>
    );
  };

  //! ---------------------------------- test ---------------------------------- */

  return (
    <div className="education-block-one">
      <div className="education-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img
            src={educationIcon}
            alt=""
            className="education-block-two-icon"
          ></img>
          <div className="education-block-heading-content">
            <h2 className="education-block-two-heading">Education</h2>
            {objectValidation(education) ? (
              <div className="education-content-block-three">
                {objectValidation(education.tenth) &&
                  printEducation(education.tenth)}
                {objectValidation(education.twelfth) &&
                  printEducation(education.twelfth)}
                {objectValidation(education.UG) && printEducation(education.UG)}
                {objectValidation(education.PG) && printEducation(education.PG)}
              </div>
            ) : null}
          </div>
        </section>
        <section className="education-block-one-button">
          <Tooltip title="add">
            <img
              src={addIcon}
              alt=""
              onClick={handleAddEducation}
              className=""
            />
          </Tooltip>
        </section>
      </div>

      <Modal
        title="Add Qualification"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={680}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="education-modal__form"
        >
          <section className="education-modal-sec-one">
            <h2 className="input-label">Institute Type</h2>
            <select
              name="educationType.typeNo"
              ref={register}
              className="education-modal-sec-one__select"
            >
              <option value={4}>Class 10th</option>
              <option value={5}>Class 12th/ Junior College</option>
              <option value={0}>Graduation</option>
              <option value={1}>Post Graduation</option>
            </select>
          </section>

          <section className="education-modal-sec-two">
            <h2 className="input-label">Institute Name</h2>
            <input
              name="instituteName"
              ref={register}
              placeholder="please enter the institute name"
              className="education-modal-sec-two__input"
            />
          </section>

          <section className="education-modal-sec-three">
            {standardSelect === "0" || standardSelect === "1" ? (
              <h2 className="input-label ">Course Name</h2>
            ) : (
              <h2 className="input-label ">Board Name</h2>
            )}
            <input
              name="course"
              ref={register}
              placeholder=""
              className="education-modal-sec-three__input"
            />
          </section>

          <section className="education-modal-sec-four">
            <h2 className="input-label ">Marks</h2>
            <div className="education-modal-sec-four-block">
              <input
                name="marks.val"
                ref={register}
                placeholder=""
                className="education-modal-sec-four-block__input"
              ></input>
              <select
                name="marks.type"
                ref={register}
                className="education-modal-sec-four-block__select"
              >
                <option value="CGPA">CGPA</option>
                <option value="%">Percentage(%)</option>
              </select>
            </div>
          </section>

          <div className="education-modal-block">
            <section className="education-modal-block-sec-one">
              <h2 className="input-label">Start Year</h2>
              <select
                name="startYear"
                ref={register}
                className="education-modal-block-sec-one__select-one"
              >
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
              <section className="education-modal-block-sec-two">
                <h2 className="input-label">End year</h2>
                <select
                  name="endYear"
                  ref={register}
                  className="education-modal-block-sec-two__select-one"
                >
                  {allEndYear.reverse().map((year, index) => {
                    return (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </section>
            )}
          </div>

          <section className="education-modal-sec-five">
            <Controller
              as={<Checkbox />}
              name="isCurrently"
              control={control}
              className="education-modal-sec-five__checkbox"
              // defaultValue={false}
            />
            <h2 className="education-modal-sec-five__head">
              Currently studying here
            </h2>
          </section>

          <Button
            htmlType="submit"
            className="education-modal__button"
            shape="round"
          >
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
}
