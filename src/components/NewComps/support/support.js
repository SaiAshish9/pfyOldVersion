import React, {useState, Fragment, useEffect} from 'react';
import {Modal, Button, Row, Col, Collapse, Form, Input, Upload, Icon } from 'antd';
import gig from './img/gig.svg';
import other from './img/other.svg';
import internship from './img/internship.svg';
import verification from './img/verification.svg';
import Axios from 'axios';
// import TextArea from 'antd/lib/input/TextArea';

const { TextArea } = Input;


const { Panel } = Collapse;
export default function Support(props) {

    const [visible, setVisible] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const [supportData, setSupportData] = useState(null)
    const [selectedComp, setSelectedComp] = useState("supportTiles")

    const getFAQ = (val) => {
      Axios.get('support/fetch')
        .then(res => {
          let data = res.data;
          if(val == "internshipSupport"){
            data = data.internshipSupport;
            setSupportData(data)
          }
           console.log(res.data)
        })
    }

    function getBase64(img, callback) {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
      
    }

    const ImageUploadHandler = info => {
      if (info.file.status === 'uploading') {
        // this.setState({ loading: true });
        console.log("loading/..........")
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imgurl => 
          setImageUrl(imgurl)
        );
        console.log("successfully uploaded ", info.file)
        console.log(imageUrl)
      }
    };

    

    const showModal = () => {
        setVisible(true)
      };
    
      const handleOk = e => {
        console.log(e);
        setVisible(false)
        setSelectedComp("supportTiles")
        props.isClose();
      };
    
      const handleCancel = e => {
        console.log(e);
        setVisible(false);
        setSelectedComp("supportTiles")
        props.isClose();
      };

    const selectHandler = val => {
      console.log(val)
      setSelectedComp("faq")
      getFAQ(val);
    }

    const contactUsHandler = () =>{
      console.log('hey you clicked CONTACT US')
      setSelectedComp("queryFrom")
    }
    

    const supportTiles = (
      <div className="support-block">
            <div onClick={() => selectHandler("internshipSupport")} className="support-single-block">
              <div style={{margin: "auto"}}>
                <img src={internship} alt="" />
                <br/>
                <span className="support-single-block-text">Internship Support</span>
              </div>
              
            </div>
            <div onClick={() => selectHandler("verification")} className="support-single-block">
            <div style={{margin: "auto"}}>
                <img src={verification} alt="" /> <br/>
                <span className="support-single-block-text">Verification  Support</span>
              </div>
            </div>
            <div onClick={() => selectHandler("gig")} className="support-single-block">
            <div style={{margin: "auto"}}>
                <img src={gig} alt="" /> <br/>
                <span className="support-single-block-text">Gig Support</span>
              </div>
            </div>
            <div onClick={() => selectHandler("other")} className="support-single-block">
            <div style={{margin: "auto"}}>
                <img src={other} alt="" /> <br/>
                <span className="support-single-block-text">Other Support</span>
              </div>
            </div>
          </div> ); 
    

    const faq = (
  <div className="support-faq">
    <div >
    <Collapse expandIconPosition={"right"}
     style={{border: "none", backgroundColor:"#fff"}}
      accordion>
      {supportData ?
      supportData.map((data, index) => 
      <Panel header={data.question} key={index}>
        <p>{data.answer}</p>
      </Panel>
        ) : null}
    </Collapse>
    <div className="contact-us" >
    ----STILL NEED HELP? <span onClick={contactUsHandler} className="contact-us-link">CONTACT US!----</span> 
    </div>
    </div>
    <Button className="support-faq-submit-btn" type="primary">Submit</Button>
    </div>);

    const queryFrom = (
      <div className="query-form">
            <div className="query-form-title">Write Your Query</div>
            <div className="query-input">
              {/* <p>Subject</p> */}
            <Input placeholder="Subject" />
            </div>
            <div className="query-input">
              {/* <p>Description</p> */}
            <TextArea rows={3} placeholder="description"  />
            </div>

            <Upload
              className="query-image"
              name="screenshot"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              onChange={ImageUploadHandler}
            >
              { imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : <div>
                <Icon type={"upload"} />
                <div className="ant-upload-text">Upload Screenshot <br/> (if amy) </div>
                <div>{imageUrl}</div>
              </div> }
            </Upload>
            <Button onClick={() => console.log("query-submit-clicked", imageUrl)} className="query-submit-btn" type="primary">Submit</Button>
          </div>
    )

    // const onFinish = values => {
    //   console.log('Success:', values);
    // };

    // const onFinishFailed = errorInfo => {
    //   console.log('Failed:', errorInfo);
    // };
    
    

    

const [multiComp, setComp] = useState({supportTiles, faq, queryFrom});

    return (
        <div>
        {/* <Button style={{marginTop: "10rem"}} type="primary" onClick={showModal}>
          Open Modal
        </Button> */}
        <Modal
          // width={"50%"}
          className="support-modal"
          title="Support"
          visible={props.isShow}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {selectedComp === "supportTiles" ? supportTiles : selectedComp === "queryFrom" ? queryFrom : faq}
          
        </Modal>
        
        
      </div>
    )
}
