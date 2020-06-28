import React from "react";
import {
  Input,
  InputNumber,
  Form,
  Checkbox,
  Select,
  DatePicker,
  Radio,
} from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;
export default function InputType({
  type,
  name,
  rule,
  placeholder,
  option,
  disabledDate,
  prefix,
  suffix,
}) {
  return (
    <>
      {type === "text" && (
        <Form.Item name={name} rules={rule}>
          {prefix ? (
            <Input
              placeholder={placeholder}
              prefix={<img src={prefix ? prefix : null} alt="" />}
            />
          ) : (
            <Input placeholder={placeholder} alt="" />
          )}
        </Form.Item>
      )}
      {type === "number" && (
        <Form.Item name={name} rules={rule}>
          <InputNumber placeholder={placeholder}></InputNumber>
        </Form.Item>
      )}
      {type === "checkbox" && (
        <Form.Item name={name} valuePropName="checked">
          <Checkbox>{placeholder}</Checkbox>
        </Form.Item>
      )}
      {type === "textarea" && (
        <Form.Item name={name} rules={rule}>
          <Input.TextArea placeholder={placeholder} />
        </Form.Item>
      )}
      {type === "select" && (
        <Form.Item name={name} rules={rule}>
          {suffix ? (
            <Select
              placeholder={placeholder}
              suffixIcon={<img src={suffix} alt="" />}
            >
              {option.map((optionName, index) => (
                <Option value={optionName.value} key={index}>
                  {optionName.option}
                </Option>
              ))}
            </Select>
          ) : (
            <Select placeholder={placeholder}>
              {option.map((optionName, index) => (
                <Option value={optionName.value} key={index}>
                  {optionName.option}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
      )}
      {type === "rangePicker" && (
        <Form.Item name={name} rules={rule}>
          <RangePicker
            disabledDate={disabledDate}
            format="DD-MM-YYYY"
            placeholder={placeholder}
          ></RangePicker>
        </Form.Item>
      )}
      {type === "date" && (
        <Form.Item name={name} rules={rule}>
          {suffix === null || suffix ? (
            <DatePicker
              format="DD-MM-YYYY"
              placeholder={placeholder}
              suffixIcon={suffix}
            />
          ) : (
            <DatePicker format="DD-MM-YYYY" placeholder={placeholder} />
          )}
        </Form.Item>
      )}
      {type === "radioButton" && (
        <Form.Item name={name} rules={rule}>
          <Radio.Group>
            {option.map((optionName, index) => (
              <Radio.Button value={optionName} key={index}>
                {optionName}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      )}
    </>
  );
}
