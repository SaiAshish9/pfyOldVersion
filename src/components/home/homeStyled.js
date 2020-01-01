import styled from "styled-components";

const FrontBlockStyled = styled.div`
  /* font-size:2.5vh; */
  width: 100%;
  height: 100%;
  background-color: #d3d3d3;
  display: flex;
  align-items: center;

  .content-background {
    display: flex;
    align-items: center;
    width: 80%;
    height: 80%;
    background-color: #f8f8f8;

    border-radius: 0% 30% 30% 0% / 0% 50% 50% 0%;

    .content-data {
      width: 50%;
      margin-left: 152px;
      /* color:gray; */
    }
    .content-image {
      width: 50%;
      height: 90%;
      background-color: lightPink;
      position: relative;
      left: 164px;
    }
  }
`;

const StepIncludeStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 400%;
  background: lightCyan;
  .step-one-block {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 15%;
    background: lightYellow;
    margin-bottom: 108px;
    .step-one {
      display: flex;
      align-items: center;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: lightGray;
      border-radius: 180px 0% 0% 180px / 50% 0% 0% 50%;
      .step-one-content {
      }
      .step-one-image {
        height: 70%;
        width: 20%;
        background-color: lightGreen;
      }
    }
  }
  .step-three-block {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 15%;
    background: lightYellow;
    margin-bottom: 108px;
    .step-three {
      display: flex;
      align-items: center;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: lightGray;
      border-radius: 180px 0% 0% 180px / 50% 0% 0% 50%;
      .step-three-content {
      }
      .step-three-image {
        height: 70%;
        width: 20%;
        background-color: lightGreen;
      }
    }
  }
  .step-two-block {
    display: flex;
    align-items: center;
    height: 15%;
    background: lightYellow;
    margin-bottom: 108px;
    .step-two {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: lightGray;
      border-radius: 0px 180px 180px 0px / 0% 50% 50% 0%;

      .step-two-content {
      }

      .step-two-image {
        height: 70%;
        width: 20%;
        background-color: lightGreen;
      }
    }
  }
  .step-four-block {
    display: flex;
    align-items: center;
    height: 15%;
    background: lightYellow;
    margin-bottom: 108px;
    .step-four {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: lightGray;
      border-radius: 0px 180px 180px 0px / 0% 50% 50% 0%;

      .step-four-content {
      }
      .step-four-image {
        height: 70%;
        width: 20%;
        background-color: lightGreen;
      }
    }
  }
`;

const WhyItWorkStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 150%;
  background-color: rgba(125, 009, 188, 0.1);
  .whyItWork-block {
    height: 95%;
    width: 95%;
    background-color: rgba(025, 090, 088, 0.1);
    border-radius: 80px 0px 0px 80px;

    .whyItWork-container {
      height: 80%;
      width: 80%;
      margin: auto;
      display: grid;
      grid-template-columns: auto auto;
      grid-row-gap: 40px;
      grid-column-gap: 40px;
    }
    .whyItWork-item {
      border: solid black 1px;
      justify-items: center;
    }
  }
`;

const CompanyWhoTrustStyled = styled.div`
  padding: 32px;
  .company-icon-block {
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    .company-icon {
      padding: 40px;
      box-shadow: 1px 1px 10px black;
    }
  }
`;

const TestimonialStyled = styled.div`
  background-color: rgba(121, 031, 103, 0.2);
  .testimonial-block {
    width: 95%;
    background-color: rgba(001, 131, 003, 0.2);
    border-radius: 0% 20% 20% 0% / 0% 50% 50% 0%;
    padding: 80px 0px;
    .slider {
      width: 50%;
      margin: auto;
      .slider-content {
        text-align: center;
      }
    }
  }
`;

const FooterStyled = styled.div`
  color: white;
  background-color: black;
`;

export {
  FrontBlockStyled,
  StepIncludeStyled,
  WhyItWorkStyled,
  CompanyWhoTrustStyled,
  TestimonialStyled,
  FooterStyled
};
