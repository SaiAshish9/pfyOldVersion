import { Button, Collapse, Input, Modal, Upload } from "antd";
import Axios from "axios";
import React, { useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import uploadBtn from "../../assets/img/uploadBtn.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import gig from "./img/gig.svg";
import internship from "./img/internship.svg";
import other from "./img/other.svg";
import verification from "./img/verification.svg";

const { TextArea } = Input;

const { Panel } = Collapse;
export default function Support(props) {
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [supportData, setSupportData] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [selectedComp, setSelectedComp] = useState("supportTiles");

  const getFAQ = (val) => {
    Axios.get("support/fetch", tokenHeader()).then((res) => {
      let data = res.data;
      if (val === "internshipSupport") {
        data = data.internshipSupport;
        setSupportData(data);
      }
      console.log(res.data);
    });
  };

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const ImageUploadHandler = (info) => {
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
    setVisible(false);
    setSupportData(null);
    let img = imageData.file;
    let lookupOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: img,
    };

    fetch("http://cors-anywhere.herokuapp.com/" + imgURL.url, lookupOptions)
      .then((res) => {
        if (res.status == 200) {
          console.log("%c File Sent", "font-size: 25px, color: darkblue");
          console.log(imgURL);
          props.isClose();
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleCancel = (e) => {
    setVisible(false);
    setSelectedComp("supportTiles");
    setSupportData(null);

    props.isClose();
  };

  const selectHandler = (val) => {
    console.log(val);
    setSelectedComp("faq");
    getFAQ(val);
  };

  const contactUsHandler = () => {
    console.log("hey you clicked CONTACT US");
    setSelectedComp("queryFrom");
  };

  const supportTiles = (
    <div className="support-block">
      <div
        onClick={() => selectHandler("internshipSupport")}
        className="support-single-block"
      >
        <img src={internship} alt="" />
        <span className="support-single-block-text">Internship Support</span>
      </div>
      <div
        onClick={() => selectHandler("verification")}
        className="support-single-block"
      >
        <img src={verification} alt="" />
        <span className="support-single-block-text">Verification Support</span>
      </div>
      <div
        onClick={() => selectHandler("gig")}
        className="support-single-block"
      >
        <img src={gig} alt="" />
        <span className="support-single-block-text">Gig Support</span>
      </div>
      <div
        onClick={() => selectHandler("other")}
        className="support-single-block"
      >
        <img src={other} alt="" />
        <span className="support-single-block-text">Other Support</span>
      </div>
    </div>
  );

  const faq = (
    <div className="support-faq">
      <div>
        <Collapse
          expandIconPosition={"right"}
          style={{ border: "none", backgroundColor: "#fff" }}
          accordion
        >
          {supportData
            ? supportData.map((data, index) => (
                <Panel header={data.question} key={index}>
                  <p>{data.answer}</p>
                </Panel>
              ))
            : null}
        </Collapse>
        <div className="contact-us">
          ----STILL NEED HELP?{" "}
          <span onClick={contactUsHandler} className="contact-us-link">
            CONTACT US!----
          </span>
        </div>
      </div>
      <Button className="support-faq-submit-btn" type="primary">
        Submit
      </Button>
    </div>
  );

  const queryFrom = (
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
        onChange={ImageUploadHandler}
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

  return (
    <Modal
      className="support-modal"
      width={674}
      title="Support"
      visible={props.isShow}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {selectedComp === "supportTiles"
        ? supportTiles
        : selectedComp === "queryFrom"
        ? queryFrom
        : faq}
    </Modal>
  );
}
