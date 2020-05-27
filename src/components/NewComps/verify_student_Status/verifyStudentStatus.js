import React, { useState } from "react";
import { Modal, Button, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default function VerifyStudentStatus(props) {
  const [visible, setVisible] = useState(false);
  const [imageUrl1, setImageUrl1] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  console.log(props.isShowVerify);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
    props.isCloseVerify();
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
    props.isCloseVerify();
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const ImageUploadHandler = (info, side) => {
    if (info.file.status === "uploading") {
      // this.setState({ loading: true });
      console.log("loading/..........");
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
      width={"50%"}
      title="Verify Student Status"
      visible={props.isShowVerify}
      onOk={handleOk}
      onCancel={handleCancel}
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
            defaultValue="aadhar"
            style={{ width: "100%" }}
            onChange={handleCancel}
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
        <div className="status-form-upload">
          <div>
            <Upload
              className="document-image1"
              name="document"
              listType="picture-card"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              onChange={(info) => ImageUploadHandler(info, "front")}
            >
              {imageUrl1 ? (
                <img src={imageUrl1} alt="avatar" style={{ width: "100%" }} />
              ) : (
                <div className="upload-text-content">
                  <div className="text">
                    <p>Upload Front Side of The Document</p>{" "}
                  </div>
                  <UploadOutlined />
                  <div>{imageUrl1}</div>
                </div>
              )}
            </Upload>
          </div>
          <div>
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
                <div className="upload-text-content">
                  <div className="text">
                    <p> Upload Back Side of The Document </p>
                  </div>
                  {/* <Icon className="icon" type={"upload"} /> */}
                  <UploadOutlined />
                  <div>{imageUrl2}</div>
                </div>
              )}
            </Upload>
          </div>
        </div>
        <Button className="status-form-submit">Submit</Button>
      </div>
    </Modal>
  );
}
