import "antd/dist/antd.css";
import React, { useEffect } from "react";
import AppRouter from "./routes/router";
import { LoginProvider } from "./store/loginStore";
// import axios from "axios";
// import Geocode from "react-geocode";

const App = () => {

  // useEffect(() => {
  //   async function success(pos) {
  //     var crd = await pos.coords;
  //     axios
  //       .get(
  //         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&key=` +
  //           // 'AIzaSyAHnfB5AFUZch9lWRWCFb1xVvt8Izthars'
  //           "AIzaSyDlCVLYeUgWxhzeCe7KoYv2EBMfNRD7_1o"
  //       )
  //       .then((data) => {
  //         console.log(data);
  //       });
  //     // Geocode.setApiKey("AIzaSyAHnfB5AFUZch9lWRWCFb1xVvt8Izthars");
  //     // Geocode.setLanguage("en");
  //     // Geocode.setRegion("in");
  //     // Geocode.enableDebug();
  //     // Geocode.fromLatLng(crd.latitude, crd.longitude).then(
  //     //   (response) => {
  //     //     const address = response.results[0].formatted_address;
  //     //     console.log(address);
  //     //   },
  //     //   (error) => {
  //     //     console.error(error);
  //     //   }
  //     // );
  //   }
  //   navigator.geolocation.getCurrentPosition(success, null, null);
  // }, []);

  return (
    <LoginProvider>
      <AppRouter />
    </LoginProvider>
  );
};
export default App;
