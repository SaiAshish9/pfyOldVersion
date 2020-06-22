import { Button, Input, Modal, Select, Upload } from "antd";
import React, { useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import uploadBtn from "../../assets/img/uploadBtn.svg";
import downArrow from "../../assets/img/down-arrow.svg";

const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default function VerifyStudentStatus({ isVisibleModal, closeModal }) {
  const [imageUrl1, setImageUrl1] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  const [isNext, setIsNext] = useState(false);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const ImageUploadHandler = (info, side) => {
    if (info.file.status === "uploading") {
      console.log("loading..........");
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imgurl) =>
        side === "front" ? setImageUrl1(imgurl) : setImageUrl2(imgurl)
      );
      console.log("successfully uploaded ", info.file);
      console.log(imageUrl1);
      console.log(imageUrl2);
    }
  };

  return (
    <Modal
      width={732}
      title="Verify Student Status"
      visible={isVisibleModal}
      onCancel={() => closeModal()}
      footer={null}
    >
      <div className="verify-student-status-form">
        <div className="status-form-single-input">
          <p className="status-form-title">College Name</p>
          <Input placeholder="Enter College Name" />
        </div>
        <div className="status-form-single-input">
          <p className="status-form-title">Upload Document</p>
          <Select
            style={{ width: "100%" }}
            onChange={handleChange}
            placeholder="Select Document Type"
            suffixIcon={<img src={downArrow} alt="" />}
          >
            <Option value="aadhar">Aadhar</Option>
            <Option value="10th">10th Marksheet</Option>
            <Option value="collegeId">College ID</Option>
          </Select>
        </div>
        <div className="status-form-instruction">
          <div className="title">Instruction</div>
          <p className="single-instruction">
            1. Please Upload a clear image of the document.
          </p>
          <p className="single-instruction">
            2. Your full name and college name should be visible.
          </p>
          <p className="single-instruction">
            3. It should be a valid document.
          </p>
        </div>
        {isNext && (
          <div className="status-form-upload">
            <Upload
              className="document-image1"
              name="document"
              listType="picture-card"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={(info) => ImageUploadHandler(info, "front")}
            >
              {imageUrl1 ? (
                <img src={imageUrl1} alt="avatar" style={{ width: "100%" }} />
              ) : (
                <div className="upload-content">
                  <div className="upload-imgBtn-block">
                    <img src={uploadBtn} alt="" className="upload-imgBtn" />
                  </div>
                  <p className="upload-text">
                    Upload Front Side of The Document
                  </p>
                </div>
              )}
            </Upload>
            <Upload
              className="document-image2"
              name="document"
              listType="picture-card"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              onChange={(info) => ImageUploadHandler(info, "back")}
            >
              {imageUrl2 ? (
                <img src={imageUrl2} alt="avatar" style={{ width: "100%" }} />
              ) : (
                <div className="upload-content">
                  <div className="upload-imgBtn-block">
                    <img src={uploadBtn} alt="" className="upload-imgBtn" />
                  </div>
                  <p className="upload-text">
                    Upload Back Side of The Document
                  </p>
                </div>
              )}
            </Upload>
          </div>
        )}
        {!isNext ? (
          <Button
            className="status-form-submit"
            onClick={() => {
              setIsNext(true);
            }}
          >
            Next
          </Button>
        ) : (
          <Button className="status-form-submit">Submit</Button>
        )}
      </div>
    </Modal>
  );
}
