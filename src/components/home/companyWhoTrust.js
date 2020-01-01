import React from "react";
import { CompanyWhoTrustStyled } from "./homeStyled";
import Zoom from "react-reveal/Zoom";

const CompanyWhoTrust = () => {
  return (
    <CompanyWhoTrustStyled>
      <h1>But don’t just take our word for it...</h1>
      <div className="company-icon-block">
        <Zoom>
          <div className="company-icon">COMPANY-ICON</div>
        </Zoom>
        <Zoom>
          <div className="company-icon">COMPANY-ICON</div>
        </Zoom>
        <Zoom>
          <div className="company-icon">COMPANY-ICON</div>
        </Zoom>
        <Zoom>
          <div className="company-icon">COMPANY-ICON</div>
        </Zoom>
      </div>
    </CompanyWhoTrustStyled>
  );
};

export default CompanyWhoTrust;
