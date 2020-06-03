import Carousel from "@brainhubeu/react-carousel";
import { Button, Icon, Input, message, Modal, Tooltip, Upload, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { arrayValidation } from "../validation/validation";
import taskIcon from "./taskIcon.svg";
import { RightOutlined,LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

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
  const [form, setForm] = useState([]);
  const [loader,setLoader] = useState(false);
  const proofTypes = {
    101: "text",
    102: "image",
    103: "link",
  };

  useEffect(() => {
    console.log("taskData", taskData);
    console.log("taskData length", taskData.length);
    console.log("selectedTask", selectedTask);
  }, [selectedTask, taskData]);

  const description = () => !!selectedTask && selectedTask.description;
  const taskId = () => !!selectedTask && selectedTask._id;

  const instruction = () =>
    !!selectedTask &&
    arrayValidation(selectedTask.instruction) &&
    selectedTask.instruction.map((instruction, index) => (
      <div className="" key={index} style={{ display: "flex" }}>
        <span style={{ marginRight: "8px" }}>{`${index + 1}.`}</span>
        <p>{instruction}</p>
      </div>
    ));

  //!-------------------------- handle all user input ------------------------- */
  const handleFile = (info, index, type) => {
    console.log(info.file, info.fileList);
    handleFormChange(index, type, info.file.originFileObj);
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleFormChange = (index, type, value) => {
    console.log(form);
    setForm((form) => {
      form[index][proofTypes[type]] = value;
      return form;
    });
  };
  const handleTaskSubmit = async () => {
    try{
      setLoader(true);
    
    const submission = await Promise.all(
      form.map(async (val) => {
        if (val.type === 102) {
          const response = await axios.get(
            `task/get_image_url_for_task_submission?fileType=${val.image.type}`,
            tokenHeader()
          );
          const data = response.data;
          await axios.put(data.url, val.image);
          val.image = data.key;
          return val;
        }
        return val;
      })
    
    );
    console.log("all submission", submission);
    await axios.post(
      `task/submit/${selectedGigId}/${taskId()}`,
      { submission },
      tokenHeader()
    );
    setLoader(false)
    setIsModalVisible(false);
  }catch(err){
      setLoader(false)
  }
  };
  //! ---------------------------------- **** ---------------------------------- */

  const props = {
    name: "file",
    action: null,
    multiple: false,
  };

  const proof = () =>
    !!selectedTask &&
    arrayValidation(selectedTask.proof) &&
    selectedTask.proof.map((proof, index) => (
      <div className="" key={index}>
        {proof.type === 101 ? (
          <div className="task__input">
            <h3>{proof.message}</h3>
            <Input
              onChange={(e) =>
                handleFormChange(index, proof.type, e.target.value)
              }
              key={proof._id}
              value={form[index] && form[index][proof.type]}
            ></Input>
          </div>
        ) : proof.type === 102 ? (
          <div className="task__input">
            <Upload
              {...props}
              onChange={(info) => handleFile(info, index, proof.type)}
            >
              <h3>Upload Picture</h3>
              <Button className="task__upload-btn">Click to Upload</Button>
            </Upload>
          </div>
        ) : proof.type === 103 ? (
          <div className="task__input">
            <h3>Give the link</h3>
            <Input
              onChange={(e) =>
                handleFormChange(index, proof.type, e.target.value)
              }
              value={form[index] && form[index][proof.type]}
              key={proof._id}
            ></Input>
          </div>
        ) : proof.type === 104 ? (
          <h3>This is Lead</h3>
        ) : (
          <h3>This task does not contain any work</h3>
        )}
      </div>
    ));

  const checklist = () =>
    !!selectedTask &&
    arrayValidation(selectedTask.checkList) &&
    selectedTask.checkList.map((checklist, index) => (
      <div className="" key={index} style={{ display: "flex" }}>
        <span style={{ marginRight: "8px" }}>{`${index + 1}.`}</span>
        <p>{checklist}</p>
      </div>
    ));

  //! ------------------------ Our Data for all the task ----------------------- */

  useEffect(() => {
    if (selectedTask) {
      console.log(JSON.stringify(selectedTask.proof));
      const formFeilds = selectedTask.proof.map((proof, index) => ({
        type: proof.type,
        [proofTypes[proof.type]]: null,
      }));
      console.log(formFeilds);
      setForm(formFeilds);
    }
  }, [selectedTask]);
  const fetchTasks = async () => {
    if(!arrayValidation(gigTask)) return ;
    await Promise.all(gigTask.map(async (task) => {
      const response = await axios.get(`task/${selectedGigId}/${task._id}`, tokenHeader())
      const data = response.data;
      setTaskData(tasks => [...tasks,data]);
    }));
  }
  useEffect(() => {
    console.log(isSelected)
    if(isSelected) fetchTasks()
  }, [isSelected]);
  console.log(form);
  //! ---------------------------------- test ---------------------------------- */

  const handleStartTask = (myGigTaskId) => {
    const myTask = taskData.find((task) => task._id === myGigTaskId);
    if(myTask && !myTask.submission){
    setIsModalVisible(true);
    setSelectedTask(myTask);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setForm([]);
  };

  //* ------------------ Start task button disabled if user not selected ------------------ */
  // const isButtonDisable = isSelected || isCompleted ? false : true;
  const getPromptMessage = (index) => {
    if(!isApply) return "Apply To Continue"
    if(isShortlisted) return "Wait For Your Selection"
    if(isSelected && taskData[index] && !taskData[index].submission) return "Click To Continue"
    if(isSelected && taskData[index] && taskData[index].submission) return "Waiting For Approval"
    if(isRejected) return "You are not selected"
  }


  return (
    <>
      <div className="">
        {arrayValidation(gigTask) &&
          gigTask.map((task, index) => (
            <Tooltip title={getPromptMessage(index)} color={"#38bdba"} key={index}>
            <div
              className="carousel-content-block"
              key={index}
              style={{ margin: "20px 8px 20px 6px"}}
              onClick={() => handleStartTask(task._id)}
            >
              <div className="carousel-content-block__content">
              <h4 className="carousel-content-block__h4">{task.title}</h4>
              <p className="carousel-content-block__p">{task.description}</p>
              {taskData[index] && taskData[index].submission ? <Tag color="green">Task Submitted</Tag>: null}
              </div>
              <div className="carousel-content-block__icon">
              <RightOutlined />
              </div>
            
            </div>
            </Tooltip>
          ))}
      </div>

      <Modal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {/* TODO */}
        <div className="task">
          <h3 className="task__header">Task Description</h3>
          <p className="task__description">{description()}</p>
          <h3 className="task__header">Instructions</h3>
          {instruction()}
          <div className="">
            <h3 className="task__header">Submit Work</h3>

            <div>{proof()}</div>
          </div>
          <div className="" style={{ marginTop: "18px" }}>
            <h3>Task Check List</h3>
            {checklist()}
          </div>
        </div>
        <div className="" style={{ textAlign: "center" }}>
          <Button loading={loader} className="task__submit-btn" onClick={handleTaskSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}
