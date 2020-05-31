import React from "react";
import { Tabs, Button } from "antd";
import businessAdvtOne from "../../assets/img/howItWork/businessAdvtOne.svg";
import businessAdvtTwo from "../../assets/img/howItWork/businessAdvtTwo.svg";
import businessAdvtThree from "../../assets/img/howItWork/businessAdvtThree.svg";
import firstIcon from "../../assets/img/howItWork/firstIcon.png";
import gigAdvtOne from "../../assets/img/howItWork/gigAdvtOne.svg";
import gigAdvtTwo from "../../assets/img/howItWork/gigAdvtTwo.svg";
import gigAdvtThree from "../../assets/img/howItWork/gigAdvtThree.svg";
import iconOne from "../../assets/img/howItWork/iconOne.svg";
import iconTwo from "../../assets/img/howItWork/iconTwo.svg";
import iconThree from "../../assets/img/howItWork/iconThree.svg";
import secIcon from "../../assets/img/howItWork/secIcon.png";
import thirdIcon from "../../assets/img/howItWork/thirdIcon.png";
import propImgOne from "../../assets/img/howItWork/propImgOne.svg";
import propImgTwo from "../../assets/img/howItWork/propImgTwo.svg";

const { TabPane } = Tabs;

const gigWorkerHead =
  "Earn money and experience by working on your own schedule";

const businessOwnerHead =
  "Scale your business using our network of on-demand workers";

const gigWorker = [
  {
    imgOne: iconOne,
    spanOne: "Find",
    spanTwo: "Gigs",
    paraOne:
      "Finding gigs on Pracify is easy, use your mobile or laptop to search and apply to gigs that match your skillset and interest.",
    paraTwo:
      "Apply using the single click 'Apply Now' button to show your interest to work with your favorite companies.",
    imgTwo: firstIcon,
  },
  {
    imgOne: iconTwo,
    spanOne: "Submit",
    spanTwo: "Proof",
    paraOne:
      "Submit proof of completed work on the mobile app or on web by sharing the screenshot or links as asked by your company.",
    paraTwo:
      "Make sure the proof matches all the requirements listed by the company to ensure it doesn't get rejected.",
    imgTwo: secIcon,
  },
  {
    imgOne: iconThree,
    spanOne: "Get",
    spanTwo: "Paid",
    paraOne:
      "Get paid into your Pracify wallet once the company reviews your performance and approves it.",
    paraTwo:
      "You can transfer your earnings directly from your Pracify wallet into your Bank account or Paytm account.",
    imgTwo: thirdIcon,
  },
];
const businessOwner = [
  {
    imgOne: iconOne,
    spanOne: "Publish",
    spanTwo: "Gigs",
    paraOne:
      "Create a Gig on Pracify with detailed description and requirements so that Gig workers matching the Gig requirements can apply to the Gig easily.",
    paraTwo: "",
    imgTwo: firstIcon,
  },
  {
    imgOne: iconTwo,
    spanOne: "Select",
    spanTwo: "Gig Workers",
    paraOne:
      "Select Gig workers who match your Gig requirements so that they can start working on your project and complete it at the earliest.",
    paraTwo: "",
    imgTwo: secIcon,
  },
  {
    imgOne: iconThree,
    spanOne: "Review",
    spanTwo: "Performance",
    paraOne:
      "Review the performance of gig workers and approve work submitted by them if it matches the Gig requirements.",
    paraTwo: "You pay only for the work you approve!",
    imgTwo: thirdIcon,
  },
];

const gigWorkerAdvantage = [
  {
    img: gigAdvtOne,
    head: "Become Financially Independent",
    para:
      "Earn money by working for you favourite companies and completing gigs that match your skillset. Its time you stop asking pocket money from your parents and become financially independent.",
  },
  {
    img: gigAdvtTwo,
    head: "Earn Work Experience",
    para:
      "Most students graduate college without gaining any work experience which increases youth unemployability. Earn valuable work experience by working for top companies on Pracify and stand out from the crowd.",
  },
  {
    img: gigAdvtThree,
    head: "Develop Your Skillset ",
    para:
      "Gigs help students and young adults to develop their personality and add important professional skills such as Communication, Team Work, Problem Solving, Leadership & ability to work under pressure.",
  },
];
const businessOwnerAdvantage = [
  {
    img: businessAdvtOne,
    head: "Built For Scale",
    para:
      "We help companies scale in a cost-efficient manner by leveraging our network of on-demand  workers throughout India.",
  },
  {
    img: businessAdvtTwo,
    head: "Risk Free",
    para:
      "You pay only for the work you approve and there are no hiring costs involved. Mitigate traditional hiring risks with Pracify.",
  },
  {
    img: businessAdvtThree,
    head: "End to End Execution",
    para:
      "We've streamlined end to end management process in minutes  making hiring, tracking & managing on-demand workers faster & easier.",
  },
];

export default function HowItWork() {
  const heroHead = (head) => (
    <div className="">
      <h1 className="">{head}</h1>
    </div>
  );

  const hiw = (allData) => (
    <div className="">
      {allData.map((data, index) => (
        <div className="" key={index}>
          <img src={data.imgOne} alt="" className="" />
          <span className="">{data.spanOne}</span>
          <span className="">{data.spanTwo}</span>
          <p className="">{data.paraOne}</p>
          <p className="">{data.paraTwo}</p>
          <img src={data.imgTwo} alt="" className="" />
        </div>
      ))}
    </div>
  );

  const advantage = (allAdvantage) => (
    <div className=" ">
      {allAdvantage.map((data, index) => (
        <div className="" key={index}>
          <img src={data.img} alt="" className="" />
          <h1 className="">{data.head}</h1>
          <p className="">{data.para}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="" style={{ marginTop: 120 }}>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="For Gig Workers" key="1">
          {heroHead(gigWorkerHead)}
          {hiw(gigWorker)}
          <h1 className="">Advantages</h1>
          {advantage(gigWorkerAdvantage)}
          <div className="">
            <Button>Start Working</Button>
          </div>
        </TabPane>
        <TabPane tab="For business Owner" key="2">
          {heroHead(businessOwnerHead)}
          {hiw(businessOwner)}
          <h1 className="">Advantages</h1>
          {advantage(businessOwnerAdvantage)}
          <div className="">
            <Button>Publish a Gig</Button>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
