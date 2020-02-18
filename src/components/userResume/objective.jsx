import React, { useState } from "react";
import { Button, Modal, Input, Icon, Tooltip } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";

import objectiveIcon from "./img/headingImg/objectiveIcon.svg";

const Objective = ({ careerObjective, updateResume }) => {
  //#region
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      objectiveTextarea: careerObjective
    }
  });

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleObjectiveButton = () => {
    setIsModalVisible(true);
  };

  const onSubmit = data => {
    console.log(data.objectiveTextarea);
    // let update=0
    // set(Math.random());
    axios
      .put(
        `${apiURL}/resume/addobjective?careerObjectives=${data.objectiveTextarea}`,
        null,
        tokenHeader
      )
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  console.log(watch("objectiveTextarea"));
  //#endregion
  return (
    <div className="objective-block-one">
      <div
        className="objective-block-two"
        style={{
          borderBottom: !!careerObjective ? "1px solid" : "none"
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            src={objectiveIcon}
            alt=""
            className="objective-block-two-icon"
          ></img>
          <h2 className="objective-block-two-heading">Career Objective</h2>
        </section>
        <section>
          {!!careerObjective && (
            <Tooltip title="edit">
              <Icon type="edit" onClick={handleObjectiveButton}></Icon>
            </Tooltip>
          )}
        </section>
      </div>

      {!!careerObjective ? (
        <div className="objective-content-block">
          <p className="objective-content-block__p">{careerObjective}</p>
        </div>
      ) : (
        <Button
          shape="round"
          className="objective-block-one-button"
          onClick={handleObjectiveButton}
        >
          Add Objective
        </Button>
      )}
      <Modal
        class="modal-block"
        title="Add Career Objectives"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          // style={formStyle}
          className="objective-modal__form"
        >
          <textarea
            name="objectiveTextarea"
            ref={register}
            defaultValue={careerObjective}
            placeholder="please enter your career objective"
            // style={inputStyle}
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
