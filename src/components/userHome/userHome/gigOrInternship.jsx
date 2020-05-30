import { Tabs } from "antd";
import React from "react";
import Card from "../../common/card";
import { arrayValidation } from "../../validation/validation";

const { TabPane } = Tabs;
export default function GigOrInternship({ user }) {
  const margin = (index) => {
    if (index === 0) {
      console.log(index);
      return { marginLeft: "0px" };
    } else {
      console.log(index);
      return { marginLeft: "40px" };
    }
  };

  const getCard = (dataOfCard) => {
    return (
      arrayValidation(dataOfCard) &&
      dataOfCard.map((userCardData, index) => {
        if (userCardData.type === "1") {
          return (
            <div style={margin(index)} key={index}>
              <Card internship={userCardData}></Card>
            </div>
          );
        } else {
          return (
            <div style={margin(index)} key={index}>
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

  const title = <h1>Work Opportunities</h1>;
  return (
    <div className="gigOrInternship-block">
      <Tabs defaultActiveKey="1" tabBarExtraContent={title}>
        <TabPane tab="Latest" key="1">
          <div className="latest-block">{latestCard}</div>
        </TabPane>
        <TabPane tab="Recommended" key="2">
          <div className="recommended-block">{recommendedCard}</div>
        </TabPane>
        <TabPane tab="Trending" key="3">
          <div className="trending-block">{trendingCard}</div>
        </TabPane>
      </Tabs>
    </div>
  );
}

// <Card></Card>
// <Card></Card>
