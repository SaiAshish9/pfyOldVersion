import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import DataLayout from "../common/profileOrResumeLayout";
import { arrayValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import projectIcon from "./img/headingImg/projectIcon.svg";

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

const Project = ({ project, updateResume }) => {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(60), (val, index) => year - index);
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

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(project) &&
        project.map((myProject, index) => (
          <div key={index} className="user-data-content-main-block">
            <div className="user-data-content-block">
              <h1 className="user-data-h1">{myProject.title}</h1>
              <p className="user-data-h2">{myProject.description}</p>
              <a
                className="user-data-link"
                href={myProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {myProject.link}
              </a>
              <div id="user-data-last-el">
                {myProject.start.month && (
                  <span className="user-data-h2">{myProject.start.month}</span>
                )}
                {myProject.start.year && (
                  <span className="user-data-h2"> {myProject.start.year}</span>
                )}
                {!!myProject.end && (
                  <span className="user-data-h2"> - {myProject.end.month}</span>
                )}
                {!!myProject.end && (
                  <span className="user-data-h2"> {myProject.end.year}</span>
                )}
              </div>
            </div>
            <div className="user-data-content-icon-block">
              <img
                src={editIcon}
                onClick={() => handleEdit(myProject)}
                alt=""
                className="user-data-content-icon"
              />
              <DeleteOutlined
                onClick={() => handleDelete(myProject._id)}
                className="user-data-content-icon"
              />
            </div>
          </div>
        ))}
    </div>
  );
  //#endregion

  return (
    <>
      <DataLayout
        img={<img src={projectIcon} alt="" className="user-data-img" />}
        head="Projects"
        icon={
          <img
            src={addIcon}
            alt=""
            onClick={handleAdd}
            className="user-data-icon"
          />
        }
        content={content}
        isData={arrayValidation(project)}
      />
      <Modal
        title="Add Project"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
        className="project-modal"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="project-modal__form">
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
                  {years.map((year, index) => {
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
                    {years.map((year, index) => {
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
              checked={isCurrentlyWorking}
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
    </>
  );
};

export default Project;
