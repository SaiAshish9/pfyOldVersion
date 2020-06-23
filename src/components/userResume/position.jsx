import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import DataLayout from "../common/profileOrResumeLayout";
import { arrayValidation } from "../validation/validation.js";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import positionIcon from "./img/headingImg/educationIcon.svg";

const Position = ({ position, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [positionData, setPositionData] = useState(false);

  const { register, handleSubmit, errors, setValue } = useForm({});
  //! ---------------------------------- test ---------------------------------- */

  const onSubmit = (data) => {
    console.log(data);
    const check = { ...data, _id: positionData._id };
    console.log(check);
    const myData = positionData._id ? { ...data, _id: positionData._id } : data;
    console.log(myData);
    axios
      .post(`resume/add_por`, myData, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setPositionData(false);
    setIsModalVisible(false);
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
    setPositionData(false);
  };

  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const handleEdit = (selectedPosition) => {
    setPositionData(selectedPosition);
    setIsModalVisible(true);
    setValue("position", selectedPosition.position);
    setValue("description", selectedPosition.description);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`resume/delete_por/${id}`, tokenHeader())
      .then((res) => {
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(position) &&
        position.map((thisPosition, index) => (
          <div key={index} className="user-data-content-main-block">
            <div className="user-data-content-block">
              <h1 className="user-data-h1">{thisPosition.position}</h1>
              <p className="user-data-h2" id="user-data-last-el">
                {thisPosition.description}
              </p>
            </div>
            <div className="user-data-content-icon-block">
              <img
                src={editIcon}
                onClick={() => handleEdit(thisPosition)}
                alt=""
                className="user-data-content-icon"
              />
              <DeleteOutlined
                onClick={() => handleDelete(thisPosition._id)}
                className="user-data-content-icon"
              />
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <>
      <DataLayout
        img={<img src={positionIcon} alt="" className="user-data-img" />}
        head="Positions of Responsibilities"
        icon={
          <img
            src={addIcon}
            alt=""
            onClick={handleAdd}
            className="user-data-icon"
          />
        }
        content={content}
        isData={arrayValidation(position)}
      />

      <Modal
        title="Add Position"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
          className="position-modal__form"
        >
          <section className="position-modal-sec-one ">
            <h2 className="position-modal-sec-one__head ">Position</h2>
            <input
              name="position"
              ref={register}
              defaultValue={positionData.position}
              className="position-modal-sec-one__input "
            ></input>
          </section>

          <section className="position-modal-sec-two ">
            <h2 className="position-modal-sec-two__head ">Description</h2>
            <textarea
              name="description"
              ref={register}
              defaultValue={positionData.description}
              className="position-modal-sec-two__textarea "
            />
          </section>
          <Button
            htmlType="submit"
            className="position-modal__button"
            shape="round"
          >
            SAVE
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Position;
