import { Button, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { arrayValidation } from "../validation/validation";
import { tokenHeader } from "../../constant/tokenHeader";

const CompanyQuesForm = (props) => {
  const { TextArea } = Input;
  const [answer, setAnswer] = useState([]);
  const {
    companyQuestion,
    handleSubmitModal,
    selectedId,
    isInternshipOrGig,
  } = props;

  const onInputChange = (i, e) => {
    let newAnswer = [...answer];
    // console.log(newAnswer)
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
        .put(`internship/apply/${selectedId}`, answerData, tokenHeader)
        .then((res) => {
          console.log(res);
          console.log(answer);
          // setCompanyQuestion(res.data.questions);
        })
        .catch((e) => {
          console.log("error" + e);
          console.log(e.response);
        });
    } else {
      axios
        .put(`mission/apply/${selectedId}`, answerData, tokenHeader)
        .then((res) => {
          console.log(res);
          // console.log(answer);
          // setCompanyQuestion(res.data.questions);
        })
        .catch((e) => {
          console.log("error" + e);
          console.log(e.response);
        });
    }

    handleSubmitModal();
  };

  console.log(answer);

  const question =
    arrayValidation(companyQuestion) &&
    companyQuestion.map((question, i) => {
      return (
        <div key={i}>
          <p>
            {i + 1}. {question.question}
          </p>
          <TextArea
            // value={answer[i]}
            required={true}
            onChange={(e) => onInputChange(i, e)}
            placeholder="enter you answer"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
      );
    });

  return (
    <div>
      <h1> Internship Application </h1>
      <div></div>
      {question}
      <Button onClick={handleSubmitApplication}>Submit Application</Button>
    </div>
  );
};
export default CompanyQuesForm;
