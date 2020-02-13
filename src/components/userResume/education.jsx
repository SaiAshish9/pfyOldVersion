import React, { useState } from "react";
import { Button, Modal, Checkbox, Tooltip, Icon } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import educationIcon from "./img/educationIcon.svg";
import { objectValidation } from "../validation/validation";

const year = new Date().getFullYear();
const startYear = Array.from(new Array(60), (val, index) => year - index);

const Education = ({ education, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit, errors, control, watch, setValue } = useForm({
    defaultValues: {
      isCurrently: false,
      startYear: year
    }
  });

  const isCheckbox = watch("isCurrently");
  const myStartYear = watch("startYear");

  const endYear = Array.from(
    new Array(10),
    (val, index) => parseInt(myStartYear) + 9 - index
  );

  const onSubmit = data => {
    console.log(data);
    axios
      .put(`${apiURL}/resume/addeducation`, data, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEducationClick = () => {
    setIsModalVisible(true);
  };

  const handleEdit = educationData => {
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

  const printEducation = educationData => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 40px"
        }}
      >
        <section>
          <h3>{!!educationStandard && educationStandard}</h3>
          <h2>{educationData.instituteName}</h2>
          <h4>{educationData.course}</h4>
          <h5>{educationData.marks.val}</h5>
          <h5>{educationData.marks.type}</h5>
          <h5>{educationData.startYear}</h5>
          <h5>{educationData.endYear}</h5>
        </section>
        <section>
          <Tooltip title="edit">
            <Icon
              type="edit"
              onClick={() => handleEdit(educationData)}
            ></Icon>
          </Tooltip>
        </section>
      </div>
    );
  };

  //! ---------------------------------- test ---------------------------------- */
  // console.log("this", Object.entries(education).length);
  // console.log("this", Object.entries(education).length > 0);
  // console.log(errors);
  // console.log(endYear);
  const handleAdd = () => {
    console.log("todo");
  };
  return (
    <div className="education-block-one">
      <div
        className="education-block-two"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          paddingBottom: "12px"
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            src={educationIcon}
            alt=""
            className="education-block-two-icon"
          ></img>
          <h2 className="education-block-two-heading">Education</h2>
        </section>
        <section>
          <Tooltip title="add">
            <Icon type="plus-circle" onClick={handleAdd} />
          </Tooltip>
        </section>
      </div>
      {!!education && objectValidation(education) ? (
        <div>
          {objectValidation(education.tenth) && (
            <div>{printEducation(education.tenth)}</div>
          )}
          {objectValidation(education.twelfth) && (
            <div>{printEducation(education.twelfth)}</div>
          )}
          {objectValidation(education.UG) && (
            <div>{printEducation(education.UG)}</div>
          )}
          {objectValidation(education.PG) && (
            <div>{printEducation(education.PG)}</div>
          )}
        </div>
      ) : (
        <Button
          // type="primary"
          shape="round"
          className="education-block-one-button"
          onClick={handleEducationClick}
        >
          Add Education
        </Button>
      )}

      <Modal
        title="Add Qualification"
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
            <option value={5}>Class 12th/ Junior College</option>
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
              // defaultValue={false}
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
