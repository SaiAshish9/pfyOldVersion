import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import Logo from "./logo.png";
import { Alert } from "antd";

const Verification = ({ history }) => {
  const [verified, isVerified] = useState(false);
  const [loading,setLoading]=useState(true)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFkOTY4ZWZkNDIzMTE1Mjg5OTMzYTMiLCJyZXN1bWUiOiI1ZjFkOTY4ZWZkNDIzMTE1Mjg5OTMzYTIiLCJpYXQiOjE1OTU3NzQ2MDYsImV4cCI6MTYwNDQxNDYwNn0.4dB4EEAT4Pyj1YflHw8qvtrXEwIzE4gWe78LL4YlZfk

  useEffect(() => {
    if (history.location.search.split("=")[1] !== "")
      axios({
        url: "auth/verify/user",
        method: "post",
        headers: {
          token: history.location.search.split("=")[1],
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: {
          userID: "5f1d968efd423115289933a3",
        },
      })
        .then((data) => {
          if (data.status === 200) isVerified(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      {history.location.search !== "" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          {!loading && verified ? (
            <Alert
              style={{ width: "15rem", position: "absolute", top: "10vh" }}
              message="Verified"
              type="success"
              showIcon
              closable
            />
          ) : !loading&&(
            <>
              <Alert
                style={{ width: "15rem", position: "absolute", top: "10vh" }}
                message="Invalid Token"
                type="error"
                showIcon
                closable
              />
            </>
          )}

          <img
            src={Logo}
            alt="pracify"
            style={{
              // height:'10rem',
              width: "10rem",
            }}
          />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default withRouter(Verification);
