import Carousel from "@brainhubeu/react-carousel";
import { Button, Icon, Modal, Tooltip, Input, message, Upload } from "antd";
import React, { useState, useEffect } from "react";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { arrayValidation, objectValidation } from "../validation/validation";
import taskIcon from "./taskIcon.svg";
import axios from "axios";

export default function GigTask({
  gigTask,
  isApply,
  isCompleted,
  isFailed,
  isRejected,
  isSelected,
  isShortlisted,
  selectedGigId
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [selectedTask, setSelectedTask] = useState();

  useEffect(() => {
    // console.log("taskData", taskData);
    console.log("taskData", taskData);
    console.log("taskData length", taskData.length);
    console.log("selectedTask", selectedTask);
  }, [selectedTask, taskData]);

  const description = !!selectedTask && selectedTask.description;
  const instruction =
    !!selectedTask &&
    arrayValidation(selectedTask.instruction) &&
    selectedTask.instruction.map((instruction, index) => (
      <div className="" key={index} style={{ display: "flex" }}>
        <span style={{ marginRight: "8px" }}>{`${index + 1}.`}</span>
        <p>{instruction}</p>
      </div>
    ));

  const proof =
    !!selectedTask &&
    arrayValidation(selectedTask.proof) &&
    selectedTask.proof.map((proof, index) => (
      <div className="" key={index}>
        {proof.type === 101 ? (
          <div className="">
            <h3>Submit Work</h3>
            <p>{proof.message}</p>
            <Input></Input>
          </div>
        ) : proof.type === 102 ? (
          <div className="">
            <h3> Submit Proof</h3>
            {/* <input type="file">Click to Upload</input> */}
          </div>
        ) : proof.type === 103 ? (
          <div className="">
            <h3>Give the link</h3>
            <Input></Input>
          </div>
        ) : proof.type === 104 ? (
          <h3>This is Lead</h3>
        ) : (
          <h3>This task does not contain any work</h3>
        )}
      </div>
    ));

  const checklist =
    !!selectedTask &&
    arrayValidation(selectedTask.checkList) &&
    selectedTask.checkList.map((checklist, index) => (
      <div className="" key={index} style={{ display: "flex" }}>
        <span style={{ marginRight: "8px" }}>{`${index + 1}.`}</span>
        <p>{checklist}</p>
      </div>
    ));

  //! ------------------------ Our Data for all the task ----------------------- */
  const dummyTaskData = [];
  useEffect(() => {
    arrayValidation(gigTask) &&
      gigTask.forEach(task => {
        axios
          .get(`${apiURL}/task/${selectedGigId}/${task._id}`, tokenHeader)
          .then(res => {
            dummyTaskData.push(res.data);
            setTaskData(dummyTaskData);
          })
          .catch(e => {
            console.log(`%c Task Data`, "color:red", e.res);
          });
      });
  }, [gigTask]);

  //! ---------------------------------- test ---------------------------------- */

  const handleStartTask = myGigTaskId => {
    setIsModalVisible(true);
    const myTask = taskData.find(task => task._id === myGigTaskId);
    setSelectedTask(myTask);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  //* ------------------ Start task button disabled if user not selected ------------------ */
  const isButtonDisable = isSelected || isCompleted ? false : true;

  const isGigTaskLength = arrayValidation(gigTask) && gigTask.length;
  let lengthOfSlider =
    isGigTaskLength === 1 ? 1 : isGigTaskLength === 2 ? 2 : 3;

  return (
    <div>
      <Carousel
        slidesPerPage={lengthOfSlider}
        arrowLeft={<Icon type="left" style={{ cursor: "pointer" }} />}
        arrowRight={<Icon type="right" style={{ cursor: "pointer" }} />}
        addArrowClickHandler
      >
        {arrayValidation(gigTask) &&
          gigTask.map((task, index) => (
            <div className="carousel-content-block" key={index}>
              <h4 className="carousel-content-block__h4">{task.title}</h4>
              <img
                src={taskIcon}
                className="carousel-content-block__img"
                alt=""
              ></img>
              <Tooltip
                title={
                  isSelected || isCompleted ? undefined : "You are not selected"
                }
              >
                <Button
                  shape="round"
                  onClick={() => handleStartTask(task._id)}
                  disabled={isButtonDisable}
                  className="carousel-content-block__button"
                >
                  Start Task
                </Button>
              </Tooltip>
            </div>
          ))}
      </Carousel>
      <Modal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {/* TODO */}
        <div>
          <h3>Task Description</h3>
          <p>{description}</p>
          <h3>Instructions</h3>
          {instruction}
          <div className="">{proof}</div>
          <div className="" style={{ marginTop: "18px" }}>
            <h3>Task Check List</h3>
            {checklist}
          </div>
        </div>
        <div className="" style={{ textAlign: "center" }}>
          <Button>Submit</Button>
        </div>
      </Modal>
    </div>
  );
}
