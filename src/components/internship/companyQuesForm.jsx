import { Button, Input, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

/* ---------------------------------- ***** --------------------------------- */
import submitSuccess from "../../assets/animations/submitSuccess.json";
import { arrayValidation } from "../validation/validation";
import { tokenHeader } from "../../constant/tokenHeader";

const { TextArea } = Input;
export default function CompanyQuesForm(props) {
  const {
    companyQuestion,
    handleSubmitModal,
    selectedId,
    isInternshipOrGig,
  } = props;
  const [answer, setAnswer] = useState([]);
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);

  const onInputChange = (i, e) => {
    let newAnswer = [...answer];
    newAnswer[i] = e.target.value;
    setAnswer(newAnswer);
  };

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    const answerData = {
      answers: answer,
    };
    if (isInternshipOrGig === "internship") {
      axios
        .put(`internship/apply/${selectedId}`, answerData, tokenHeader())
        .then((res) => {
          setIsApplicationSubmitted(true);
          handleSubmitModal();
        })
        .catch((e) => {
          console.log(e.response);
        });
    } else {
      axios
        .put(`mission/apply/${selectedId}`, answerData, tokenHeader())
        .then((res) => {
          setIsApplicationSubmitted(true);
          handleSubmitModal();
        })
        .catch((e) => {
          console.log("error" + e);
          console.log(e.response);
        });
    }
  };

  console.log(answer);

  const question =
    arrayValidation(companyQuestion) &&
    companyQuestion.map((question, i) => (
      <div key={i} className="company-ques-block">
        <p className="company-ques-para">{question.question}</p>
        <TextArea
          className="company-ques-textarea"
          required={true}
          onChange={(e) => onInputChange(i, e)}
          placeholder="enter you answer"
        />
      </div>
    ));

  const handleCancelModal = () => {
    setIsApplicationSubmitted(false);
  };

  return (
    <>
      {question}
      <div className="company-ques-btn-block">
        <Button className="company-ques-btn" onClick={handleSubmitApplication}>
          Submit Application
        </Button>
      </div>
      <Modal
        width={460}
        visible={isApplicationSubmitted}
        onCancel={handleCancelModal}
        className="sbm-vrf-modal"
        footer={
          <>
            <h3 className="sbm-vrf-head">
              Your application has been received!
            </h3>
            <Button className="sbm-vrf-btn" onClick={handleCancelModal}>
              OK
            </Button>
          </>
        }
      >
        <div className="sbm-vrf-anim">
          <Lottie
            options={{
              animationData: submitSuccess,
              loop: true,
              autoplay: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isStopped={false}
            isPaused={false}
          />
        </div>
      </Modal>
    </>
  );
}
