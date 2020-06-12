import { Button, Form, Modal, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import React, { useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import mailIcon from "../../../assets/img/login/mailIcon.svg";
import userIcon from "../../../assets/img/login/userIcon.svg";
import { tokenHeader } from "../../../constant/tokenHeader";
import InputType from "../../inputType";
import editIcon from "./img/editIcon.svg";

const myToken = Cookies.get("token");

const userDetail = [
  {
    name: "firstName",
    placeholder: "First Name",
    prefix: userIcon,
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    prefix: userIcon,
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Your Email",
    prefix: mailIcon,
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "dob",
    placeholder: "Your Age",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "date",
  },
  {
    name: "gender",
    label: "Gender",
    placeholder: "Gender",
    option: [
      { option: "Male", value: "M" },
      { option: "Female", value: "F" },
    ],
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "select",
  },
  {
    name: "city",
    label: "City",
    placeholder: "Your City",
    rule: [{ required: true, message: "please input your city!" }],
    option: [
      { option: "Delhi", value: "Delhi" },
      { option: "Mumbai", value: "Mumbai" },
      { option: "Kolkata", value: "Kolkata" },
      { option: "Bangalore", value: "Bangalore" },
      { option: "Pune", value: "Pune" },
    ],
    inputType: "select",
  },
];

export default function EditProfile({ userData }) {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFormSubmit = (value) => {
    const dob = value.dob._d.toISOString();
    const data = { ...value, dob };
    console.log(data);
    axios
      .put("user/update", data, tokenHeader())
      .then((res) => {
        console.log(res.data);
        setVisible(false);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const [userImage, setUserImage] = useState({ loading: false });

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      console.log("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      console.log("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const onChange = (info) => {
    console.log("info", info);
    if (info.file.status === "uploading") {
      setUserImage({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) =>
        setUserImage({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <div
        className="user-edit-icon-block"
        style={{
          position: "absolute",
          right: "12px",
          top: "6px",
          cursor: "pointer",
        }}
      >
        <img src={editIcon} alt="" className="" onClick={showModal} />
      </div>
      <Modal
        width={634}
        className="user-edit-profile-modal"
        title="Edit Profile"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="userDetails"
          onFinish={onFormSubmit}
          form={form}
          initialValues={{
            firstName: userData && userData.firstName,
            lastName: userData && userData.lastName,
            email: userData && userData.email,
            dob: userData && moment(userData.dob, "DD-MM-YYYY"),
            gender: userData && userData.gender,
            city: userData && userData.city,
          }}
          className="user-edit-profile-form"
        >
          <ImgCrop rotate>
            <Upload
              name="image"
              action="https://pracify.com/testing/user/check_image"
              onChange={onChange}
              headers={{ token: myToken }}
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onPreview={onPreview}
              className="upload-avatar-profile"
            >
              {userImage.imageUrl ? (
                <div className="avatar-img-block">
                  <img
                    src={userImage.imageUrl}
                    alt="avatar"
                    className="avatar-img"
                  />
                </div>
              ) : (
                <div className="avatar-img-block">
                  <img
                    src={userData && userData.imgUrl}
                    alt="avatar"
                    className="avatar-img"
                  />
                </div>
              )}
            </Upload>
          </ImgCrop>

          <div className="user-form-main-block">
            {userDetail.map((user, index) => (
              <div className="user-form-block" key={index}>
                <InputType
                  type={user.inputType}
                  name={user.name}
                  rule={user.rule}
                  placeholder={user.placeholder}
                  option={user.option}
                  prefix={user.prefix}
                />
              </div>
            ))}
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="user-profile-submit-btn"
              >
                UPDATE
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
}
