import { Button, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import detectLocationIcon from "../../../assets/img/detectLocationIcon.svg";
import { tokenHeader } from "../../../constant/tokenHeader";
import two from "./img/(2).svg";
import addIcon from "./img/addIcon.svg";
import bike2 from "./img/bike2.svg";
import bus from "./img/bus.svg";
import bus2 from "./img/bus2.svg";
import car from "./img/car.svg";
import car2 from "./img/car2.svg";
import editIcon from "./img/editIconBlue.svg";
import pin from "./img/pin.svg";
import train from "./img/train.svg";
import train2 from "./img/train2.svg";
import twoWheeler from "./img/two-wheeler.svg";

export default function OfflineAvailUser(props) {
  const vehiclesData = props.profileData.offlineGigs.mode;
  const offlineGigsData = props.profileData
    ? props.profileData.offlineGigs.mode
    : { bus: false, train: false, car: false, bike: false };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vehicle, setVehicle] = useState({
    bus: false,
    train: false,
    car: false,
    bike: false,
  });

  const isAnyVehicle =
    vehicle.bike || vehicle.bus || vehicle.car || vehicle.train;

  const [openConveyance, setOpenConveyance] = useState(isAnyVehicle);
  const [isYesBtn, setIsYesBtn] = useState(false);
  const [isNoBtn, setIsNoBtn] = useState(false);

  useEffect(() => {
    setVehicle(offlineGigsData);
    if (isAnyVehicle) {
      setOpenConveyance(true);
    }
  }, [offlineGigsData]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePreferenceButton = () => {
    setIsModalVisible(true);
  };

  const handleYes = () => {
    setOpenConveyance(true);
    setIsNoBtn(false);
    setIsYesBtn(true);
  };
  const handleNo = () => {
    setOpenConveyance(false);
    setIsNoBtn(true);
    setIsYesBtn(false);

    setVehicle({
      bus: false,
      train: false,
      car: false,
      bike: false,
    });
  };

  const selectVehicleHandler = (val) => {
    setVehicle({ ...vehicle, [val]: !vehicle[val] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const url = "user/update";
    let data1 = {
      offlineGigs: {
        mode: {
          ...vehicle,
        },
        location: props.profileData.offlineGigs.location,
        isWillingToTravel: isAnyVehicle,
      },
    };

    axios
      .put(url, data1, tokenHeader())
      .then((res) => {
        console.log(res.data);
        setIsModalVisible(false);
        props.isUpdate();
      })
      .catch((err) => console.log(err));
  };

  const [userLocation, setUserLocation] = useState({
    longitude: null,
    latitude: null,
    userAddress: null,
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Location service is not supported by this browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        coordinates,
        handleLocationError
      );
    }
  };

  const coordinates = (position) => {
    console.log("longitude", position.coords.longitude);
    console.log("latitude", position.coords.latitude);

    setUserLocation({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };

  return (
    <div className="offline-available-avatar-block">
      <div className="offline-available-avatar-content-block">
        <div className="icon-heading">
          <img src={two} alt="" className="offline-available-avatar-img"></img>
          <div className="offline-available-avatar-content">
            <h2>Offline Gigs</h2>
            <div className="offline-gigs">
              {userLocation.userAddress && (
                <div className="location-name">
                  <img className="pin-img" src={pin} alt="" />
                  <span>Show the location here</span>
                </div>
              )}
              {isAnyVehicle && (
                <div className="btn-and-vehicles">
                  <div className="vehicles">
                    {vehiclesData.bike ? (
                      <img className="vehicle" src={bike2} alt="" />
                    ) : null}
                    {vehiclesData.car ? (
                      <img className="vehicle" src={car2} alt="" />
                    ) : null}
                    {vehiclesData.bus ? (
                      <img className="vehicle" src={bus2} alt="" />
                    ) : null}
                    {vehiclesData.train ? (
                      <img className="vehicle" src={train2} alt="" />
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <img
          src={
            isAnyVehicle || props.profileData.offlineGigs.location
              ? editIcon
              : addIcon
          }
          alt=""
          onClick={handlePreferenceButton}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
          className="add-icon"
        />
      </div>
      <Modal
        width={780}
        title="Add Location"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-location-modal"
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          className="objective-block-one__form"
        >
          <div className="add-location-block">
            <div>
              <div className="heading-1">
                Share Your Location With Us To Perform Offline Gigs!
              </div>
              <Button
                type="primary"
                shape="round"
                className="detect-location-btn"
                onClick={getLocation}
              >
                <img
                  src={detectLocationIcon}
                  alt=""
                  className="detect-location-btn-img"
                />
                <span>Detect My Location</span>
              </Button>
            </div>
            <div>
              <div className="heading-2">
                Are you willing to perform Offline Gigs In Your City?
              </div>
              <div className="yes-no-btn">
                <Button
                  onClick={handleYes}
                  type="primary"
                  shape="round"
                  className="yes-btn"
                  style={{
                    backgroundColor: isYesBtn ? "#444584" : "#fff",
                    color: isYesBtn ? "#fff" : "#444584",
                  }}
                >
                  Yes
                </Button>
                <Button
                  onClick={handleNo}
                  type="primary"
                  shape="round"
                  className="no-btn"
                  style={{
                    backgroundColor: isNoBtn ? "#444584" : "#fff",
                    color: isNoBtn ? "#fff" : "#444584",
                  }}
                >
                  No
                </Button>
              </div>

              {isYesBtn ? (
                <div>
                  <div className="heading-3">
                    How Will You Travel To Complete Offline Gigs?
                  </div>
                  <div className="vehicles">
                    <div
                      onClick={() => selectVehicleHandler("car")}
                      style={{
                        border: vehicle["car"] ? "solid 2px #444584" : "",
                      }}
                      className="single-vehicle"
                    >
                      <img src={car} alt="" />
                      <div>Car</div>
                    </div>
                    <div
                      onClick={() => selectVehicleHandler("bus")}
                      style={{
                        border: vehicle["bus"] ? "solid 2px #444584" : "",
                      }}
                      className="single-vehicle"
                    >
                      <img src={bus} alt="" />
                      <div>Bus</div>
                    </div>
                    <div
                      onClick={() => selectVehicleHandler("train")}
                      style={{
                        border: vehicle["train"] ? "solid 2px #444584" : "",
                      }}
                      className="single-vehicle"
                    >
                      <img src={train} alt="" />
                      <div>Train</div>
                    </div>
                    <div
                      onClick={() => selectVehicleHandler("bike")}
                      style={{
                        border: vehicle["bike"] ? "solid 2px #444584" : "",
                      }}
                      className="single-vehicle"
                    >
                      <img src={twoWheeler} alt="" />
                      <div>Two wheeler</div>
                    </div>
                  </div>
                </div>
              ) : null}
              <Button
                onClick={submitHandler}
                shape="round"
                className="add-location-btn"
              >
                SAVE
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
