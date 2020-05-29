import { Button, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import bike2 from "./bike2.svg";
import bus from "./bus.svg";
import bus2 from "./bus2.svg";
import car from "./car.svg";
import car2 from "./car2.svg";
import two from "./img/(2).svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import pin from "./pin.svg";
import train from "./train.svg";
import train2 from "./train2.svg";
import twoWheeler from "./two-wheeler.svg";
import { tokenHeader } from "../../../constant/tokenHeader";

const textToImg = {
  car: car,
  bus: bus,
  train: train,
  bike: twoWheeler,
};

const OfflineAvailUser = (props) => {
  const vehiclesData = props.profileData.offlineGigs.mode;
  const offlineGigsData = props.profileData
    ? props.profileData.offlineGigs.mode
    : { bus: false, train: false, car: false, bike: false };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openDone, setOpenDone] = useState(false);
  const [openConveyance, setOpenConveyance] = useState(false);
  const [vehicle, setVehicle] = useState({
    bus: false,
    train: false,
    car: false,
    bike: false,
  });

  useEffect(() => {
    setVehicle(offlineGigsData);
    if (
      offlineGigsData.bus ||
      offlineGigsData.train ||
      offlineGigsData.bike ||
      offlineGigsData.bike
    ) {
      setOpenConveyance(true);
    }
  }, [offlineGigsData]);

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log("ON SUBMIT ", data);
    console.log(data.objectiveTextarea);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handlePreferenceButton = () => {
    setIsModalVisible(true);
  };
  const handleYes = () => {
    // setOpenDone(true);
    setOpenConveyance(true);
  };
  const handleNo = () => {
    // setOpenDone(true);
    setOpenConveyance(false);
    setVehicle({
      bus: false,
      train: false,
      car: false,
      bike: false,
    });
  };

  // let vehicle = {
  //   "bus": false,
  //   "metro": false,
  //   "car": false,
  //   "bike": false
  // }

  const selectVehicleHandler = (val) => {
    setVehicle({ ...vehicle, [val]: !vehicle[val] });
  };
  console.table(vehicle);

  const submitHandler = (e) => {
    console.log("IN SUBMIT HANDLER");
    e.preventDefault();
    const url = "user/update";
    let data1 = {
      offlineGigs: {
        mode: {
          ...vehicle,
        },
        location: props.profileData.offlineGigs.location,
        isWillingToTravel: openConveyance,
      },
    };
    console.log("DATA IS READY");
    console.table(data1);
    axios
      .put(url, data1, tokenHeader)
      .then((res) => {
        console.log(res.data);
        setIsModalVisible(false);
        props.isUpdate();
      })
      .catch((err) => console.log(err));
  };

  let arr = [];
  if (props.profileData && props.profileData.offlineGigs.isWillingToTravel) {
    const vehiclesData = props.profileData.offlineGigs.mode;
    for (let key in vehiclesData) {
      if (vehiclesData[key]) {
        arr.push(vehiclesData);
      }
      arr = Object.entries(vehiclesData).map((data) =>
        data[1] ? data[0] : null
      );
    }
  }
  console.log("ARRAY");
  console.log(arr);

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
        <div className="" style={{ display: "flex" }}>
          <img src={two} alt="" className="offline-available-avatar-img"></img>
          <div className="offline-available-avatar-content">
            <h2>Offline Gigs</h2>
            <div className="offline-gigs">
              <div className="location-name">
                {" "}
                <img className="pin-img" src={pin} alt="" />{" "}
                {userLocation.userAddress}
                {/* {props.profileData.offlineGigs.location
                  ? props.profileData.offlineGigs.location
                  : null} */}
              </div>
              <div className="btn-and-vehicles">
                <div className="willing-to-travel-btn">Willing to travel</div>
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
            </div>
          </div>
        </div>
        <img
          src={
            vehicle.bike ||
            vehicle.bus ||
            vehicle.car ||
            vehicle.train ||
            props.profileData.offlineGigs.location
              ? editIcon
              : addIcon
          }
          alt=""
          onClick={handlePreferenceButton}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
          className="add-icon"
        />
      </div>

      {/* <Button
        type="primary"
        shape="round"
        className="offline-available-avatar-button"
        onClick={handlePreferenceButton}
      >
        Add
      </Button> */}
      <Modal
        width={"60%"}
        title="Add Location"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-loaction-modal"
      >
        <form
          // onSubmit={handleSubmit(onSubmit)}
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
                Detect My Location
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
                >
                  Yes
                </Button>
                <Button
                  onClick={handleNo}
                  type="primary"
                  shape="round"
                  className="no-btn"
                >
                  No
                </Button>
              </div>

              {openConveyance ? (
                <div>
                  <div className="heading-3">
                    How Will You Travel To Complete Offline Gigs?
                  </div>
                  <div className="vehicles">
                    <div
                      onClick={() => selectVehicleHandler("car")}
                      style={{ backgroundColor: vehicle["car"] ? "#ccc" : "" }}
                      className="single-vehicle"
                    >
                      <img src={car} alt="" />
                      <div>Car</div>
                    </div>
                    <div
                      onClick={() => selectVehicleHandler("bus")}
                      style={{ backgroundColor: vehicle["bus"] ? "#ccc" : "" }}
                      className="single-vehicle"
                    >
                      <img src={bus} alt="" />
                      <div>Bus</div>
                    </div>
                    <div
                      onClick={() => selectVehicleHandler("train")}
                      style={{
                        backgroundColor: vehicle["train"] ? "#ccc" : "",
                      }}
                      className="single-vehicle"
                    >
                      <img src={train} alt="" />
                      <div>Train</div>
                    </div>
                    <div
                      onClick={() => selectVehicleHandler("bike")}
                      style={{ backgroundColor: vehicle["bike"] ? "#ccc" : "" }}
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
                Save
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OfflineAvailUser;

// Assamese	Dogri	Hindi	Kashmiri	Maithili	Manipuri	Nepali	Punjabi	Sindhi	Telugu	Bengali
// Bodo	Gujarati	Kannada	Konkani	Malayalam	Marathi	Oriya	Santhali	Tamil	Urdu	Sanskrit
// Italian	Mandarin	Korean	Spanish	Portugese	Russian	Japanese	Arabic	French 	German
