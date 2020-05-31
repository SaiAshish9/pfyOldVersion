import { Button } from "antd";
import React from "react";
import brandPartnershipIcon from "../../assets/img/partnerWithPracify/brandPartnershipIcon.svg";
import cashSponsorshipIcon from "../../assets/img/partnerWithPracify/cashSponsorshipIcon.svg";
import promoteEventIcon from "../../assets/img/partnerWithPracify/promoteEventIcon.svg";
import pwpHeroImg from "../../assets/img/partnerWithPracify/pwpHeroImg.svg";
import Footer from "../landingPage/footer";

const pwpData = [
  {
    img: cashSponsorshipIcon,
    head: "Cash Sponsorship",
    para: "Earn cash sponsorship by completing simple tasks",
  },
  {
    img: brandPartnershipIcon,
    head: "Brand Partnerships",
    para: "Distribute brand goodies & vouchers at your college events",
  },
  {
    img: promoteEventIcon,
    head: "Promote Event",
    para: "Promote your college event among Pracify users",
  },
];

export default function PartnerWithPracify() {
  return (
    <div className="pwp-main-block">
      <div className="pwp-hero-block">
        <h1 className="pwp-hero-head">Partner with Pracify!</h1>
        <p className="pwp-hero-para">
          We love partnering with college societies across India. We know you
          need sponsorship to organize a great event and we've got a way to help
          you out, just complete some tasks and earn cash sponsorship for your
          college festival.
        </p>
        <img src={pwpHeroImg} alt="" className="pwp-hero-img" />
        <Button className="pwp-hero-button">Let's Partner</Button>
      </div>
      <h1 className="partnership-advantage">Partnership Advantages</h1>
      <div className="partnership-advantage-main-block">
        {pwpData.map((data, index) => (
          <div className="partnership-advantage-block" key={index}>
            <img src={data.img} alt="" className="partnership-advantage-img" />
            <h1 className="partnership-advantage-head">{data.head}</h1>
            <p className="partnership-advantage-para">{data.para}</p>
          </div>
        ))}
      </div>
      <div className="partnership-button-block">
        <Button className="partnership-button">Let's Partner</Button>
      </div>
      <Footer />
    </div>
  );
}
