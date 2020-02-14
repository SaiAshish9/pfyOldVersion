import React, { useState, useEffect } from "react";
import { Button, Modal, Icon, Input, Tooltip } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { arrayValidation } from "../validation/validation.js";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import positionIcon from "./img/positionIcon.svg";
import userCard from "../common/userCard.jsx";

const Position = ({ position, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [positionData, setPositionData] = useState(false);

  const { register, handleSubmit, errors, watch, control, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      // position: positionData.position,
      // description: positionData.description
    }
  });
  console.log(position);
  //! ---------------------------------- test ---------------------------------- */
  console.log(watch("position"));
  console.log(watch("description"));

  const onSubmit = data => {
    console.log(data);
    const check = { ...data, _id: positionData._id };
    console.log(check);
    const myData = positionData._id ? { ...data, _id: positionData._id } : data;
    console.log(myData);
    axios
      .post(`${apiURL}/resume/add_por`, myData, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
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

  const handleEdit = selectedPosition => {
    // console.log(selectedPosition);
    setPositionData(selectedPosition);
    setIsModalVisible(true);
    setValue("position", selectedPosition.position);
    setValue("description", selectedPosition.description);
  };

  const handleDelete = id => {
    console.log(id);
    axios
      .delete(`${apiURL}/resume/delete_por/${id}`, tokenHeader)
      .then(res => {
        // console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  return (
    <div className="position-block-one">
      <div
        className="position-block-two"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          paddingBottom: "12px"
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            src={positionIcon}
            alt=""
            className="position-block-two-icon"
          ></img>
          <h2 className="position-block-two-heading">
            Positions of responsibilities
          </h2>
        </section>
        <section>
          <Tooltip title="add">
            <Icon type="plus-circle" onClick={handleAdd} />
          </Tooltip>
        </section>
      </div>

      {arrayValidation(position) ? (
        position.map((thisPosition, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
              margin: "0px 40px"
            }}
          >
            <section>
              <h3>{thisPosition.position}</h3>
              <p>{thisPosition.description}</p>
            </section>

            <section>
              <Tooltip title="edit">
                <Icon
                  type="edit"
                  onClick={() => handleEdit(thisPosition)}
                  style={{ marginRight: "32px" }}
                ></Icon>
              </Tooltip>
              <Tooltip title="delete">
                <Icon
                  type="delete"
                  onClick={() => handleDelete(thisPosition._id)}
                />
              </Tooltip>
            </section>
          </div>
        ))
      ) : (
        <Button
          // type="primary"
          shape="round"
          className="position-block-one-button"
          onClick={handleAdd}
        >
          Add Responsibility
        </Button>
      )}

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
          className="position-modal__form "
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
              // value={positionData.description}
              className="position-modal-sec-two__textarea "
            />
          </section>
          <Button
            htmlType="submit"
            className="position-modal__button"
            shape="round"
          >
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Position;
