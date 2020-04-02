import React, {useState} from 'react';
import { Modal, Button, Input, Icon  } from 'antd';

export default function TaskFlow() {
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
            className="taskFlow"
            width={"58%"}
            title="Task Details"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            >
            <div className="task-details-block">
                <div className="task-details-description">
                    <div className="task-details-title">
                        Task Description
                    </div>
                    <p className="task-details-content">
                    You must complete all tasks to be eligible for rewards You must complete all tasks to be 
                    Invite friends to try project X by posting in your collegeor friends WhatsApp group.Invite 
                    friends to try project X by posting in your college or friends WhatsApp group. 
                    </p>
                </div>
                <div className="task-details-instructions">
                    <div className="task-details-instructions-title">
                        Instructions
                    </div>
                    <div className="task-details-instructions-content">
                        <p className="single-instruction"> 1. You must complete all tasks to be eligible for rewards.</p>
                        <p className="single-instruction"> 2. You must complete all tasks to be eligible for rewards.</p>
                        <p className="single-instruction"> 3. You must complete all tasks to be eligible for rewards.</p>
                    
                    </div>
                </div>
                <Button className="task-reference-btn">Task Reference <Icon type="right"/> </Button>
                <div className="download-and-copy-btn">
                    <div className="title">
                    After Reading the instructions click on the buttons below
                    </div>
                    <div className="buttons">
                        <Button className="download-btn">Download Image</Button>
                        <Button className="copy-btn">Copy Message</Button>
                    </div>
                </div>
            </div>
            
            </Modal>
      </div>
    )
}
