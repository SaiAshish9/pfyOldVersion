import { Button, Modal, Skeleton, Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import objectiveIcon from "./img/headingImg/objectiveIcon.svg";
import DataLayout from "../common/profileOrResumeLayout";

const Objective = ({ careerObjective, updateResume, loader }) => {
  //#region
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      objectiveTextarea: careerObjective,
    },
  });

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAdd = () => {
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

  const content = (
    <div className="all-user-data-content">
      {!!careerObjective && (
        <div className="user-data-content-main-block">
          <div className="user-data-content-block">
            <p className="user-data-para" id="user-data-last-el">
              {careerObjective}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <DataLayout
        img={<img src={objectiveIcon} alt="" className="user-data-img" />}
        head="Career Objective"
        icon={
          <img
            src={!careerObjective ? addIcon : editIcon}
            alt=""
            onClick={handleAdd}
            className="user-data-icon"
          />
        }
        content={content}
        isData={!!careerObjective}
      />
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
            SAVE
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Objective;
