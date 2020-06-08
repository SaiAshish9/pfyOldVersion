import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
/* ---------------------------------- ***** --------------------------------- */
import { arrayValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import team from "./img/headingImg/projectIcon.svg";

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

const Project = ({ project, updateResume }) => {
  //#region
  console.log("project", project);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [projectData, setProjectData] = useState(false);

  const { register, handleSubmit, watch, control, reset } = useForm({
    defaultValues: {
      isCurrently: false,
      start: {
        year: year,
      },
    },
  });

  const monthList = month.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));

  const myStartYear = watch("start.year");

  const endYear = Array.from(
    new Array(10),
    (val, index) => parseInt(myStartYear) + 9 - index
  );

  useEffect(() => {
    console.log("check", projectData);
  }, [projectData]);

  const onSubmit = (data) => {
    console.log("check", data);
    console.log("check", projectData);
    const myData = projectData
      ? { ...data, _id: projectData._id, isCurrently: isCurrentlyWorking }
      : { ...data, isCurrently: isCurrentlyWorking };
    axios
      .post(`resume/add_project`, myData, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
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
    setIsCurrentlyWorking(false);
    reset({
      title: "",
      description: "",
      link: "",
      start: {
        month: "",
        year: "",
      },
      end: {
        month: "",
        year: "",
      },
    });
    setIsModalVisible(true);
  };

  const handleEdit = (selectedProject) => {
    setProjectData(selectedProject);
    setIsCurrentlyWorking(selectedProject.isCurrently);
    reset({
      title: selectedProject.title,
      description: selectedProject.description,
      link: selectedProject.link,
      start: {
        month: selectedProject.start.month,
        year: selectedProject.start.year,
      },
      end: {
        month: selectedProject.end ? selectedProject.end.month : "",
        year: selectedProject.end ? selectedProject.end.year : "",
      },
    });
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`resume/delete_project/${id}`)
      .then((res) => {
        console.log("project data add successfully", res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  //#endregion
  return (
    <div className="project-block-one">
      <div className="project-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img src={team} alt="" className="project-block-two-icon"></img>
          <div className="project-block-heading-content">
            <h2 className="project-block-two-heading">Projects</h2>
            {arrayValidation(project) &&
              project.map((myProject, index) => (
                <div key={index} className="project-content-block ">
                  <section className="project-content-sec-one ">
                    <h1 className="project-content-sec-one__h1 ">
                      {myProject.title}
                    </h1>
                    <p className="project-content-sec-one__p">
                      {myProject.description}
                    </p>
                    <a
                      className="project-content-sec-one__a "
                      href={myProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {myProject.link}
                    </a>
                    {console.log("myProject", myProject)}
                    <div className="project-content-sec-one-block-one ">
                      {myProject.start.month && (
                        <h5 className="project-content-sec-one-block-one__h5-one ">
                          {myProject.start.month}
                        </h5>
                      )}

                      {myProject.start.year && (
                        <h5 className="project-content-sec-one-block-one__h5-two ">
                          {myProject.start.year}
                        </h5>
                      )}
                      {!!myProject.end && (
                        <h5 className="project-content-sec-one-block-one__h5-three ">
                          - {myProject.end.month}
                        </h5>
                      )}
                      {!!myProject.end && (
                        <h5 className="project-content-sec-one-block-one__h5-four ">
                          {myProject.end.year}
                        </h5>
                      )}
                    </div>
                  </section>
                  <section className="project-edit-delete-icon">
                    <Tooltip title="edit">
                      <img
                        src={editIcon}
                        alt=""
                        className=""
                        onClick={() => handleEdit(myProject)}
                        style={{ marginRight: "32px" }}
                      />
                    </Tooltip>
                    <Tooltip title="delete">
                      <DeleteOutlined
                        onClick={() => handleDelete(myProject._id)}
                      />
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
            className="project-block-one-button"
          />
        </Tooltip>
      </div>

      <Modal
        title="Add Project"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
          className="project-modal__form"
        >
          <section className="project-modal-sec-one">
            <h2 className="project-modal-sec-one__head">Title</h2>
            <input
              name="title"
              ref={register}
              className="project-modal-sec-one__input"
            ></input>
          </section>

          <section className="project-modal-sec-two">
            <h2 className="project-modal-sec-two__head">Description</h2>
            <textarea
              name="description"
              ref={register}
              className="project-modal-sec-two__input"
            />
          </section>

          <section className="project-modal-sec-three">
            <h2 className="project-modal-sec-three__head">Project Link</h2>
            <input
              name="link"
              ref={register}
              className="project-modal-sec-three__input"
            />
          </section>
          <div className="startOrEndYear-block">
            <section className="project-modal-sec-four">
              <h2 className="project-modal-sec-four__head">From</h2>
              <div className="project-modal-sec-four-block">
                <select
                  name="start.month"
                  ref={register}
                  className="project-modal-sec-four__select-one"
                >
                  {monthList}
                </select>
                <span className="date-separator">/</span>
                <select
                  name="start.year"
                  ref={register}
                  className="project-modal-sec-four__select-two"
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
              <section className="project-modal-sec-five ">
                <h2 className="project-modal-sec-five__head ">To</h2>
                <div className="project-modal-sec-five-block ">
                  <select
                    name="end.month"
                    ref={register}
                    className="project-modal-sec-five__select-one "
                  >
                    {monthList}
                  </select>
                  <span className="date-separator">/</span>
                  <select
                    name="end.year"
                    ref={register}
                    className="project-modal-sec-five__select-two "
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
          </div>

          <section className="project-modal-sec-six ">
            <Checkbox
              className="project-modal-sec-six__checkbox"
              onChange={(e) => {
                setIsCurrentlyWorking(e.target.checked);
              }}
            ></Checkbox>

            <h3 className="project-modal-sec-six__head ">
              Currently working on this project
            </h3>
          </section>
          <Button
            htmlType="submit"
            className="project-modal__button"
            shape="round"
          >
            SAVE
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Project;
