import {
  Button,
  Col,
  DatePicker,
  Input,
  message,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../../constant/tokenHeader";
import "./editProfile.scss";
import userImg from "./user.svg";

const myToken = Cookies.get("token");
const { Option } = Select;

export default function EditProfile(props) {
  const { control, handleSubmit, watch, register } = useForm();
  const onSubmit = (data) => {
    console.log("%c submitted data ", "font-size: 20px, color: red");
    console.table(data);
    const myObj = { ...data, dob: data.dob._d.toISOString() };
    const name = data.name.trim().split(" ");
    // const hasLastName = name.length  >= 2
    if (name.length >= 2) {
      myObj.firstName = name[0];
      myObj.lastName = name[1];
    }
    delete myObj.name;
    console.table(myObj);
    const url = "user/update";
    setConfirmLoading(true);
    axios.put(url, myObj, tokenHeader()).then((res) => {
      console.log("RESPONSE IS ");
      console.log(res.data);
      setConfirmLoading(false);
      props.isClose();
      // setVisible(false)
    });
  };

  const imgProps = {
    name: "image",
    action: "https://pracify.com/testing/user/check_image",
    headers: { token: myToken },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        // const url = 'user/check_image';
        // axios.post(url,data)
        //   .then()

        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // const showModal = () => {
  //   setVisible(true);
  // };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      // setVisible(false)
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    props.isClose();
    // setVisible(false)
  };

  const email = watch("email");
  console.log("%c Email is " + email, "font-size: 25px");

  let colleges = [];
  const collegeListHandler = (value) => {
    // colleges = []
    const url = `college/fetch?search=${value}`;
    console.log("URL IS " + url);
    axios.get(url, tokenHeader()).then((res) => {
      const collegeObject = res.data;
      console.log(collegeObject);

      // colleges = collegeObject.map(college =>
      //   <Option
      //       key={college['College Name']}>
      //          {college['College Name']}
      //   </Option>
      //   )

      collegeObject.forEach((college) => {
        colleges.push(
          <Option key={college["College Name"]}>
            {college["College Name"]}
          </Option>
        );
      });
    });
  };

  const [collegeData, setCollegeData] = useState([]);
  const [val, setVal] = useState(undefined);

  const CollegehandleSearch = (value) => {
    if (value) {
      console.log("val is " + value);

      // fetch(value, data => setCollegeData({data}) );
      const url = `college/fetch?search=${value}`;
      console.log("URL IS " + url);
      axios.get(url, tokenHeader()).then((res) => {
        const data = res.data;
        setCollegeData({ data });
      });
    } else {
      setCollegeData({ data: [] });
    }
  };

  // const handleChange = value => {
  //   setVal(value)
  //   console.log('value is' + value)
  // };

  let cities = [];
  const cityArr = [
    "Dehradun",
    "Amravati",
    "Jaipur",
    "Madurai",
    "Raipur",
    "Vijayawada",
    "Pilani",
    "Trivandrum",
    "Muzaffarnagar",
    "Kamarhati",
    "Alwar",
    "Bally",
    "Farrukhabad",
    "Sambhal",
    "Shimla",
    "Bhopal",
    "Solapur",
    "Moradabad",
    "Imphal",
    "Kharagpur",
    "Jalgaon",
    "Salem",
    "Madras",
    "Poona",
    "Panihati",
    "Nizamabad",
    "Dewas",
    "Mau",
    "Bharatpur",
    "Haridwar",
    "Chapra",
    "Haldia",
    "Alappuzha",
    "Bhubaneswar",
    "Aurangabad",
    "Durgapur",
    "Noida",
    "Gopalpur",
    "Korba",
    "Berhampur",
    "Ozhukarai",
    "Darbhanga",
    "Jalna",
    "Rourkela",
    "Yamunanagar",
    "Anand",
    "Ambala",
    "Bikaner",
    "Jamshedpur",
    "Ranchi",
    "Bhind",
    "New Bombay",
    "Bellary",
    "Bijapur",
    "Firozabad",
    "Bhatpara",
    "Bidar",
    "Bareilly",
    "Dhanbad",
    "Belagavi",
    "Pondicherry",
    "Faridabad",
    "Ambattur",
    "Parbhani",
    "Bathinda",
    "Ambernath",
    "Uluberia",
    "Allahabad",
    "Coimbatore",
    "Bidhan Nagar",
    "Rae Bareli",
    "Sambalpur",
    "Bengaluru",
    "Bokaro",
    "Bardhaman",
    "Burhanpur",
    "Benaras",
    "Bhusawal",
    "Bahraich",
    "Bhavnagar",
    "Jabalpur",
    "New Delhi",
    "Bilaspur",
    "Bihar Sharif",
    "Baharampur",
    "Hyderabad",
    "Trichy",
    "Chandrapur",
    "Cuttack",
    "Nagarcoil",
    "Calcutta",
    "Chittoor",
    "Raichur",
    "Panchkula",
    "Hugli and Chinsurah",
    "Tiruchirappalli",
    "Lucknow",
    "Cochin",
    "Secunderabad",
    "Hubballi-Dharwad",
    "Ichalkaranji",
    "Chandigarh",
    "Baroda",
    "Achalpur",
    "Achhnera",
    "Bhadrachalam",
    "Bharuch",
    "Bongaigaon City",
    "Chaibasa",
    "Chalakudy",
    "Chandausi",
    "Changanassery",
    "Charkhi Dadri",
    "Chatra",
    "Cherthala",
    "Chhapra",
    "Chikkamagaluru",
    "Chilakaluripet",
    "Chirala",
    "Chirkunda",
    "Chirmiri",
    "Chittur-Thathamangalam",
    "Firozpur Cantt.",
    "Gobichettipalayam",
    "Jalandhar Cantt.",
    "Kancheepuram",
    "Lachhmangarh",
    "Macherla",
    "Machilipatnam",
    "Manachanallur",
    "Jodhpur",
    "Dhule",
    "Kozhikode",
    "Nadiad",
    "Danapur",
    "Udaipur",
    "Nanded",
    "Junagadh",
    "Kakinada",
    "Karaikudi",
    "Davanagere",
    "South Dumdum",
    "Durg",
    "Ramagundam",
    "Gandhidham",
    "Erode",
    "Deoghar",
    "Ahmedabad",
    "North Dumdum",
    "Meerut",
    "Eluru",
    "Rewa",
    "Nellore",
    "Suryapet",
    "Roorkee",
    "Malegaon",
    "Thane",
    "Panvel",
    "Serampore",
    "Ajmer",
    "Fatehpur",
    "Begusarai",
    "Ongole",
    "Mysore",
    "Hospet",
    "Mangalore",
    "Etawah",
    "Vellore",
    "Mahesana",
    "Muzaffarpur",
    "Afzalpur",
    "Faridkot",
    "Farooqnagar",
    "Fatehabad",
    "Fatehpur Sikri",
    "Fazilka",
    "Firozpur",
    "Forbesganj",
    "Rafiganj",
    "Safidon",
    "Safipur",
    "Sirhind Fatehgarh Sahib",
    "Vijayanagaram",
    "Agra",
    "Gaya",
    "Gorakhpur",
    "Gwalior",
    "Aligarh",
    "Singrauli",
    "Jamnagar",
    "Goa",
    "Karimnagar",
    "Sri Ganganagar",
    "Nangloi Jat",
    "Srinagar",
    "Vizag",
    "Gurgaon",
    "Nagpur",
    "Siliguri",
    "Guntur",
    "Guwahati",
    "Agartala",
    "Bhagalpur",
    "Shivamogga",
    "Sagar",
    "Karawal Nagar",
    "Gandhinagar",
    "Khora",
    "Jhansi",
    "Mathura",
    "Arrah",
    "Amroha",
    "Shivpuri",
    "Thanjavur",
    "Tiruvottiyur",
    "Orai",
    "Tiruvannamalai",
    "Loni",
    "Sirsa",
    "Tirupati",
    "Panipat",
    "Morvi",
    "Jammu",
    "Rajpur Sonarpur",
    "Jaunpur",
    "Shahjahanpur",
    "Rajkot",
    "Jalandhar",
    "Ujjain",
    "Rajahmundry",
    "Raiganj",
    "Adalaj",
    "Alirajpur",
    "Ambejogai",
    "Anjangaon",
    "Anjar",
    "Asarganj",
    "Bhuj",
    "Dalli-Rajhara",
    "Darjiling",
    "Dhoraji",
    "Ganjbasoda",
    "Gopalganj",
    "Hajipur",
    "Jagdalpur",
    "Jaggaiahpet",
    "Jagraon",
    "Jagtial",
    "Jalpaiguri",
    "Jamalpur",
    "Tumkur",
    "Kanpur",
    "Kota",
    "Kurnool",
    "Sikar",
    "Kulti",
    "Nashik",
    "Kolhapur",
    "Karnal",
    "Kottayam",
    "Kollam",
    "Khandwa",
    "Akola",
    "Rohtak",
    "Kadapa",
    "Thoothukudi",
    "Katihar",
    "Khammam",
    "Kamalpur",
    "Khalapur",
    "Akot",
    "Ambikapur",
    "Anakapalle",
    "Ankleshwar",
    "Arakkonam",
    "Pallavaram",
    "Rampur",
    "Mirzapur",
    "Amritsar",
    "Anantapur",
    "Unnao",
    "Sonipat",
    "Tiruppur",
    "Vapi",
    "Purq (Urban Agglomeration)",
    "Qadian",
    "Surat",
    "Satara",
    "Saharanpur",
    "Asansol",
    "Sangl",
    "Thrissur",
    "Maheshtala",
    "Satna",
    "Bulandshahr",
    "Avadi",
    "Arvi",
    "Bhimavaram",
    "Dharmavaram",
    "Gudivada",
    "Guruvayoor",
    "Kapadvanj",
    "Kavali",
    "Kovvur",
    "Lonavla",
    "Mahuva",
    "Malavalli",
    "Manavadar",
    "Mandvi",
    "Mangalvedhe",
    "Manvi",
    "Mavelikkara",
    "Mavoor",
    "Muvattupuzha",
    "Nandivaram-Guduvancheri",
    "Navalgund",
    "Navsari",
    "Neyveli (TS)",
    "Nidadavole",
    "Nuzvid",
    "O' Valley",
    "Paravoor",
    "Parvathipuram",
    "Murwara",
    "Bhiwandi",
    "Bhilwara",
    "Warangal",
    "Howrah",
    "Aizawl",
    "Bhiwani",
    "Arwal",
    "Bageshwar",
    "Baleshwar Town",
    "Baripada Town",
    "Bhawanipatna",
    "Gadwal",
    "Haldwani",
    "Karwar",
    "Khowai",
    "Ladwa",
    "Lakshmeshwar",
    "Longowal",
    "Lunawada",
    "Manawar",
    "Mandawa",
    "Mandi Dabwali",
    "Manwath",
    "Mhaswad",
    "Mhow Cantonment",
    "Mhowgaon",
    "Nabadwip",
    "Nanded-Waghala",
    "Narwana",
    "Nathdwara",
    "Buxar",
    "Raxaul Bazar",
    "Nandyal",
    "Madhyamgram",
    "Bombay",
    "Adityapur",
    "Adyar",
    "Byasanagar",
    "Gooty",
    "Jhumri Tilaiya",
    "Kalyan",
    "Kamareddy",
    "Kayamkulam",
    "Koyilandy",
    "Kyathampalle",
    "Mandya",
    "Mayang Imphal",
    "Merta City",
    "Mira-Bhayandar",
    "Miryalaguda",
    "Narayanpet",
    "Neyyattinkara",
    "Panniyannur",
    "Periyakulam",
    "Periyasemur",
    "Pipar City",
    "Ghaziabad",
    "Azamgarh",
    "Hazaribag",
    "Kagaznagar",
    "Mahnar Bazar",
    "Nowrozabad (Khodargama)",
    "Ozar",
    "Tezpur",
    "Thodupuzha",
    "Vizianagaram",
    "Zaidpur",
    "Zamania",
    "Zira",
    "Zirakpur",
    "Zunheboto",
  ];

  cityArr.forEach((city) => {
    cities.push(<Option key={city}>{city}</Option>);
  });

  const options =
    collegeData.data && collegeData.data.length > 0
      ? collegeData.data.map((d) => (
          <Option key={d["College Name"]}>{d["College Name"]}</Option>
        ))
      : null;
  return (
    <div style={{ marginTop: "0rem" }}>
      {/* <Button type="primary" onClick={showModal}>
          Open Modal with async logic
        </Button> */}
      <Modal
        width="1000px"
        className="user-edit-profile-modal"
        title="Edit Profile"
        visible={props.show}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={
          [
            // <Button style={{backgroundColor: "#252eb7", padding: "0 2.5rem", borderRadius: "5rem" , height: "2.5rem"}} key="submit" type="primary" loading={confirmLoading} onClick={handleOk}>
            //   Done
            // </Button>,
          ]
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row style={{ padding: "0 2rem" }} justify="center">
            <Col style={{ display: "flex", padding: "1rem" }} span={12}>
              <div className="user-icon" style={{ backgroundColor: "#ccc" }}>
                <img src={userImg} alt=""/>
              </div>
              <div
                className="upload-btn"
                style={{ paddingLeft: "3rem", alignSelf: "center" }}
              >
                <Upload {...imgProps}>
                  <Button
                    style={{
                      backgroundColor: "#137efc",
                      color: "#fff",
                      padding: "0 2rem",
                    }}
                  >
                    Upload Photo
                  </Button>
                </Upload>
              </div>
            </Col>
            {/* <Col style={{padding: "1rem"}} className="email" span={12}>
              <div style={{fontSize: "1rem", fontWeight: 500}} >Email</div>
              <Controller
                as={<Input placeholder="" />}
                name="email"
                control={control}
              />
            
            </Col> */}
            <Col span={12} style={{ padding: "1rem" }}>
              <div style={{ fontSize: "1rem", fontWeight: 500 }}>Name</div>
              <Controller
                as={<Input placeholder="" />}
                name="name"
                control={control}
              />
            </Col>
          </Row>
          <Row justify="center" style={{ padding: "1rem 2rem 0 2rem" }}>
            <Col span={12} style={{ padding: "1rem" }}>
              <div style={{ fontSize: "1rem", fontWeight: 500 }}>
                Date Of Birth
              </div>
              <Controller
                as={<DatePicker placeholder="" style={{ width: "100%" }} />}
                name="dob"
                control={control}
              />
            </Col>
            {/* <Col span={12} style={{padding: "1rem"}}>
                <div style={{fontSize: "1rem", fontWeight: 500}} >Mobile Number</div>
                <Controller
                  as={<InputNumber max={9999999999} style={{width: '100%'}}  />}
                  name="phone"
                  control={control}
                />
            </Col> */}
            <Col span={12} style={{ padding: "1rem" }}>
              <div style={{ fontSize: "1rem", fontWeight: 500 }}>
                College Name
              </div>
              <Controller
                as={
                  <Select
                    showSearch
                    value={val}
                    placeholder={"please select college"}
                    style={{ width: "100%" }}
                    // defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onSearch={CollegehandleSearch}
                    // onChange={handleChange}
                    notFoundContent={null}
                  >
                    {options}
                  </Select>
                }
                name="collegeName"
                control={control}
              />
            </Col>
            <Col span={12} style={{ padding: "1rem" }}>
              <div style={{ fontSize: "1rem", fontWeight: 500 }}>City</div>
              <Controller
                as={
                  <Select
                    // mode="multiple"
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="please select city"
                    defaultValue={[]}
                    // onChange={cityHandler}
                  >
                    {cities}
                  </Select>
                }
                name="city"
                control={control}
              />
            </Col>
            <Col span={12} style={{ padding: "1rem" }}>
              <div style={{ fontSize: "1rem", fontWeight: 500 }}>Gender</div>
              <Controller
                as={
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Select your gender"
                  >
                    <Option value="M">Male</Option>
                    <Option value="F">Female</Option>
                  </Select>
                }
                name="gender"
                control={control}
              />
              {/* <Select style={{width: "100%"}}  defaultValue="Male" >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                </Select> */}
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <Button
                loading={confirmLoading}
                htmlType="submit"
                style={{
                  backgroundColor: "#252eb7",
                  padding: "0 2.5rem",
                  borderRadius: "5rem",
                  height: "2.5rem",
                }}
                key="submit"
                type="primary"
              >
                Done
              </Button>
            </Col>
          </Row>
        </form>
      </Modal>
    </div>
  );
}
