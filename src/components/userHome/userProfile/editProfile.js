import React, {useState} from 'react';
import {Modal, Button, Row, Col, Upload,message, Input, DatePicker, Select, InputNumber} from 'antd';
import './editProfile.scss';
import userImg from './user.svg';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import {tokenHeader} from '../../../constant/tokenHeader';
import Cookies from 'js-cookie'

const myToken = Cookies.get('token')


const { Option } = Select;

export default function EditProfile(props) {

  const { control, handleSubmit, watch, register } = useForm();
  const onSubmit = data => {
    console.log("%c submitted data ", 'font-size: 20px, color: red')
    console.table(data)
    const myObj = {...data, dob:data.dob._d.toISOString() };
    const name = data.name.trim().split(' ');
    // const hasLastName = name.length  >= 2
    if( name.length  >= 2){
      myObj.firstName = name[0]
      myObj.lastName = name[1]
    }
    delete myObj.name;
    // myObj.firstName = data.name.trim().split(' ')
    console.table(myObj)
    const url = 'user/update';
    setConfirmLoading(true)
    axios.put(url, myObj, tokenHeader)
      .then(res => {
        console.log('RESPONSE IS ')
        console.log(res.data)
        setConfirmLoading(false)
        props.isClose()
        // setVisible(false)
      })
    

  }


  const imgProps = {
    name: 'image',
    action: 'https://pracify.com/testing/user/check_image',
    headers: { token:  myToken},
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        // const url = 'user/check_image';
        // axios.post(url,data)
        //   .then()
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
    
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

      // const showModal = () => {
      //   setVisible(true);
      // };
    
      const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            // setVisible(false)
            setConfirmLoading(false)
        }, 2000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        props.isClose()
        // setVisible(false)
      };

      const email = watch("email")
      console.log("%c Email is " + email , 'font-size: 25px')

      

    return (
        <div  style={{marginTop: "0rem"}}>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal with async logic
        </Button> */}
        <Modal
          width="1000px"
            className="user-edit-profile-modal"
          title="Edit Profile"
          visible={ props.show}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[
            // <Button style={{backgroundColor: "#252eb7", padding: "0 2.5rem", borderRadius: "5rem" , height: "2.5rem"}} key="submit" type="primary" loading={confirmLoading} onClick={handleOk}>
            //   Done
            // </Button>,
          ]}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
          <Row style={{padding: "0 2rem"}}  justify="center">
            <Col  style={{display: "flex", padding: "1rem"}} span={12}>
              <div className="user-icon" style={{backgroundColor: "#ccc"}}>
                <img src={userImg} />
              </div>
              <div className="upload-btn" style={{ paddingLeft: "3rem", alignSelf: "center"}}>
              <Upload {...imgProps}>
                <Button style={{backgroundColor: "#137efc", color: "#fff", padding: "0 2rem" }}>
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
            <Col span={12} style={{padding: "1rem"}}>
                <div style={{fontSize: "1rem", fontWeight: 500}} >Name</div>
                <Controller
                as={<Input placeholder="" />}
                name="name"
                control={control}
              />
            </Col>
          </Row>
          <Row justify="center" style={{padding: "1rem 2rem 0 2rem"}}>
            
            <Col span={12} style={{padding: "1rem"}}>
                <div style={{fontSize: "1rem", fontWeight: 500}} >Date Of Birth</div>
                <Controller
                  as={<DatePicker placeholder="" style={{ width: '100%' }} />}
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
            <Col span={12} style={{padding: "1rem"}}>
                <div style={{fontSize: "1rem", fontWeight: 500}} >College Name</div>
                <Controller
                  as={<Input placeholder="" />}
                  name="collegeName"
                  control={control}
                />
            </Col>
            <Col span={12} style={{padding: "1rem"}}>
                <div style={{fontSize: "1rem", fontWeight: 500}} >City</div>
                <Controller
                  as={<Input placeholder="" />}
                  name="city"
                  control={control}
                />
            </Col>
            <Col span={12} style={{padding: "1rem"}}>
                <div style={{fontSize: "1rem", fontWeight: 500}} >Gender</div>
                <Controller
                  as={<Select style={{width: "100%"}} placeholder="Select your gender" >
                        <Option value="M">Male</Option>
                        <Option value="F">Female</Option>
                      </Select>}
                  name="gender"
                  control={control}
                />
                {/* <Select style={{width: "100%"}}  defaultValue="Male" >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                </Select> */}
                
            </Col>
            <Col span={24} style={{textAlign: "center"}}>
              <Button loading={confirmLoading}  htmlType="submit" style={{backgroundColor: "#252eb7", padding: "0 2.5rem", borderRadius: "5rem" , height: "2.5rem"}} key="submit" type="primary" >
                Done
              </Button>
            </Col>
          </Row>
          </form>
        </Modal>
      </div>
      
    )
}
