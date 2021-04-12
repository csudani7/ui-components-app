import React, { useState } from "react";
import { Input, Select, Radio, Checkbox, InputNumber, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./SearchInputBox.css";
const InputGroup = Input.Group;

const SearchOutlinedIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.92682 0C3.55609 0 0 3.55609 0 7.92682C0 12.2978 3.55609 15.8536 7.92682 15.8536C12.2978 15.8536 15.8536 12.2978 15.8536 7.92682C15.8536 3.55609 12.2978 0 7.92682 0ZM7.92682 14.3903C4.36293 14.3903 1.46341 11.4907 1.46341 7.92685C1.46341 4.36296 4.36293 1.46341 7.92682 1.46341C11.4907 1.46341 14.3902 4.36293 14.3902 7.92682C14.3902 11.4907 11.4907 14.3903 7.92682 14.3903Z"
        fill="#1A7CBE"
      />
      <path
        d="M17.786 16.7508L13.5908 12.5557C13.305 12.2698 12.842 12.2698 12.5562 12.5557C12.2703 12.8413 12.2703 13.3047 12.5562 13.5903L16.7513 17.7855C16.8942 17.9284 17.0813 17.9999 17.2686 17.9999C17.4557 17.9999 17.643 17.9284 17.786 17.7855C18.0718 17.4999 18.0718 17.0364 17.786 16.7508Z"
        fill="#1A7CBE"
      />
    </svg>
  );
};

export default function SearchInputBox() {
  const [value, setValue] = useState("Exact");

  const handleDataChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <InputGroup compact>
        <div>
          <Select value={value}>
            <Radio.Group onChange={handleDataChange}>
              <Radio
                style={{ padding: "6px" }}
                value="Exact"
                checked={value === "Exact"}
              >
                Exact Phrase
              </Radio>
              <hr />
              <Radio
                style={{ padding: "6px" }}
                value="All"
                checked={value === "All"}
              >
                All Word
                <div>
                  <span style={{ fontSize: "12px" }}>Within</span>{" "}
                  <InputNumber
                    min={1}
                    max={20}
                    defaultValue={20}
                    style={{
                      width: "45px",
                      height: "23px",
                      padding: "0%",
                      border: "none",
                    }}
                  />{" "}
                  <span style={{ fontSize: "12px" }}>Words</span>
                </div>
              </Radio>
              <hr />
              <Radio
                style={{ padding: "6px" }}
                value="Any"
                checked={value === "Any"}
              >
                Any Word
              </Radio>
              <hr />
              <Checkbox
                style={{ padding: "2px" }}
                value="Synonyms"
                checked={value === "Synonyms"}
              >
                Use Synonyms
              </Checkbox>
            </Radio.Group>
          </Select>
        </div>

        <div>
          <Input
            style={{ width: "336px", height: "42px", marginLeft: "5px" }}
            suffix={
              <>
                <Tooltip
                  placement="bottom"
                  color={"#1a7cbe"}
                  title={
                    "Loream upsome five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of"
                  }
                >
                  <InfoCircleOutlined
                    style={{
                      marginRight: "6px",
                      color: "#969FA8",
                      fontSize: "16px",
                    }}
                  />
                </Tooltip>{" "}
                <SearchOutlinedIcon />
              </>
            }
            placeholder="Enter Search input"
          />
        </div>
      </InputGroup>
    </>
  );
}
