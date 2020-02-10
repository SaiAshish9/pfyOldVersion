import React, { useState, useEffect } from "react";
import { Button, Modal, Icon, Input, Tooltip } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { arrayValidation } from "../validation/validation.js";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import positionIcon from "./img/positionIcon.svg";
import userCard from "../common/userCard.jsx";

const Position = ({ position, set }) => {
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
    set(Math.random());
    const myData = positionData._id ? { ...data, _id: positionData._id } : data;
    console.log(myData);
    axios

      .post(`${apiURL}/resume/add_por`, myData, tokenHeader)
      .then(res => {
        console.log(res);
        set(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
    setPositionData(false);
  };
  const handlePositionButton = () => {
    setIsModalVisible(true);
  };

  const handleEditButton = selectedPosition => {
    console.log(selectedPosition);
    setPositionData(selectedPosition);
    setIsModalVisible(true);
    setValue("position", selectedPosition.position);
    setValue("description", selectedPosition.description);
  };

  useEffect(() => {
    console.log(positionData);
  }, [positionData]);

  const handleDelete = id => {
    console.log(id);
    axios
      .delete(`${apiURL}/resume/delete_por/${id}`, tokenHeader)
      .then(res => {
        // console.log(res);
        set(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  // const handleDeleteClick = () => {
  //   setIsPopover(true);
  // };

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
            <Icon type="plus-circle" onClick={handlePositionButton} />
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
                  onClick={() => handleEditButton(thisPosition)}
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
          onClick={handlePositionButton}
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
        >
          <h2>Position</h2>

          <input
            name="position"
            ref={register}
            defaultValue={positionData.position}
            // value={positionData.position}
            // onChange=
          ></input>

          <h2>Description</h2>
          <textarea
            name="description"
            ref={register}
            defaultValue={positionData.description}
            // value={positionData.description}
          />
          <Button htmlType="submit">Done</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Position;
