import { Button, Icon, Modal, Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { arrayValidation } from "../validation/validation.js";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import userCard from "../common/userCard.jsx";
import positionIcon from "./img/headingImg/educationIcon.svg";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import addIcon from "./img/addIcon.svg";

const Position = ({ position, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [positionData, setPositionData] = useState(false);

  const { register, handleSubmit, errors, watch, control, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      // position: positionData.position,
      // description: positionData.description
    },
  });
  console.log(position);
  //! ---------------------------------- test ---------------------------------- */
  console.log(watch("position"));
  console.log(watch("description"));

  const onSubmit = (data) => {
    console.log(data);
    const check = { ...data, _id: positionData._id };
    console.log(check);
    const myData = positionData._id ? { ...data, _id: positionData._id } : data;
    console.log(myData);
    axios
      .post(`resume/add_por`, myData, tokenHeader)
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
    // console.log(selectedPosition);
    setPositionData(selectedPosition);
    setIsModalVisible(true);
    setValue("position", selectedPosition.position);
    setValue("description", selectedPosition.description);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`resume/delete_por/${id}`, tokenHeader)
      .then((res) => {
        // console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div className="position-block-one">
      <div className="position-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img
            src={positionIcon}
            alt=""
            className="position-block-two-icon"
          ></img>
          <div className="position-block-heading-content">
            <h2 className="position-block-two-heading">
              Positions of Responsibilities
            </h2>
            {arrayValidation(position) &&
              position.map((thisPosition, index) => (
                <div key={index} className="position-content-block">
                  <section className="position-content-sec-one">
                    <h1 className="position-content-sec-one__h1">
                      {thisPosition.position}
                    </h1>
                    <p className="position-content-sec-one__p">
                      {thisPosition.description}
                    </p>
                  </section>

                  <section className="position-edit-delete-icon">
                    <Tooltip title="edit">
                      {/* <Icon
                        type="edit"
                        onClick={() => handleEdit(thisPosition)}
                        style={{ marginRight: "32px" }}
                      ></Icon> */}
                      <EditOutlined
                        onClick={() => handleEdit(thisPosition)}
                        style={{ marginRight: "32px" }}
                      />
                    </Tooltip>
                    <Tooltip title="delete">
                      {/* <Icon
                        type="delete"
                        onClick={() => handleDelete(thisPosition._id)}
                      /> */}
                      <DeleteOutlined
                        onClick={() => handleDelete(thisPosition._id)}
                      />
                    </Tooltip>
                  </section>
                </div>
              ))}
          </div>
        </section>
        <Tooltip title="add">
          <img
            src={addIcon}
            alt=""
            onClick={handleAdd}
            className="position-block-one-button"
          />
        </Tooltip>
      </div>

      <Modal
        title="Add Position"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={680}
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
