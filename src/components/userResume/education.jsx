import { Button, Checkbox, Modal, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import { objectValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import educationIcon from "./img/headingImg/educationIcon.svg";
import DataLayout from "../common/profileOrResumeLayout";

export default function Education({ education, updateResume }) {
  //#region
  const year = new Date().getFullYear();
  const years = Array.from(new Array(60), (val, index) => year - index);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentlyStudying, setCurrentlyStudying] = useState(false);

  const customDefaultValue = () => {
    return {
      educationType: { typeNo: "" },
      instituteName: "",
      course: "",
      marks: { val: "", type: "" },
      startYear: "",
      endYear: "",
    };
  };

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: customDefaultValue(),
  });

  const standardSelect = watch("educationType.typeNo");

  const onSubmit = (data) => {
    const myData = { ...data, isCurrently: currentlyStudying };
    console.log("dataData", myData);
    axios
      .put(`resume/addeducation`, myData, tokenHeader())
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

  const handleAdd = () => {
    setCurrentlyStudying(false);
    reset({
      educationType: { typeNo: "" },
      instituteName: "",
      course: "",
      marks: { val: "", type: "" },
      startYear: "",
      endYear: "",
    });
    setIsModalVisible(true);
  };

  const handleEdit = (educationData) => {
    setCurrentlyStudying(educationData.isCurrently);
    reset({
      educationType: { typeNo: educationData.educationType.typeNo },
      instituteName: educationData.instituteName,
      course: educationData.course,
      marks: { val: educationData.marks.val, type: educationData.marks.type },
      startYear: educationData.startYear,
      endYear: educationData.endYear,
    });
    setIsModalVisible(true);
  };

  const handleDelete = (educationData) => {};

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
    //#endregion
    return (
      <div className="user-data-content-main-block">
        <div className="user-data-content-block">
          <h1 className="user-data-h1">
            {!!educationStandard && educationStandard}
          </h1>
          <h2 className="user-data-h2">{educationData.instituteName}</h2>
          <h4 className="user-data-h2">{educationData.course}</h4>
          <div className="">
            <span className="user-data-h2">{educationData.marks.val}</span>
            <span className="user-data-h2"> {educationData.marks.type}</span>
          </div>
          <div className="" id="user-data-last-el">
            <span className="user-data-h2">{educationData.startYear}</span>
            <span className="user-data-h2"> - {educationData.endYear}</span>
          </div>
        </div>

        <div className="user-data-content-icon-block">
          <img
            src={editIcon}
            alt=""
            className="user-data-content-icon"
            onClick={() => handleEdit(educationData)}
          />
          {/* <DeleteOutlined
              onClick={() => handleDelete(index)}
              className="user-data-content-icon"
            /> */}
        </div>
      </div>
    );
  };

  const content = (
    <div className="all-user-data-content">
      {objectValidation(education) && (
        <>
          {objectValidation(education.tenth) && printEducation(education.tenth)}
          {objectValidation(education.twelfth) &&
            printEducation(education.twelfth)}
          {objectValidation(education.UG) && printEducation(education.UG)}
          {objectValidation(education.PG) && printEducation(education.PG)}
        </>
      )}
    </div>
  );
  //! ---------------------------------- test ---------------------------------- */
  return (
    <>
      <DataLayout
        img={<img src={educationIcon} alt="" className="user-data-img" />}
        head="Education"
        icon={
          <img
            src={addIcon}
            alt=""
            onClick={handleAdd}
            className="user-data-icon"
          />
        }
        content={content}
        isData={objectValidation(education)}
      />
      <Modal
        title="Add Qualification"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
        className="education-modal"
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
                {years.map((year, index) => {
                  return (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </section>

            {!currentlyStudying && (
              <section className="education-modal-block-sec-two">
                <h2 className="input-label">End year</h2>
                <select
                  name="endYear"
                  ref={register}
                  className="education-modal-block-sec-two__select-one"
                >
                  {years.map((year, index) => {
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
            <Checkbox
              checked={currentlyStudying}
              onChange={(e) => {
                setCurrentlyStudying(e.target.checked);
              }}
              className="education-modal-sec-five__checkbox"
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
            SAVE
          </Button>
        </form>
      </Modal>
    </>
  );
}
