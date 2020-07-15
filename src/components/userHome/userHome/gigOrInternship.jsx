import { Tabs } from "antd";
import React from "react";
import Card from "../../common/card";
import { arrayValidation } from "../../validation/validation";
import {useMediaQuery} from "react-responsive";

const { TabPane } = Tabs;
export default function GigOrInternship({ user }) {
     const media = useMediaQuery({
       query: "(min-width:600px)",
     });
  const margin = (index) => {
    if (index === 0) {
      return {
        marginLeft: "0px",
        marginBottom: !media ? "1rem" : "0px",
      };
    } else {
      return {
        marginLeft: !media ? "0px" : "40px",
        marginBottom: !media ? "1rem" : "0px",
      };
    }
  };

  const getCard = (dataOfCard) => {


    return (
      arrayValidation(dataOfCard) &&
      dataOfCard.map((userCardData, index) => {
        if (userCardData.type === "1") {
          return (
            <div
          
            style={{
              ...margin(index),
            }} key={index}>
              <Card internship={userCardData}></Card>
            </div>
          );
        } else {
          return (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
              style={margin(index)}
              key={index}
            >
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
  //  const media = useMediaQuery({
  //    query: "(min-width:600px)",
  //  });

  const title = <h1>Work Opportunities</h1>;
  return (
    <div
      style={{
        width: "100vw",
        margin: 0,
      }}
      className="gigOrInternship-block"
    >
      {!media && (
        <h1
          style={{
            padding: "2rem 10vw 0",
            // margin: 7,
            // lineHeight: s1,
            fontSize: 26,
            fontWeight: 600,
            color: "#333e49",
          }}
        >
          Work Opportunities
        </h1>
      )}
      <Tabs
        // orientation="vertical"
        defaultActiveKey="1"
        style={{
          marginTop: !media && "-1rem",
        }}
        tabBarExtraContent={media && title}
      >
        <TabPane tab="Latest" key="1">
          {!media ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {latestCard}
            </div>
          ) : (
            <div className="latest-block">{latestCard}</div>
          )}
        </TabPane>
        <TabPane tab="Recommended" key="2">
          {!media ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {recommendedCard}
            </div>
          ) : (
            <div className="recommended-block">{recommendedCard}</div>
          )}
        </TabPane>
        <TabPane tab="Trending" key="3">
          {!media ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {trendingCard}
            </div>
          ) : (
            <div className="trending-block">{trendingCard}</div>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
}

// <Card></Card>
// <Card></Card>
