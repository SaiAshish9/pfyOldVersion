import styled from "styled-components";
import avenirr from "../../font/AvenirLTStd-Medium.otf";

const FrontBlockStyled = styled.div`
  /* font-size:2.5vh; */
  margin:80px 0px;
  width: 100%;
  /* height: 100%; */
  background-color: #fff;
  display: flex;
  align-items: center;

  .content-background {
    display: flex;
    align-items: center;
    position: relative;
    width: 80%;
    height: 525px;
    background-color: #ffeeef;
    border-radius: 0% 30% 30% 0% / 0% 50% 50% 0%;

    .content-data {
      width: 50%;
      margin-left: 152px;

      .data-heading-one {
        @font-face {
          font-family: "avenir";
          src: url(avenirr);
        }
        font-family: avenir, sans-serif;
        font-weight: 700;
        font-size: 38px;
        line-height: 46px;
      }
      .data-heading-two {
        @font-face {
          font-family: "avenir";
          src: url(avenirr);
        }
        font-family: avenir, sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 46px;
        .Typewriter {
          display: inline;
        }
      }
      .data-para {
        @font-face {
          font-family: "avenir";
          src: url(avenirr);
        }
        color: #4f4f4f;
        font-family: avenir, sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
      }

      .button {
        .first-button {
          background: none;
          border: solid black 1px;
          padding: 13px 20px;
          cursor: pointer;
          box-shadow: -4px 4px black;
          border-radius: 50px;
          background-color: #ee6464;

          font-weight: 700;
          size: 18px;
          line-height: 16px;
          color: #fff;
          outline: none;

          :hover {
            background-color: #ed3833;
          }
        }
        .second-button {
          background: white;
          margin-left: 60px;
          border: solid black 1px;
          padding: 13px 36px;
          cursor: pointer;
          box-shadow: -4px 4px black;
          border-radius: 50px;

          font-weight: 700;
          size: 18px;
          line-height: 16px;
          color: #000;
          outline: none;

          :hover {
            background-color: #e6e6e6;
          }
        }
      }
    }
  }
  .block-one {
    left: 94%;
    top: 0%;
    width: 42px;
  }
  .block-two {
    left: 88%;
    top: 0%;
    width: 42px;
  }
  .block-three {
    left: 72%;
    top: 0%;
    width: 42px;
  }
  .block-four {
    left: 64%;
    top: 0%;
    width: 42px;
  }
  .block-five {
    left: 54%;
    top: 0%;
    width: 42px;
  }
  .block-six {
    left: 42%;
    top: 0%;
    width: 42px;
  }

  .pink-image {
    position: absolute;
    top: 12%;
    left: 70%;
    /* height: 60%; */
    width: 48%;
    /* height: 426px; */
  }
`;

const StepIncludeStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* background: lightCyan; */

  .step-one-block {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 364px;
    /* background: lightYellow; */
    margin-bottom: 108px;
    .step-one {
      display: flex;
      align-items: center;
      width: 95%;
      height: 100%;
      background-color: #edf8f9;
      border-radius: 180px 0% 0% 180px / 50% 0% 0% 50%;
      .step-one-content {
        margin-left: 200px;
        margin-right: 80px;
        .step-one-heading {
          color: #47b5bd;
        }
      }
      .step-one-image {
        /* height: 70%;
        /* background-color: lightGreen; */
        position: relative;
        left: 80px;
        width: 20%;
      }
    }
  }
  .step-three-block {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 364px;
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
        .step-three-heading {
        }
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
    height: 364px;
    /* background: lightYellow; */
    margin-bottom: 108px;
    .step-two {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: #f5fbef;
      border-radius: 0px 180px 180px 0px / 0% 50% 50% 0%;

      .step-two-content {
        margin-left: 200px;
        .step-two-heading {
          color: #7ccc33;
        }
      }

      .step-two-image {
        /* height: 70%; */
        width: 15%;
        /* background-color: lightGreen; */
      }
    }
  }
  .step-four-block {
    display: flex;
    align-items: center;
    height: 364px;
    /* background: lightYellow; */
    margin-bottom: 42px;
    .step-four {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: #f5f7ff;
      border-radius: 0px 180px 180px 0px / 0% 50% 50% 0%;

      .step-four-content {
        margin-left: 200px;
        .step-four-heading {
          color: #3366ff;
        }
      }
      .step-four-image {
        /* height: 70%; */
        width: 25%;
        /* background-color: lightGreen; */
      }
    }
  }
  .step-button-block {
    margin-left: 152px;
    margin-bottom: 80px;
    .step-button-one {
      background: none;
      border: solid black 1px;
      padding: 13px 20px;
      cursor: pointer;
      box-shadow: -4px 4px black;
      border-radius: 50px;
      background-color: #ee6464;

      font-weight: 700;
      size: 18px;
      line-height: 16px;
      color: #fff;
      outline: none;
      :hover {
        background-color: #ed3833;
      }
    }
    .step-button-two {
      background: white;
      margin-left: 60px;
      border: solid black 1px;
      padding: 13px 36px;
      cursor: pointer;
      box-shadow: -4px 4px black;
      border-radius: 50px;

      font-weight: 700;
      size: 18px;
      line-height: 16px;
      color: #000;
      outline: none;

      :hover {
        background-color: #e6e6e6;
      }
    }
  }
`;

const WhyItWorkStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* height: 100%; */
  .whyItWork-block {
    height: 95%;
    width: 95%;
    background-color: #F9F9F9;
    border-radius: 80px 0px 0px 80px;
    padding-bottom:40px;


    .whyItWork-container {
      height: 80%;
      width: 80%;
      margin: auto;
      display: grid;
      grid-template-columns: auto auto;
      grid-row-gap: 40px;
      grid-column-gap: 40px;
    }
    .whyItWork-item-one {
      border: solid black 1px;
      justify-items: center;
      .whyItWork-heading-one {
        color: #7ccc33;
      }
    }
    .whyItWork-item-two {
      border: solid black 1px;
      justify-items: center;
      .whyItWork-heading-two {
        color: #ff6666;
      }
    }
    .whyItWork-item-three {
      border: solid black 1px;
      justify-items: center;
      .whyItWork-heading-three {
        color: #3366ff;
      }
    }
    .whyItWork-item-four {
      border: solid black 1px;
      justify-items: center;
      .whyItWork-heading-four {
        color: #ffd900;
      }
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
