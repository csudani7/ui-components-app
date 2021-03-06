import React, { useState } from "react";
import { Input, Select, Radio, Checkbox, InputNumber, Popover } from "antd";
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
        fill="white"
      />
      <path
        d="M17.786 16.7508L13.5908 12.5557C13.305 12.2698 12.842 12.2698 12.5562 12.5557C12.2703 12.8413 12.2703 13.3047 12.5562 13.5903L16.7513 17.7855C16.8942 17.9284 17.0813 17.9999 17.2686 17.9999C17.4557 17.9999 17.643 17.9284 17.786 17.7855C18.0718 17.4999 18.0718 17.0364 17.786 16.7508Z"
        fill="white"
      />
    </svg>
  );
};

export default function SearchInputBox() {
  const [value, setValue] = useState("Exact");

  const handleDataChange = (e) => {
    setValue(e.target.value);
  };

  const popOverContent = (
    <div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <p
          style={{
            color: "#2c3e50",
            fontWeight: "600",
            fontSize: "14px",
            paddingRight: "18px",
          }}
        >
          Exact Phrase
        </p>
        <p
          style={{
            color: "rgba(44, 62, 80, 0.5)",
            fontWeight: "350",
            fontSize: "12px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>
      <hr />
      <div style={{ display: "flex", marginTop: "10px" }}>
        <p
          style={{
            color: "#2c3e50",
            fontWeight: "600",
            fontSize: "14px",
            paddingRight: "42px",
          }}
        >
          All Word
        </p>
        <p
          style={{
            color: "rgba(44, 62, 80, 0.5)",
            fontWeight: "350",
            fontSize: "12px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>
      <hr />
      <div style={{ display: "flex", marginTop: "10px" }}>
        <p
          style={{
            color: "#2c3e50",
            fontWeight: "600",
            fontSize: "14px",
            paddingRight: "35px",
          }}
        >
          Any Word
        </p>
        <p
          style={{
            color: "rgba(44, 62, 80, 0.5)",
            fontWeight: "350",
            fontSize: "12px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>
    </div>
  );

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
                <div style={{ paddingTop: "3px", paddingBottom: "3px" }}>
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
                // value="Synonyms"
                // checked={value === "Synonyms"}
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
                <Popover
                  content={popOverContent}
                  placement="bottom"
                  style={{
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                    borderRadius: "4px",
                  }}
                >
                  <InfoCircleOutlined
                    style={{
                      marginRight: "6px",
                      color: "#969FA8",
                      fontSize: "16px",
                    }}
                  />
                </Popover>{" "}
                <div
                  style={{
                    backgroundColor: "#969FA8",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <SearchOutlinedIcon />
                </div>
              </>
            }
            placeholder="Enter Search input"
          />
        </div>
      </InputGroup>
    </>
  );
}
