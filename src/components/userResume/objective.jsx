import { Button, Modal, Skeleton, Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import objectiveIcon from "./img/headingImg/objectiveIcon.svg";

const Objective = ({ careerObjective, updateResume, loader }) => {
  //#region
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      objectiveTextarea: careerObjective,
    },
  });

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleObjectiveButton = () => {
    setIsModalVisible(true);
  };

  const onSubmit = (data) => {
    console.log(data.objectiveTextarea);

    axios
      .put(
        `resume/addobjective?careerObjectives=${data.objectiveTextarea}`,
        null,
        tokenHeader()
      )
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  console.log(watch("objectiveTextarea"));
  //#endregion
  return (
    <div className="objective-block-one">
      <div className="objective-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img
            src={objectiveIcon}
            alt=""
            className="objective-block-two-icon"
          ></img>
          <div className="objective-block-heading-content">
            <h2 className="objective-block-two-heading">Career Objective</h2>
            {loader ? (
              <div
                className="objective-content-block"
                style={{ height: "100px", overflow: "hidden" }}
              >
                <Skeleton />
              </div>
            ) : !!careerObjective ? (
              <div className="objective-content-block">
                <p className="objective-content-block__p">{careerObjective}</p>
              </div>
            ) : null}
          </div>
        </section>

        {!!careerObjective ? (
          <section className="objective-edit-icon">
            <Tooltip title="edit">
              <img
                onClick={handleObjectiveButton}
                src={editIcon}
                alt=""
                className=""
              />
            </Tooltip>
          </section>
        ) : (
          <img
            src={addIcon}
            alt=""
            className="objective-block-one-button"
            onClick={handleObjectiveButton}
          />
        )}
      </div>

      <Modal
        className=""
        title="Add Career Objectives"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="objective-modal__form"
        >
          <label className="input-label">Description</label>
          <textarea
            name="objectiveTextarea"
            ref={register}
            defaultValue={careerObjective}
            placeholder="please enter your career objective"
            className="objective-modal__textarea"
          />
          <Button
            htmlType="submit"
            className="objective-modal__button"
            shape="round"
          >
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Objective;
