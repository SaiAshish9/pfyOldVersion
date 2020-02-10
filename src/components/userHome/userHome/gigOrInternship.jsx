import React, { useContext } from "react";
import Card from "../../common/card";
import { arrayValidation } from "../../validation/validation";
import UserContext from "../../../context/userContext";

const GigOrInternship = () => {
  const { user } = useContext(UserContext);

  const getCard = dataOfCard => {
    return (
      arrayValidation(dataOfCard) &&
      dataOfCard.map((userCardData, index) => {
        if (userCardData.type === "1") {
          return (
            <div style={{ marginLeft: "40px" }} key={index}>
              <Card internship={userCardData}></Card>
            </div>
          );
        } else {
          return (
            <div style={{ marginLeft: "40px" }} key={index}>
              <Card gig={userCardData}></Card>
            </div>
          );
        }
      })
    );
  };

  const recommendedCard = getCard(user.recommended);
  const trendingCard = getCard(user.trending);
  const latestCard = getCard(user.latest);

  return (
    <div className="gigOrInternship-block">
      <div className="block one">
        <h2 className="heading">Recommended</h2>
        <div className="recommended-block">{recommendedCard}</div>
      </div>
      <div className="block one">
        <h2 className="heading">Trending</h2>
        <div className="trending-block">{trendingCard}</div>
      </div>
      <div className="block one">
        <h2 className="heading">latest</h2>
        <div className="latest-block">{latestCard}</div>
      </div>
    </div>
  );
};
export default GigOrInternship;

// <Card></Card>
// <Card></Card>
