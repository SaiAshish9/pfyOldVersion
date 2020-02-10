import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import team from "./img/team.svg";
import Axios from "axios";

const DigitalProfile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = data => {
    console.log(data);
    Axios.post(`${apiURL}/resume/add_digital_profiles`, data, tokenHeader)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDigitalProfileButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="digital-profile-block-one">
      <div className="digital-profile-block-two">
        <img src={team} alt="" className="digital-profile-block-two-icon"></img>
        <h2 className="digital-profile-block-two-heading">Digital Profiles</h2>
      </div>
      <Button
        // type="primary"
        shape="round"
        className="digital-profile-block-one-button"
        onClick={handleDigitalProfileButton}
      >
        Add Digital Profile
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={<Input />}
            name="facebook"
            control={control}
            defaultValue=""
            addonBefore="facebook"
          />
          <Controller
            as={<Input />}
            name="behance"
            control={control}
            defaultValue=""
            addonBefore="Behance"
          />
          <Controller
            as={<Input />}
            name="instagram"
            control={control}
            defaultValue=""
            addonBefore="Instagram"
          />

          <Controller
            as={<Input />}
            name="dribbble"
            control={control}
            defaultValue=""
            addonBefore="Dribble"
          />
          <Controller
            as={<Input />}
            name="linkedin"
            control={control}
            defaultValue=""
            addonBefore="LinkedIn"
          />
          <Controller
            as={<Input />}
            name="quora"
            control={control}
            defaultValue=""
            addonBefore="Quora"
          />
          <Controller
            as={<Input />}
            name="youtube"
            control={control}
            defaultValue=""
            addonBefore="Youtube"
          />
          <Controller
            as={<Input />}
            name="blog"
            control={control}
            defaultValue=""
            addonBefore="Blog"
          />
          <Controller
            as={<Input />}
            name="github"
            control={control}
            defaultValue=""
            addonBefore="Github"
          />
          <Controller
            as={<Input />}
            name="medium"
            control={control}
            defaultValue=""
            addonBefore="Medium"
          />
          <Button htmlType="submit">Done</Button>
        </form>
      </Modal>
    </div>
  );
};

export default DigitalProfile;
