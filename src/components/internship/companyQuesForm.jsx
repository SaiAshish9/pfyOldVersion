import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import axios from "axios";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import { responsiveArray } from "antd/lib/_util/responsiveObserve";

const CompanyQuesForm = props => {
  //   console.log(companyQuestion);
  // const userAnswer = JSON.parse(localStorage.getItem("userAnswer"));
  const { TextArea } = Input;
  const [answer, setAnswer] = useState([]);
  const { companyQuestion } = props;
  const { handleSubmitModal } = props;
  // thisAnswer=answer
  let thisAnswer = new Array(companyQuestion.length);

  const onInputChange = (i, e) => {
    thisAnswer[i] = e.target.value;
    console.log(thisAnswer);
  };

  const handleSubmitApplication = e => {
    e.preventDefault();
    const answerData = {
      answers: thisAnswer
    };

    axios
      .put(
        `${apiURL}/internship/apply/${props.selectedInternshipId}`,
        answerData,
        tokenHeader
      )
      .then(res => {
        console.log(res);
        console.log(answer)
        // setCompanyQuestion(res.data.questions);
      })
      .catch(e => {
        console.log("error" + e);
        console.log(e.response);
      });
    setAnswer(thisAnswer);
    handleSubmitModal()
  };

  console.log(answer);

  const question =
    companyQuestion.length > 0 &&
    companyQuestion.map((question, i) => {
      return (
        <div key={i}>
          <p>
            {i + 1}. {question.question}
          </p>
          <TextArea
            // value={answerTwo}
            onChange={e => onInputChange(i, e)}
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
