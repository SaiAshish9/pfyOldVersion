import { Checkbox, Collapse } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./filter.scss";
import { InternshipContext } from "../../store/internshipStore";
import { getInternshipWithStatus } from "../../api/internshipApi";

const gigData = [
  { label: "Marketing", value: "Marketing" },
  { label: "Freelance", value: "Freelance" },
  { label: "Research & Auditing", value: "Research & Auditing" },
  { label: "Business Development", value: "Business Development" },
  { label: "Data Moderation", value: "Data Moderation" },
];

const internshipData = [
  { label: "Business Development", value: "business-development" },
  { label: "Graphic Design", value: "Graphic Design" },
  { label: "Social Media Marketing", value: "social-media-marketing" },
  { label: "Web Development", value: "web-devlopment" },
  { label: "Mobile App Development", value: "mobile-app-development" },
  { label: "Human Resources", value: "human-resources" },
  { label: "Marketing", value: "marketing" },
  { label: "Content Writing", value: "content-writing" },
  { label: "Legal", value: "law" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "Campus Ambassador", value: "campus-ambassador" },
];

const Filter = () => {
  const { internship, dispatchInternship } = InternshipContext();
  const { Panel } = Collapse;

  const [internshipCategory, setInternshipCategory] = useState([]);
  const [internshipType, setInternshipType] = useState([]);
  const [gigCategory, setGigCategory] = useState([]);

  const location = useLocation().pathname;
  const isInternship =
    location === "/internships" || location === "/relatedInternships";
  const isGigs = location === "/gigs" || location === "/relatedGigs";

  const onInternshipCtgFilter = (e) => {
    const allFilterData = internshipCategory;
    const getData = e.target.value;
    const checkData = e.target.checked;

    if (getData && checkData) {
      const refineData = [...allFilterData, e.target.value];
      setInternshipCategory(refineData);
      getInternshipWithStatus(
        dispatchInternship,
        refineData.toString(),
        internshipType.toString()
      );
    } else if (getData && !checkData) {
      const dataAfterUnCheck = allFilterData.filter(
        (filterData) => filterData !== getData
      );
      setInternshipCategory(dataAfterUnCheck);
      getInternshipWithStatus(
        dispatchInternship,
        dataAfterUnCheck.toString(),
        internshipType.toString()
      );
    }
  };

  //TODO need to apply filter for gig
  const onGigCtgFilter = (e) => {
    // const allFilterData = gigCategory;
    // const getData = e.target.value;
    // const checkData = e.target.checked;
    // if (getData && checkData) {
    //   const refineData = [...allFilterData, e.target.value];
    //   setGigCategory(refineData);
    //   (, refineData.toString());
    // } else if (getData && !checkData) {
    //   const dataAfterUnCheck = allFilterData.filter(
    //     (filterData) => filterData !== getData
    //   );
    //   setGigCategory(dataAfterUnCheck);
    //   (, dataAfterUnCheck.toString());
    // }
  };

  const onInternshipTypeFilter = (e) => {
    const allTypeFilter = internshipType;
    const getData = e.target.value;
    const checkData = e.target.checked;

    if (getData && checkData) {
      const refineData = [...allTypeFilter, e.target.value];
      setInternshipType(refineData);
      getInternshipWithStatus(
        dispatchInternship,
        internshipCategory.toString(),
        refineData.toString()
      );
    } else if (getData && !checkData) {
      const dataAfterUnCheck = allTypeFilter.filter(
        (filterData) => filterData !== getData
      );
      setInternshipType(dataAfterUnCheck);
      console.log("refineData", dataAfterUnCheck);
      getInternshipWithStatus(
        dispatchInternship,
        internshipCategory.toString(),
        dataAfterUnCheck.toString()
      );
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-text">
        <h1>Filters</h1>
      </div>
      <Collapse
        defaultActiveKey={
          (isGigs && ["1", "2", "3"]) || (isInternship && ["1", "2"])
        }
      >
        <Panel header="Categories" key="1">
          {isGigs && (
            <>
              {gigData.map((data, index) => (
                <Fragment key={index}>
                  <Checkbox onChange={onGigCtgFilter} value={data.value}>
                    {data.label}
                  </Checkbox>
                </Fragment>
              ))}
            </>
          )}
          {isInternship && (
            <>
              {internshipData.map((data, index) => (
                <Fragment key={index}>
                  <Checkbox onChange={onInternshipCtgFilter} value={data.value}>
                    {data.label}
                  </Checkbox>
                </Fragment>
              ))}
            </>
          )}
        </Panel>
        {isInternship && (
          <Panel header="Type" key="2">
            <Checkbox onChange={onInternshipTypeFilter} value="in-office">
              inOffice
            </Checkbox>
            <Checkbox onChange={onInternshipTypeFilter} value="work-from-home">
              Work From Home
            </Checkbox>
          </Panel>
        )}
      </Collapse>
    </div>
  );
};

export default Filter;
