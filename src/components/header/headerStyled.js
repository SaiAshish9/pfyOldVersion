import styled from "styled-components";

const MyHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  .headerNav {
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

    .mobile-nav-menu {
      display: none;
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
  }

  .mobile-nav {
    display: none;
    height: 100vh;
    width: 320px;
    border: 1px solid;
    position: fixed;
    z-index: 50;
    align-self: flex-end;
    background-color: rgba(255, 255, 255, 0.9);
    .mobile-nav-link {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      .myLink1 {
        margin-bottom: 12px;
      }
      .myLink2 {
        margin-bottom: 12px;
      }
      .myLink3 {
        margin-bottom: 12px;
      }
      .myLink4 {
        margin-bottom: 12px;
      }
    }
  }

  @media screen and (max-width: 840px) {
    div.headerNav {
      padding: 0px 12px;
      height: 50px;

      div.link-container {
        display: none;
      }

      div.logo-container {
        .logoIcon {
          width: 120px;
        }
      }

      .mobile-nav-menu {
        display: block;
      }
    }
    .mobile-nav {
      display: block;
    }
  }
`;

export { MyHeader };
