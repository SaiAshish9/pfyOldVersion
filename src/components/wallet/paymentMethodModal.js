import React, { useState } from "react";
import { Modal, Button, Radio, Input, Tabs, Form, InputNumber } from "antd";
import axios from "axios";
import { tokenHeader } from "../../constant/tokenHeader";
import modalCloseIcon from "../../assets/img/modalCloseIcon.svg";
const { TabPane } = Tabs;

export default function PaymentMethodModal(props) {
  const [visible, setVisible] = useState(false);
  const [radioOption, setRadioOption] = useState(false);

  const [paytmDetails, setPaytmDetails] = useState({});
  const [bankDetails, setBankDetails] = useState({
    account_number: "",
    account_holder_name: "",
    bank_name: "",
    ifsc_code: "",
  });
  const [paymentMode, setPaymentMode] = useState("paytm");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
    const acNo = key === "account_number" && e.target.value.match(/^[0-9]*$/);
    const acHName = key === "account_holder_name";
    const bankName = key === "bank_name";
    const bCode = key === "ifsc_code";
    if (acHName || bankName || bCode) {
      setBankDetails({ ...bankDetails, [key]: e.target.value });
    } else if (acNo) {
      setBankDetails({ ...bankDetails, [key]: e.target.value });
    }
  };

  console.table(bankDetails);

  const TabOnChangeHandler = (key) => {
    console.log(key);
    setPaymentMode(key);
  };

  const [numberInput, setNumberInput] = useState("");

  const handleNumber = (e) => {
    const data = e.target.value;
    if (data.length < 11 && data.match(/^[0-9]*$/)) {
      setNumberInput(data);
    }
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
        <div className="heading">Name of Wallet holder</div>
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

        <div className="heading">Number of Wallet holder</div>
        {/* <Form.Item
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
        > */}
        <Input
          value={numberInput}
          className="walletDetailInput"
          onChange={handleNumber}
        />
        {/* </Form.Item> */}

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
        value={bankDetails.account_holder_name}
        onChange={(e) => bankChangeHandler(e, "account_holder_name")}
        className="walletDetailInput"
      />
      <div className="heading">A/C Number</div>
      <Input
        value={bankDetails.account_number}
        onChange={(e) => bankChangeHandler(e, "account_number")}
        className="walletDetailInput"
      />
      <div className="heading">Bank Name</div>
      <Input
        value={bankDetails.bank_name}
        onChange={(e) => bankChangeHandler(e, "bank_name")}
        className="walletDetailInput"
      />
      <div className="heading">IFSC </div>
      <Input
        value={bankDetails.ifsc_code}
        onChange={(e) => bankChangeHandler(e, "ifsc_code")}
        className="walletDetailInput"
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
      closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
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
