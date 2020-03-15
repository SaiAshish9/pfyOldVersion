import Carousel from "@brainhubeu/react-carousel";
import { Button, Icon, Modal } from "antd";
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

  useEffect(() => {
    arrayValidation(gigTask) &&
      gigTask.map(task => {
        return axios
          .get(`${apiURL}/task/${selectedGigId}/${task._id}`, tokenHeader)
          .then(res => {
            console.log(`%c Task Data`, "color:red", res.data);
            setTaskData([...taskData, res.data]);
          })
          .catch(e => {
            console.log(`%c Task Data`, "color:red", e.res);
          });
      });
  }, [gigTask]);

  useEffect(() => {
    console.log("selectedTask ", selectedTask);
  });

  const handleStartTask = myGigTaskId => {
    setIsModalVisible(true);
    const myTask = taskData.find(task => task._id === myGigTaskId);
    setSelectedTask(myTask);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Carousel
        slidesPerPage={arrayValidation(gigTask) && gigTask.length}
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
              <Button
                shape="round"
                onClick={() => handleStartTask(task._id)}
                className="carousel-content-block__button"
              >
                Start Task
              </Button>
            </div>
          ))}
      </Carousel>
      <Modal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <div>
          <h3>Task Description</h3>
          <p>{description}</p>
          <h3>Instructions</h3>
          {instruction}
          
        </div>
      </Modal>
    </div>
  );
}
