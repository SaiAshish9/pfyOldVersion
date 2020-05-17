import React from "react";
import AOS from "aos";
import googleStoreIcon from "./img/downloadGoogleStoreIcon.png";
import mockup from "./img/phone.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

AOS.init();
const DownloadAppContainer = () => {
  return (
    <div className="download-app-container">
      <div className="download-app-content">
        <div className="download-app-text">
          <h1 data-aos="fade-up" className="download-app__h1">
            Work For Your Favourite Companies <br /> On #Pracify.
          </h1>
          <p data-aos="fade-up" className="download-app__p">
            Download the Pracify app for awesome work opportunities!
          </p>
        </div>
        <div className="download-app-icon">
          <a
            data-aos="fade-up"
            href="https://play.google.com/store/apps/details?id=com.pracify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googleStoreIcon}
              alt=""
              // onClick={handleDownload}
              className="download-app__icon"
            />
          </a>
        </div>
      </div>
      <div className="download-app-img">
        <img
          data-aos="fade-up"
          src={mockup}
          alt=""
          className="download-app__img"
        />
      </div>
    </div>
  );
};

export default DownloadAppContainer;
