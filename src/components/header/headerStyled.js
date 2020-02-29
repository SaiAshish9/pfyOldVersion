import styled from "styled-components";

const MyHeader = styled.header`
  @font-face {
    font-family: Avnir;
    src: url("../../font/AvenirLTStd-Medium.otf") format("opentype");
  }
  font-family: Avnir, sans-serif;
  display: flex;
  top: 0px;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: #fff;
  padding: 12px 55px;
  transition: all 0.6s ease;
  box-shadow: ${props =>
    props.scrollEffect > 20 ? "0px 2px 16px -6px black" : "none"};

  div.logo-container {
    cursor: pointer;
    .logoIcon {
      width: 178px;
    }
  }

  div.link-container {
    display: flex;
    align-items: center;
    .myLink1 {
      text-decoration: none;
      padding: 10px 10px;
      /* margin-right: 40px; */
      color: #273152;
      /* font-weight:600; */
      font-size: 20px;
      &:hover {
        color: #406af8;
      }
    }
    .myLink2 {
      font-size: 20px;
      /* font-weight:600; */

      text-decoration: none;
      padding: 10px 10px;
      margin-right: 20px;
      color: #273152;
      &:hover {
        color: #406af8;
      }
    }
    .header__button1 {
      text-align: center;
      border: solid 1px #252eb7;
      padding: 0px 30px;
      color: #252eb7;
      height: 40px;
      font-size: 1.25em;
      margin-right: 20px;
    }
    .header__button2 {
      text-align: center;
      font-size: 1.25em;
      height: 40px;
      border: solid 1px #252eb7;
      background-color: #252eb7;
      color: #fff;
      margin-left: 12px;
    }
  }
`;

export { MyHeader };
