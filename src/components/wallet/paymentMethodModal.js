import React, { useState } from "react";
import { Modal, Button, Radio, Input, Tabs, Form, InputNumber } from "antd";
import axios from "axios";
import { tokenHeader } from "../../constant/tokenHeader";
const { TabPane } = Tabs;

export default function PaymentMethodModal(props) {
  const [visible, setVisible] = useState(false);
  const [radioOption, setRadioOption] = useState(false);
  const [paytmDetails, setPaytmDetails] = useState({});
  const [bankDetails, setBankDetails] = useState({});
  const [paymentMode, setPaymentMode] = useState("paytm");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    const url = "wallet/add_payment_method";
    const dataToBeSend = paymentMode === "paytm" ? paytmDetails : bankDetails;
    const data = {
      [paymentMode]: dataToBeSend,
    };
    console.table(dataToBeSend);
    axios.post(url, data, tokenHeader()).then((res) => {
      console.log(res.data);
      props.isClose();
    });
    // setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
    props.isClose();
  };

  const onChange = (e) => {
    console.log("yotu choose " + e.target.value);
    setRadioOption(e.target.value);
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const paytmChangeHandler = (e, key) => {
    setPaytmDetails({ ...paytmDetails, [key]: e.target.value });
  };
  console.table(paytmDetails);

  const bankChangeHandler = (e, key) => {
    setBankDetails({ ...bankDetails, [key]: e.target.value });
  };

  console.table(bankDetails);

  const TabOnChangeHandler = (key) => {
    console.log(key);
    setPaymentMode(key);
  };
  const paytm = (
    <div className="paytm_input">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="heading">Name of wallet Holder</div>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input className="walletDetailInput" />
        </Form.Item>

        <div className="heading">Number of wallet holder</div>
        <Form.Item
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your mobile number!",
            },
            {
              max: 10,
              message: "Please input valid mobile number",
            },
          ]}
        >
          <Input className="walletDetailInput" />
        </Form.Item>

        <Form.Item className="submit_btn_block">
          <Button htmlType="submit" type="primary" className="submit_btn">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  const bank = (
    <div className="bank_input">
      <div className="heading">A/C Holders Name </div>
      <Input
        className="walletDetailInput"
        onChange={(e) => bankChangeHandler(e, "account_holder_name")}
      />
      <div className="heading">A/C Number</div>
      <Input
        className="walletDetailInput"
        onChange={(e) => bankChangeHandler(e, "account_number")}
      />
      <div className="heading">Bank Name</div>
      <Input
        className="walletDetailInput"
        onChange={(e) => bankChangeHandler(e, "bank_name")}
      />
      <div className="heading">IFSC </div>
      <Input
        className="walletDetailInput"
        onChange={(e) => bankChangeHandler(e, "ifsc_code")}
      />
      <Form.Item className="submit_btn_block">
        <Button htmlType="submit" type="primary" className="submit_btn">
          Submit
        </Button>
      </Form.Item>
    </div>
  );

  return (
    <Modal
      title="Add Payment Method"
      visible={props.isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className={"payment_method_modal"}
      footer={null}
      width={680}
    >
      <div className="payment_method_modal_title">
        Tell us where you want you redeem your wallet balance
      </div>
      <Tabs
        style={{ textAlign: "center", padding: "0 28px" }}
        defaultActiveKey="paytm"
        onChange={TabOnChangeHandler}
      >
        <TabPane tab="Add Paytm Details" key="paytm">
          {paytm}
        </TabPane>
        <TabPane tab="Add Bank Details" key="bank">
          {bank}
        </TabPane>
      </Tabs>
    </Modal>
  );
}
