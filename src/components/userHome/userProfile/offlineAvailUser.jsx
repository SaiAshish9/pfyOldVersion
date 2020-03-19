import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

import two from "./img/(2).svg";

const OfflineAvailUser = (props) => {
  const offlineGigsData = props.profileData ? props.profileData.offlineGigs.mode : {"bus": false,"train": false,"car": false,"bike": false};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openDone, setOpenDone] = useState(false);
  const [openConveyance, setOpenConveyance] = useState(false);
  const [vehicle, setVehicle] = 
  useState({
    "bus": false,
    "train": false,
    "car": false,
    "bike": false
  })

  useEffect(() => {
    setVehicle(offlineGigsData)
  }, [])

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log('ON SUBMIT ', data)
    console.log(data.objectiveTextarea);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handlePreferenceButton = () => {
    setIsModalVisible(true);
  };
  const handleYes = () => {
    setOpenDone(true);
    setOpenConveyance(true);
  };
  const handleNo = () => {
    setOpenDone(true);
    setOpenConveyance(false);
  };

  // let vehicle = {
  //   "bus": false,
  //   "metro": false,
  //   "car": false,
  //   "bike": false
  // }

  const selectVehicleHandler = (val) => {
    // vehicle = {...vehicle, [val]: !vehicle[val] }
    setVehicle( {...vehicle, [val]: !vehicle[val] })
  }
  console.table(vehicle)

//   "offlineGigs": {
//     "mode": {
//         "bus": false,
//         "train": false,
//         "car": false,
//         "bike": false
//     },
//     "location": null,
//     "isWillingToTravel": false
// },
  const submitHandler = (e) => {
    console.log('IN SUBMIT HANDLER')
    e.preventDefault();
    const url ='user/update'
    let data1 = {
      offlineGigs: {
        mode: {
          ...vehicle
        },
        location: props.profileData.offlineGigs.location,
        isWillingToTravel: openConveyance
      }
    }
    console.log('DATA IS READY')
    console.table(data1)
    axios.put(url, data1)
      .then(res => {
        console.log(res.data)
        setIsModalVisible(false)
        props.isUpdate();
      })
      .catch(err => console.log(err))
  }

  let arr =[];
  if(props.profileData && props.profileData.offlineGigs.isWillingToTravel){
    const vehiclesData = props.profileData.offlineGigs.mode;
    for(let key in vehiclesData){
      if(vehiclesData[key]){
        arr.push(vehiclesData)
      }
      arr = Object.entries(vehiclesData).map(data => data[1] ? data[0] : null)
      
    }
  }
  console.log('ARRAY')
  console.log(arr)

  return (
    <div className="offline-available-avatar-block">
      <div className="offline-available-avatar-content-block">
        <img src={two} alt="" className="offline-available-avatar-img"></img>
        <div className="offline-available-avatar-content">
          <h2>Offline Gigs</h2>
            <div>{props.profileData ? props.profileData.offlineGigs.isWillingToTravel ? 
              // props.profileData.offlineGigs
              arr.length > 0 ? arr.map(d => 
              <p key={Math.random()}>{d}</p>
                ) : null
            
            : "no" :"Can you travel to complete Gigs?"}</div>
        </div>
      </div>
      <Button
        type="primary"
        shape="round"
        className="offline-available-avatar-button"
        onClick={handlePreferenceButton}
      >
        Add
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          // onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
          className="objective-block-one__form"
        >
          <h3>Can you travel to complete Gigs?</h3>
          <div style={{display:"flex"}}>
          <Button onClick={handleYes}>YES</Button>
          <Button onClick={handleNo}>NO</Button>
          </div>
          {openConveyance && (
            <div style={{ display: "flex" }}>
              <p style={{marginLeft:"20px", color: vehicle['bike'] ? 'darkblue' : 'black' }} onClick={() => selectVehicleHandler('bike')}>BIKE</p>
              <p style={{marginLeft:"20px", color: vehicle['car'] ? 'darkblue' : 'black' }} onClick={() => selectVehicleHandler('car')}>CAR</p>
              <p style={{marginLeft:"20px", color: vehicle['train'] ? 'darkblue' : 'black' }} onClick={() => selectVehicleHandler('train')}>METRO</p>
              <p style={{marginLeft:"20px", color: vehicle['bus'] ? 'darkblue' : 'black' }} onClick={() => selectVehicleHandler('bus')}>BUS</p>
            </div>
          )}
          {openDone && (
            <Button
              htmlType="submit"
              className="objective-block-one__buttonTwo"
              style={{ alignSelf: "center", marginTop: "32px" }}
              onClick={submitHandler}
            >
              DONE
            </Button>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default OfflineAvailUser;

// Assamese	Dogri	Hindi	Kashmiri	Maithili	Manipuri	Nepali	Punjabi	Sindhi	Telugu	Bengali
// Bodo	Gujarati	Kannada	Konkani	Malayalam	Marathi	Oriya	Santhali	Tamil	Urdu	Sanskrit
// Italian	Mandarin	Korean	Spanish	Portugese	Russian	Japanese	Arabic	French 	German	