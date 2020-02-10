import React,{useState} from 'react';
import { Button,Modal} from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

import two from "./img/(2).svg";

const OfflineAvailUser =()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data.objectiveTextarea);
      // axios
      //   .put(
      //     `${apiURL}/resume/addobjective?careerObjectives=${data.objectiveTextarea}`,
      //     null,
      //     tokenHeader
      //   )
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(e => {
      //     console.log(e.response);
      //   });
    };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handlePreferenceButton = () => {
    setIsModalVisible(true);
  };
return(
    <div className="offline-available-avatar-block">
          <div className="offline-available-avatar-content-block">
            <img
              src={two}
              alt=""
              className="offline-available-avatar-img"
            ></img>
            <div className="offline-available-avatar-content">
              <h2>Offline Gigs</h2>
              <p>Can you travel to complete Gigs?</p>
            </div>
          </div>
          <Button type="primary" shape="round" className="offline-available-avatar-button" onClick={handlePreferenceButton}>
            Add Preferences
          </Button>
          <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
      <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
      className="objective-block-one__form"
    >
      <Button
        htmlType="submit"
        className="objective-block-one__buttonTwo"
        style={{ alignSelf: "center", marginTop: "32px" }}
      >
        Done
      </Button>
    </form>
      </Modal>
        </div>
)
}

export default OfflineAvailUser