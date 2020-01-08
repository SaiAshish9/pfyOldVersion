import styled from "styled-components";
import avenirr from "../../font/AvenirLTStd-Medium.otf";

export const MyBlockOne = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 16px;
`;
export const MyBlockTwo = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 42px;
`;
export const MyBlockThree = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 72px;
`;
export const MyBlockFour = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 98px;
`;
export const MyBlockFive = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 120px;
`;

const FrontBlockStyled = styled.div`
  margin: 80px 0px;
  width: 100%;
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
    .one {
      background-color: #f7cdcd;
      top: 3%;
      left: 48%;
    }
    .two {
      background-color: #ffc6c6;
      top: 3%;
      left: 54%;
    }
    .three {
      background-color: #ffc6c6;
      top: 70%;
      left: 46%;
    }
    .four {
      background-color: #ffc6c6;
      top: 70%;
      left: 48%;
    }
    .five {
      background-color: #ff6666;
      bottom: 5%;
      left: 60%;
    }
    .six {
      background-color: #ff6666;
      bottom: 5%;
      left: 66%;
    }

    .content-data {
      z-index: 1;
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
        color: #333743;
      }
      .data-heading-two {
        @font-face {
          font-family: "avenir";
          src: url(avenirr);
        }
        font-family: avenir, sans-serif;
        font-weight: 600;
        font-size: 32px;
        line-height: 46px;
        color: #333743;
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
        width: 150%;
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
    width: 16px;
    left: 94%;
    top: 0%;
  }
  .block-two {
    width: 42px;
    left: 88%;
    top: 5%;
  }
  .block-three {
    width: 72px;
    left: 72%;
    top: 10%;
  }
  .block-four {
    width: 98px;
    left: 64%;
    top: 20%;
  }
  .block-five {
    width: 120px;
    left: 54%;
    top: 30%;
  }
  .block-six {
    width: 42px;
    left: 42%;
    top: 40%;
  }

  .pink-image {
    position: absolute;
    top: 12%;
    left: 70%;
    width: 48%;
  }
`;

const StepIncludeStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* background: lightCyan; */

  .step-one-block {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 364px;
    margin-bottom: 108px;
    .one {
      background-color: #c2f1f5;
      top: -2%;
      left: 72%;
    }
    .two {
      background-color: #ccebed;
      top: 20%;
      left: 8%;
    }
    .three {
      background-color: #ccebed;
      top: 20%;
      left: 10%;
    }
    .four {
      background-color: #ccebed;
      top: 20%;
      left: 80%;
    }
    .five {
      background-color: #e2f3f5;
      top: 85%;
      left: 34%;
    }
    .six {
      background-color: #cceaed;
      top: 85%;
      left: 44%;
    }
    .seven {
      background-color: #ccebed;
      top: 85%;
      left: 76%;
    }
    .eight {
      background-color: #ccebed;
      top: 85%;
      left: 78%;
    }
    .nine {
      background-color: #ccebed;
      top: 85%;
      left: 87%;
    }
    .ten {
      background-color: #47b5bd;
      top: 98%;
      left: 82%;
    }
    .eleven {
      background-color: #47b5bd;
      top: 98%;
      left: 92%;
    }
    .step-one {
      display: flex;
      align-items: center;
      width: 95%;
      height: 100%;
      background-color: #edf8f9;
      border-radius: 180px 0% 0% 180px / 50% 0% 0% 50%;
      .step-one-content {
        display: flex;
        margin-left: 200px;
        margin-right: 80px;
        z-index: 1;

        .step-number-Icon-one {
          background-color: #47b5bd;
        }
        .heading-para-one {
          width: 78%;
          .step-one-heading {
            color: #47b5bd;
          }
        }
      }
      .step-one-image {
        /* height: 70%;
        /* background-color: lightGreen; */
        position: relative;
        left: 80px;
        width: 20%;
        z-index: 1;
      }
    }
  }
  .step-three-block {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 364px;
    margin-bottom: 108px;

    .one {
      background-color: #f3f702;
      top: -2%;
      left: 72%;
    }
    .two {
      background-color: #f3f702;
      top: 20%;
      left: 8%;
    }
    .three {
      background-color: #f3f587;
      top: 20%;
      left: 10%;
    }
    .four {
      background-color: #f6f7a3;
      top: 20%;
      left: 80%;
    }
    .five {
      background-color: #f6f7a3;
      top: 85%;
      left: 34%;
    }
    .six {
      background-color: #f6f7a3;
      top: 85%;
      left: 44%;
    }
    .seven {
      background-color: #f6f7a3;
      top: 85%;
      left: 76%;
    }
    .eight {
      background-color: #f7fa5f;
      top: 85%;
      left: 78%;
    }
    .nine {
      background-color: #f3f587;
      top: 85%;
      left: 87%;
    }
    .ten {
      background-color: #f6f7a3;
      top: 98%;
      left: 82%;
    }
    .eleven {
      background-color: #f3f587;
      top: 98%;
      left: 92%;
    }
    
    .step-three {
      display: flex;
      align-items: center;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: #FFFCEB;
      border-radius: 180px 0% 0% 180px / 50% 0% 0% 50%;
      .step-three-content {
        display: flex;
        margin-left: 200px;
        margin-right: 80px;
        z-index: 1;
        .step-number-Icon-three {
          background-color: #ffd900;
        }
        .heading-para-three{
          width:78%;
        }
        .step-three-heading {
        }
      }
      .step-three-image {
        z-index: 1;
        width: 30%;
      }
    }
  }
  .step-two-block {
    position: relative;
    display: flex;
    align-items: center;
    height: 364px;
    margin-bottom: 108px;
    .one {
      background-color: #7ccc33;
      top: 5%;
      left: 50%;
    }
    .two {
      background-color: #7ccc33;
      top: 5%;
      left: 60%;
    }
    .three {
      background-color: #ddf1c9;
      top: 28%;
      left: 66%;
    }
    .four {
      background-color: #ddf1c9;
      top: 28%;
      left: 71%;
    }
    .five {
      background-color: #ddf1c9;
      left: 14%;
      top: 98%;
    }
    .six {
      background-color: #7ccc33;
      top: 98%;
      left: 19%;
    }
    .seven {
      background-color: #7ccc33;
      top: 98%;
      left: 28%;
    }

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
        display: flex;
        margin-left: 200px;
        z-index: 1;
        .step-number-Icon-two {
          background-color: #7ccc33;
        }
        .heading-para-two {
          width: 78%;
          .step-two-heading {
            color: #7ccc33;
          }
        }
      }

      .step-two-image {
        /* height: 70%; */
        z-index: 1;
        width: 15%;
        /* background-color: lightGreen; */
      }
    }
  }
  .step-four-block {
    position: relative;
    display: flex;
    align-items: center;
    height: 364px;
    /* background: lightYellow; */
    margin-bottom: 42px;
    .one {
      background-color: #00affa;
      top: 5%;
      left: 50%;
    }
    .two {
      background-color: #00affa;
      top: 5%;
      left: 60%;
    }
    .three {
      background-color: #ebf3fa;
      top: 28%;
      left: 66%;
    }
    .four {
      background-color: #b3e1f5;
      top: 28%;
      left: 71%;
    }
    .five {
      background-color: #ebf3fa;
      left: 14%;
      top: 98%;
    }
    .six {
      background-color: #00affa;
      top: 98%;
      left: 19%;
    }
    .seven {
      background-color: #00affa;
      top: 98%;
      left: 28%;
    }
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
        display: flex;
        z-index: 1;
        .step-number-Icon-four {
          background-color: #3366ff;
        }
        .heading-para-four {
          width: 78%;
          .step-four-heading {
            color: #3366ff;
          }
        }
      }
      .step-four-image {
        width: 25%;
        z-index: 1;
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
  padding-bottom: 80px;
  /* height: 100%; */
  .whyItWork-block {
    position: relative;
    height: 95%;
    width: 95%;
    background-color: #f9f9f9;
    border-radius: 80px 0px 0px 80px;
    padding-bottom: 40px;
    .one {
      position: absolute;
      background-color: #d9dada;
      top: -1%;
      left: 68%;
    }
    .two {
      position: absolute;
      background-color: #d9dada;
      top: -1%;
      left: 70%;
    }
    .three {
      position: absolute;
      background-color: #d9dada;
      top: -1%;
      left: 78%;
    }
    .four {
      position: absolute;
      background-color: #e9e9e9;
      top: 10%;
      left: 40%;
    }
    .five {
      position: absolute;
      background-color: #e9e9e9;
      top: 14%;
      left: 34%;
    }
    .six {
      position: absolute;
      background-color: #e9e9e9;
      top: 46%;
      left: 16%;
    }
    .seven {
      position: absolute;
      background-color: #e9e9e9;
      top: 46%;
      left: 24%;
    }
    .eight {
      position: absolute;
      background-color: #e9e9e9;
      top: 50%;
      left: 80%;
    }
    .nine {
      position: absolute;
      background-color: #e9e9e9;
      top: 50%;
      left: 88%;
    }
    .ten {
      position: absolute;
      background-color: #e9e9e9;
      top: 99%;
      left: 10%;
    }
    .eleven {
      position: absolute;
      background-color: #e9e9e9;
      top: 99%;
      left: 62%;
    }
    .twelve {
      position: absolute;
      background-color: #d9dada;
      top: 99%;
      left: 65%;
    }
    .thirteen {
      position: absolute;
      background-color: #d9dada;
      top: 99%;
      left: 73%;
    }

    .whyItWork-container {
      height: 80%;
      width: 80%;
      margin: 86px;
      display: grid;
      grid-template-columns: auto auto;
      grid-row-gap: 40px;
      grid-column-gap: 40px;
    }
    .whyItWork-item-one {
      display: flex;
      /* border: solid black 1px; */
      justify-items: center;
      .whyItWork-img-one {
        width: 124%;
      }
      .header-para-one {
        .whyItWork-heading-one {
          color: #ff6666;
        }
      }
    }
    .whyItWork-item-two {
      display: flex;
      justify-items: center;
      .whyItWork-img-two {
      }

      .header-para-two {
        width: 128%;
        .whyItWork-heading-two {
          color: #ffd900;
        }
      }
    }

    .whyItWork-item-three {
      display: flex;
      /* border: solid black 1px; */
      justify-items: center;
      .whyItWork-img-three {
      }

      .header-para-three {
        width: 72%;
        .whyItWork-heading-three {
          color: #7ccc33;
        }
      }
    }
    .whyItWork-item-four {
      display: flex;
      /* border: solid black 1px; */
      justify-items: center;
      .whyItWork-img-four {
      }

      .header-para-four {
        width: 72%;
        .whyItWork-heading-four {
          color: #fd8400;
        }
      }
    }
    .mainPara {
      position: relative;
      font-size: 24px;
      line-height: 1.47;
      letter-spacing: 0.1px;
      font-weight: 600;
      font-family: avenir, sans-serif;
      bottom: 12px;
      color: #333473;
      text-align: center;
      padding: 0px 160px;
    }
  }
`;

const WorkWeExecuteStyled = styled.div`
  .block-one {
    margin-left: 120px;
    .block-header-one {
      margin-top: 30px;
    }
  }
  .block-two {
    margin-right: 120px;
    .block-header-two {
      margin-top: 30px;
    }
  }
  .block-three {
    margin-left: 120px;
    .block-header-three {
      margin-top: 40px;
    }
  }
  .block-four {
    margin-right: 120px;
    .block-header-four {
      margin-top: 40px;
    }
  }
`;

const DownloadAppStyled = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content:space-evenly;
  padding: 24px 0px;

  .block-content{
    align-self: center;
    width:70%;
    text-align:center;
  }
`;

const FooterStyled = styled.div`
  /* color: white; */
  background-color: #fff;
`;

export {
  FrontBlockStyled,
  StepIncludeStyled,
  WhyItWorkStyled,
  WorkWeExecuteStyled,
  DownloadAppStyled,
  FooterStyled
};
