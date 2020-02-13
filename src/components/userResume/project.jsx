import React, { useState, useEffect } from "react";
import { Button, Modal, Checkbox, Tooltip, Icon } from "antd";
import axios from "axios";
import team from "./img/team.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { useForm, Controller } from "react-hook-form";
import { arrayValidation } from "../validation/validation";

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

const Project = ({ project, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projectData, setProjectData] = useState(false);

  const { register, handleSubmit, errors, watch, control, setValue } = useForm({
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

  const myStartYear = watch("start.year");
  console.log(errors);
  const endYear = Array.from(
    new Array(10),
    (val, index) => parseInt(myStartYear) + 9 - index
  );

  useEffect(() => {
    console.log("check", projectData);
  }, [projectData]);

  const onSubmit = data => {
    console.log("check", data);
    console.log("check", projectData);
    const myData = projectData ? { ...data, _id: projectData._id } : data;
    console.log("check", myData);
    axios
      .post(`${apiURL}/resume/add_project`, myData, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setProjectData(false);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setProjectData(false);
  };

  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const handleEdit = selectedProject => {
    setProjectData(selectedProject);
    setIsModalVisible(true);
    setValue("title", selectedProject.title);
    setValue("description", selectedProject.description);
    setValue("link", selectedProject.link);
    setValue("start.month", selectedProject.start.month);
    setValue("start.year", selectedProject.start.year);
    setValue("end.month", selectedProject.end.month);
    setValue("end.year", selectedProject.end.year);
    setValue("isCurrently", selectedProject.isCurrently);
  };

  const handleDelete = id => {
    axios
      .delete(`${apiURL}/resume/delete_project/${id}`, tokenHeader)
      .then(res => {
        console.log("project data add successfully", res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  return (
    <div className="project-block-one">
      <div
        className="project-block-two"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          paddingBottom: "12px"
        }}
      >
        <section style={{ display: "flex" }}>
          <img src={team} alt="" className="project-block-two-icon"></img>
          <h2 className="project-block-two-heading">Projects</h2>
        </section>
        <section>
          <Tooltip title="add">
            <Icon type="plus-circle" onClick={handleAdd} />
          </Tooltip>
        </section>
      </div>
      {arrayValidation(project) ? (
        project.map((myProject, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 40px"
            }}
          >
            <div>
              <h3>{myProject.title}</h3>
              <p>{myProject.description}</p>
              <h4>{myProject.link}</h4>
              <section>
                <h5>{myProject.start.month}</h5>
                <h5>{myProject.start.year}</h5>
              </section>
              <section>
                <h5>{myProject.end.month}</h5>
                <h5>{myProject.end.year}</h5>
              </section>
            </div>
            <section>
              <Tooltip title="edit">
                <Icon
                  type="edit"
                  onClick={() => handleEdit(myProject)}
                  style={{ marginRight: "32px" }}
                ></Icon>
              </Tooltip>
              <Tooltip title="delete">
                <Icon
                  type="delete"
                  onClick={() => handleDelete(myProject._id)}
                />
              </Tooltip>
            </section>
          </div>
        ))
      ) : (
        <Button
          // type="primary"
          shape="round"
          className="project-block-one-button"
          onClick={handleAdd}
        >
          Add Project
        </Button>
      )}

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
