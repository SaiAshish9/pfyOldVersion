import React, { useState } from "react";
import { Button, Select } from "antd";
import "./index.css";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Option } = Select;

const data = [
  {
    title: "Internship Preferences",
    options: [
      { title: "Business Development" },
      { title: "Campus Ambassador" },
      { title: "Web Development" },
      { title: "Digital Marketing" },
      { title: "Mobile App Development" },
      { title: "Social Media Marketing" },
      { title: "Operations" },
      { title: "Marketing" },
      { title: "Content Writing" },
      { title: "Human Resources" },
      { title: "Law/Legal" },
      { title: "Graphic Design" },
    ],
  },
  {
    title: "Gig Preferences",
    options: [
      { title: "Business Development" },
      { title: "Research & Auditing" },
      { title: "Data Moderation" },
      { title: "Marketing" },
      { title: "Freelance" },
    ],
  },
];

const Preferences = ({ history }) => {
  const media = useMediaQuery({
    query: "(max-width:600px)",
  });

  const [internshipPreferences, setInternshipPreferences] = useState([]);
  const [gigPreferences, setGigPreferences] = useState([]);

  return (
    <div
      style={{
        padding: media ? "5rem 0" : "5rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: media ? "center" : "",
      }}
    >
      {data.map((i, k) => (
        <div
          key={k}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: media ? "center" : "",
          }}
        >
          <h1>{i.title}</h1>

          <div
            style={{
              display: "flex",
              //   flexDirection: media ? "column" : "row",
              justifyContent: media ? "space-between" : "",
              flexWrap: "wrap",
              width: "90vw",
              padding: "2rem 0",
            }}
          >
            {k === 0 &&
              i.options.map((a, b) => (
                <Button
                  className="btn"
                  key={b}
                  onClick={() => {
                    !internshipPreferences.includes(a.title)
                      ? setInternshipPreferences([
                          ...internshipPreferences,
                          a.title,
                        ])
                      : setInternshipPreferences(
                          internshipPreferences.filter((x) => x !== a.title)
                        );
                  }}
                  style={{
                    height: media ? "3.7rem" : "3.5rem",
                    width: media ? "49%" : "12rem",
                    padding: media ? "15px 5px" : 10,
                    borderRadius: 30,
                    border:
                      internshipPreferences.includes(a.title) &&
                      "2px solid #00bfa6",
                    color: internshipPreferences.includes(a.title) && "#00bfa6",
                    marginRight: !media && "1rem",
                    marginBottom: "1.5rem",
                    boxShadow: "none !important",
                  }}
                >
                  {media && (
                    <p
                      style={{
                        textAlign: media ? "center" : "start",
                        whiteSpace: "normal",
                        wordBreak: "break-all",
                      }}
                    >
                      {a.title}
                    </p>
                  )}
                  {!media && a.title}
                </Button>
              ))}

            {k === 1 &&
              i.options.map((a, b) => (
                <Button
                  key={b}
                  className={
                      !gigPreferences.includes(a.title)?"btn":"btn1"
                  }
                  onClick={() => {
                    !gigPreferences.includes(a.title)
                      ? setGigPreferences([...gigPreferences, a.title])
                      : setGigPreferences(
                          gigPreferences.filter((x) => x !== a.title)
                        );
                  }}
                  style={{
                    height: media ? "3.7rem" : "3.5rem",
                    width: media ? "49%" : "12rem",
                    padding: media ? "15px 5px" : 10,
                    borderRadius: 30,
                    border:
                      gigPreferences.includes(a.title) && "2px solid #00bfa6",
                    color: gigPreferences.includes(a.title) && "#00bfa6",
                    marginRight: !media && "1rem",
                    marginBottom: "1.5rem",
                    boxShadow: "none !important",
                    boxOutline: "none !important",
                  }}
                >
                  {media && (
                    <p
                      style={{
                        textAlign: media ? "center" : "start",
                        whiteSpace: "normal",
                        wordBreak: "break-all",
                      }}
                    >
                      {a.title}
                    </p>
                  )}
                  {!media && a.title}
                </Button>
              ))}
          </div>
        </div>
      ))}

      <Select
        // value={city}
        className="city-input"
        // onChange={handleCity}
        placeholder="Select Profession"
        bordered={false}
        style={{
          width: "15rem",
          borderBottom: "2px solid #d3d3d3",
          paddingBottom: 3,
          fontSize: "1rem",
        }}
      >
        {/* FIXME use all city data  */}
        {["Dehi", "kolkata", "Mumbai", "Telangana", "Uttar Pradesh"].map(
          (city, index) => (
            <Option value={city} key={index}>
              {city}
            </Option>
          )
        )}
      </Select>
      <div style={{ display: "flex", margin: "3rem 0 2rem" }}>
        <Button
          onClick={() => {
            history.push("/login");
          }}
          style={{
            borderRadius: 7,
            height: "2.7rem",
            width: "9rem",
            color: "#00bfa6",
            fontWeight: 600,
            marginRight: "1rem",
            border: "1px solid #00bfa6",
          }}
        >
          Skip
        </Button>
        <Button
          onClick={() => {
            history.push("/home");
          }}
          style={{
            borderRadius: 7,
            height: "2.7rem",
            width: "9rem",
            background: "#00bfa6",
            color: "#fff",
            fontWeight: 600,
            border: "1px solid #00bfa6",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Preferences);
