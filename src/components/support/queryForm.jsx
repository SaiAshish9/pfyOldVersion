import { Button, Input, Upload, message } from "antd";
import React, { useState } from "react";
import Axios from "axios";
/* ---------------------------------- ***** --------------------------------- */
import uploadBtn from "../../assets/img/uploadBtn.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import { s3URL } from "../../constant/url";

const { TextArea } = Input;

export const QueryFrom = ({ handleCancel }) => {
  const [supportData, setSupportData] = useState(null);
  const [imgURL, setImgURL] = useState();
  const [newImg, setNewImg] = useState();
  const [loader, setLoader] = useState(false);

  const handleSubmit = () => {};

  const beforeUpload = async (file) => {
    try {
      const isJpgOrPng =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }
      const response = await Axios.get(
        `support/get_url_for_image?fileType=${file.type}`,
        tokenHeader()
      );
      console.log(response);

      setImgURL(response.data.url);
      setNewImg(response.data.key);
      setLoader(true);
    } catch (err) {
      if (err) {
        message.error("Something went wrong");
      }
    }
  };

  const props = {
    listType: "picture-card",
    className: "query-image",
    showUploadList: false,
    customRequest: async (data) => {
      console.log(data.file);
      const response = await Axios.put(imgURL, data.file);
      console.log(response);
      setLoader(false);
    },
    beforeUpload: beforeUpload,
  };

  return (
    <div className="query-form">
      <div className="query-form-title">Write Your Query</div>
      <div className="query-input-block">
        <div className="query-input">
          <span className="query-label">Subject:</span>
          <Input />
        </div>
        <div className="query-input">
          <span className="query-label">Description:</span>
          <TextArea className="query-textarea" rows={3} />
        </div>
      </div>

      <Upload {...props}>
        {newImg ? (
          <img src={s3URL + newImg} alt="avatar" style={{ width: "100%" }} />
        ) : (
          <div className="upload-content">
            <div className="upload-imgBtn-block">
              <img src={uploadBtn} alt="" className="upload-imgBtn" />
            </div>
            <p className="upload-text">Upload Screenshot (if any)</p>
          </div>
        )}
      </Upload>
      <Button
        onClick={handleSubmit}
        className="query-submit-btn"
        type="primary"
      >
        Submit
      </Button>
    </div>
  );
};
