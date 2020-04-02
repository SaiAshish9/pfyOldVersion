import React, {useState} from 'react';
import { Modal, Button, Input  } from 'antd';

const { TextArea } = Input;

export default function InternshipApplication() {

    const [visible, setVisible] = useState(false)


    const showModal = () => {
        setVisible(true)
        };
      
    const handleOk = e => {
        console.log(e);
        setVisible(false)
        
    };
      
    const handleCancel = e => {
        console.log(e);
        setVisible(false)
        
    };

    return (
        <div>
            <Button style={{marginTop: "10rem"}} type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
            width={"50%"}
            title="Internship Application"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            >
            <div className="internship-application-form">
                <div className="internship-application-single-form">
                    <p className="single-form-title">
                    How You download the thunderbod app?
                    </p>
                    <Input placeholder="" />
                </div>
                <div className="internship-application-single-form">
                    <p className="single-form-title">
                        How You download the thunderbod app?
                    </p>
                    <Input placeholder="" />
                </div>
                <div className="internship-application-single-form">
                    <p className="single-form-title">
                        How You download the thunderbod app?
                    </p>
                    <TextArea
                        // value={value}
                        // onChange={onChange}
                        placeholder=""
                        autoSize={{ minRows: 3 }}
                    />
                </div>
                <div className="internship-application-single-form">
                    <p className="single-form-title">
                        How You download the thunderbod app?
                    </p>
                    <Input placeholder="" />
                </div>
                <div className="internship-application-single-form">
                    <p className="single-form-title">
                        How You download the thunderbod app?
                    </p>
                    <Input placeholder="" />
                </div>
                <Button className="internship-application-submit">Submit Application</Button>
            </div>
            
            </Modal>
      </div>
    )
}
