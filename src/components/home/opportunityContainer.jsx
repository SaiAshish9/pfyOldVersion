import React from "react";
import AOS from "aos";

import opportunityIcon1 from "./img/opportunityIcon1.svg";
import opportunityIcon2 from "./img/opportunityIcon2.svg";
import opportunityIcon3 from "./img/opportunityIcon3.svg";

AOS.init();
const OpportunityContainer = () => (
  <div className="opportunity-container">
    <div className="content-container">
      <h1 data-aos="fade-up" className="opportunity__h1">
        With Pracify you can work from wherever you want, <br />
        whenever you want.
      </h1>
      <p data-aos="fade-up" className="opportunity__p">
        Get paid for completing tasks online.
      </p>
    </div>
    <div className="opportunity-container-two">
      <div className="opportunity-subContainer-two">
        <img
          data-aos="fade-up"
          src={opportunityIcon1}
          alt=""
          className="opportunity-subContainer-two__img"
        />
        <h3 data-aos="fade-up" className="h3 opportunity-subContainer-two__h3">
          Jobs For Everyone
        </h3>
        <p data-aos="fade-up" className="opportunity-subContainer-two__p">
          Energetic individual looking <br /> to showcase excellent{" "}
        </p>
      </div>

      <div className="opportunity-subContainer-two">
        <img
          data-aos="fade-up"
          src={opportunityIcon3}
          alt=""
          className="opportunity-subContainer-two__img"
        />
        <h3 data-aos="fade-up" className="h3 opportunity-subContainer-two__h3">
          Work On The Go
        </h3>
        <p data-aos="fade-up" className="opportunity-subContainer-two__p">
          Energetic individual looking <br /> to showcase excellent{" "}
        </p>
      </div>

      <div className="opportunity-subContainer-two">
        <img
          data-aos="fade-up"
          src={opportunityIcon2}
          alt=""
          className="opportunity-subContainer-two__img"
          style={{ marginRight: "12px" }}
        />
        <h3 data-aos="fade-up" className="h3 opportunity-subContainer-two__h3">
          Assured Payments
        </h3>
        <p data-aos="fade-up" className="opportunity-subContainer-two__p">
          Energetic individual looking <br /> to showcase excellent{" "}
        </p>
      </div>
    </div>
  </div>
);

export default OpportunityContainer;
