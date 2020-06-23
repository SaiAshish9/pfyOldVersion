import { Collapse, Modal } from "antd";
import Axios from "axios";
import React, { useState } from "react";
import { tokenHeader } from "../../constant/tokenHeader";
import gig from "./img/gig.svg";
import internship from "./img/internship.svg";
import other from "./img/other.svg";
import verification from "./img/verification.svg";
import { QueryFrom } from "./queryForm";

const { Panel } = Collapse;

export default function Support(props) {
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

  // const handleOk = (e) => {
  //   console.log(e);
  //   setSupportData(null);
  //   let img = imageData.file;
  //   let lookupOptions = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: img,
  //   };

  //   fetch("http://cors-anywhere.herokuapp.com/" + imgURL.url, lookupOptions)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         console.log("%c File Sent", "font-size: 25px, color: darkblue");
  //         console.log(imgURL);
  //         props.isClose();
  //       }
  //     })
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  const handleCancel = (e) => {
    setSelectedComp("supportTiles");
    setSupportData(null);
    props.isClose();
  };

  const selectHandler = (val) => {
    console.log(val);
    if (val === "other") {
      setSelectedComp("queryFrom");
    } else {
      setSelectedComp("faq");
    }
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
    </div>
  );

  return (
    <Modal
      className="support-modal"
      width={674}
      title="Support"
      visible={props.isShow}
      onCancel={handleCancel}
      footer={null}
    >
      {selectedComp === "supportTiles" ? (
        supportTiles
      ) : selectedComp === "queryFrom" ? (
        <QueryFrom handleCancel={handleCancel} />
      ) : (
        faq
      )}
    </Modal>
  );
}
