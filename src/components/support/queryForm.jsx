import { Button, Input, Upload } from "antd";
import React, { useState } from "react";
import Axios from "axios";
/* ---------------------------------- ***** --------------------------------- */
import uploadBtn from "../../assets/img/uploadBtn.svg";
import { tokenHeader } from "../../constant/tokenHeader";

const { TextArea } = Input;

export const QueryFrom = ({ handleCancel }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [supportData, setSupportData] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [imageData, setImageData] = useState(null);

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const imageUploadHandler = (info) => {
    getBase64(info.file.originFileObj, (imgurl) => setImageUrl(imgurl));
    Axios.get(
      "https://pracify.com/testing/student_verification/signed_url_for_docs?fileType=image/jpeg",
      tokenHeader()
    ).then((res) => {
      console.log(res.data);
      setImgURL(res.data);
      setImageData(info);
      console.log(info);
    });
    console.log(info);
    console.log("INFO..... ");
    if (info.file.status === "uploading") {
      console.log("loading/..........");
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imgurl) => setImageUrl(imgurl));
      console.log("successfully uploaded ", info.file);
      console.log(imageUrl);
    }
  };

  const handleOk = (e) => {
    console.log(e);
    let img = imageData && imageData.file;
    let lookupOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: img,
    };

    fetch("http://cors-anywhere.herokuapp.com/" + imgURL.url, lookupOptions)
      .then((res) => {
        if (res.status === 200) {
          console.log("%c File Sent", "font-size: 25px, color: darkblue");
          console.log(imgURL);
          handleCancel();
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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

      <Upload
        className="query-image"
        name="screenshot"
        listType="picture-card"
        showUploadList={false}
        action="https://pracify.com/testing/student_verification/signed_url_for_docs?fileType=image/jpeg"
        onChange={imageUploadHandler}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          <div className="upload-content">
            <div className="upload-imgBtn-block">
              <img src={uploadBtn} alt="" className="upload-imgBtn" />
            </div>
            <p className="upload-text">Upload Screenshot (if any)</p>
          </div>
        )}
      </Upload>
      <Button onClick={handleOk} className="query-submit-btn" type="primary">
        Submit
      </Button>
    </div>
  );
};
