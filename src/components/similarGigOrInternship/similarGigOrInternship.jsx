import { Modal } from "antd";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { tokenHeader } from "../../constant/tokenHeader";
/* ---------------------------------- ***** --------------------------------- */
import SmallCard from "../common/smallCard";
import { QueryFrom } from "../support/queryForm";
import { arrayValidation } from "../validation/validation";
import helpIcon from "./help.svg";

export default function SimilarGigOrInternship({
  isGigOrInternship,
  category,
}) {
  console.log("isGigOrInternship", isGigOrInternship, category);
  const [similarGigOrInternship, setSimilarGigOrInternship] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log("similarGigOrInternship", similarGigOrInternship);
  }, [similarGigOrInternship]);

  useEffect(() => {
    console.log("similar gig", category);
    if (isGigOrInternship === "gig") {
      axios
        .get(`mission/fetch?pagesize=4&title=${category}`)
        .then((res) => {
          setSimilarGigOrInternship(res.data.missions);
          console.log("similar gig", res.data);
        })
        .catch((e) => {
          console.log("similar gig error", e.res);
        });
    } else if (isGigOrInternship === "internship") {
      axios
        .get(
          `internship/fetch_with_status?pagesize=4&category=${category}`,
          tokenHeader()
        )
        .then((res) => {
          setSimilarGigOrInternship(res.data.internships);
          console.log("similar internship", res.data);
        })
        .catch((e) => {
          console.log("similar internship error", e);
        });
    }
  }, [category, isGigOrInternship]);

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="moreGigOrInternship-main-block">
        {isGigOrInternship === "gig" && (
          <div className="support-block">
            <h3 className="support-block__h3">Support</h3>
            <div
              className="support-question-block"
              onClick={() => setModalVisible(true)}
            >
              <img
                alt=""
                src={helpIcon}
                className="support-question-block__img"
              ></img>
              <p className="support-question-block__p">Ask Questions</p>
            </div>
          </div>
        )}
        <div className="similar-gigOrInternship-block1">
          <h3 className="similar-gigOrInternship-block1__h3">
            {isGigOrInternship === "gig"
              ? "Similar Gigs"
              : "Similar Internships"}
          </h3>
          {arrayValidation(similarGigOrInternship) &&
            similarGigOrInternship.map((gigOrInternship, index) => {
              return (
                <Fragment key={index}>
                  {index < 4 && (
                    <SmallCard
                      gigOrInternship={gigOrInternship}
                      isGigOrInternship={isGigOrInternship}
                    />
                  )}
                </Fragment>
              );
            })}
        </div>
      </div>
      <Modal
        className="support-modal"
        width={674}
        title="Support"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <QueryFrom handleCancel={handleCancel} />
      </Modal>
    </>
  );
}
