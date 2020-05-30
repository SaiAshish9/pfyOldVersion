import Carousel from "@brainhubeu/react-carousel";
import { Button, Icon, Input, message, Modal, Tooltip, Upload } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { arrayValidation } from "../validation/validation";
import taskIcon from "./taskIcon.svg";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

export default function GigTask({
  gigTask,
  isApply,
  isCompleted,
  isFailed,
  isRejected,
  isSelected,
  isShortlisted,
  selectedGigId,
  isMyCookie,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [selectedTask, setSelectedTask] = useState();

  useEffect(() => {
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

  const [userText, setUserText] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [userLink, setUserLink] = useState("");
  const [collectedData, setCollectedData] = useState({ submission: [] });
  useEffect(() => {
    console.log("selected file", collectedData);
  }, [collectedData]);
  //!-------------------------- handle all user input ------------------------- */
  const handleFile = (e) => {
    const myFile = e.target.files[0];
    const data = new FormData();
    data.append("file", myFile);
    setUploadImage(data);
  };

  const handleUserText = (e) => {
    const myUserText = e.target.value;
    setUserText(myUserText);
    console.log("myUserText", myUserText);
  };

  const handleUserLink = (e) => {
    const myUserLink = e.target.value;
    console.log("myUserText", myUserLink);
    setUserLink(myUserLink);
  };

  const handleTaskSubmit = () => {
    console.table(userLink, uploadImage, userText);
    const myCollectedData = [
      ...collectedData.submission,
      {
        type: 101,
        text: userText,
      },
      {
        type: 102,
        text: uploadImage,
      },
      {
        type: 103,
        text: userLink,
      },
    ];
    console.log("all submission", { submission: myCollectedData });
  };
  //! ---------------------------------- **** ---------------------------------- */
  const userTokenHeader = tokenHeader();
  const props = {
    name: "file",
    action: `${apiURL}/task/get_image_url_for_task_submission`,
    userTokenHeader,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const proof =
    !!selectedTask &&
    arrayValidation(selectedTask.proof) &&
    selectedTask.proof.map((proof, index) => (
      <div className="" key={index}>
        {proof.type === 101 ? (
          <div className="">
            <h3>Submit Work</h3>
            <p>{proof.message}</p>
            <Input onChange={handleUserText}></Input>
          </div>
        ) : proof.type === 102 ? (
          <div className="">
            <h3> Submit Proof</h3>

            <Upload {...props}>
              <Button>Click to Upload</Button>
            </Upload>
          </div>
        ) : proof.type === 103 ? (
          <div className="">
            <h3>Give the link</h3>
            <Input onChange={handleUserLink}></Input>
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
      gigTask.forEach((task) => {
        axios
          .get(`task/${selectedGigId}/${task._id}`, tokenHeader())
          .then((res) => {
            dummyTaskData.push(res.data);
            setTaskData(dummyTaskData);
          })
          .catch((e) => {
            console.log(`%c Task Data`, "color:red", e.res);
          });
      });
  }, [gigTask]);

  //! ---------------------------------- test ---------------------------------- */

  const handleStartTask = (myGigTaskId) => {
    setIsModalVisible(true);
    const myTask = taskData.find((task) => task._id === myGigTaskId);
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
    <>
      {lengthOfSlider === 1 || 2 ? (
        <div className="" style={{ display: "flex" }}>
          {arrayValidation(gigTask) &&
            gigTask.map((task, index) => (
              <div
                className="carousel-content-block"
                key={index}
                style={{ margin: "20px 8px 20px 6px", width: "290px" }}
              >
                <h4 className="carousel-content-block__h4">{task.title}</h4>
                <img
                  src={taskIcon}
                  className="carousel-content-block__img"
                  alt=""
                ></img>
                <Tooltip
                  title={
                    !isMyCookie
                      ? "please login first"
                      : isSelected || isCompleted
                      ? undefined
                      : "You are not selected"
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
        </div>
      ) : (
        <Carousel
          slidesPerPage={lengthOfSlider}
          arrowLeft={<LeftCircleFilled />}
          arrowRight={<RightCircleFilled />}
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
                    !isMyCookie
                      ? "please login first"
                      : isSelected || isCompleted
                      ? undefined
                      : "You are not selected"
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
      )}

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
          <Button onClick={handleTaskSubmit}>Submit</Button>
        </div>
      </Modal>
    </>
  );
}
