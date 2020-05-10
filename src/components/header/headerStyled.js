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
    background-color: #ffffff00;
    padding: 12px 55px;
    transition: all 0.6s ease;
    box-shadow: ${(props) =>
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
        font-size: 18px;
        color: #ffffff;
        &:hover {
          color: #406af8;
        }
      }
      .myLink2 {
        font-size: 18px;
        color: #ffffff;
        text-decoration: none;
        padding: 10px 10px;
        margin-right: 20px;
        &:hover {
          color: #406af8;
        }
      }
      .header__button1 {
        margin-right: 20px;
        width: 122px;
        height: 49px;
        border-radius: 6px;
        border: solid 2px #ffffff;
        background-color: transparent;

        font-size: 18px;
        color: #ffffff;
      }
      .download-app-button {
        margin-right: 20px;
        width: 200px;
        height: 49px;
        border-radius: 6px;
        background-color: #ffffff;
        border: 1px solid #fff;
        font-size: 18px;
        color: #444584;
      }
      .header__button2 {
        width: 200px;
        height: 49px;
        border-radius: 6px;
        background-color: #38bdba;
        border: 1px solid #38bdba;

        font-size: 18px;
        color: #ffffff;
      }
    }
  }

  .mobile-nav {
    display: none;
    height: 100vh;
    width: 320px;
    /* border: 1px solid; */
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
      .login-button-main-block {
        margin: auto auto 20px auto;

        .header__button1 {
          color: white;
          background: #3773b6;
        }
      }
      .header__button2__a {
        margin: auto;
        .header__button2 {
          color: white;
          background: #3773b6;
        }
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
