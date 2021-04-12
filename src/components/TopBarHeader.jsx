import React from "react";
import { Row, Col } from "antd";
import SearchInputBox from "./SearchInputBox";
import DocumentTypeSelect from "./DocumentTypeSelect";
import DatePickerComponent from "./DatePickerComponent";
import SelectCompanyBox from "./SelectCompanyBox";
import "./TopBarHeader.css";

const homeIcon = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="homeIcon"
  >
    <rect x="0.5" y="0.5" width="35" height="35" rx="2.5" stroke="#1A7CBE" />
    <path
      d="M22.5556 16.4414V23.5394H19.8755V20.4696C19.8755 20.2004 19.6574 19.9823 19.3883 19.9823H15.9611C15.6919 19.9823 15.4738 20.2005 15.4738 20.4696V23.5394H12.81V16.4414H11.8354V24.0267C11.8354 24.2959 12.0536 24.514 12.3227 24.514H15.9611C16.2302 24.514 16.4484 24.2958 16.4484 24.0267V20.9569H18.901V24.0267C18.901 24.2959 19.1191 24.514 19.3883 24.514H23.0429C23.312 24.514 23.5301 24.2959 23.5301 24.0267V16.4414H22.5556Z"
      fill="#1A7CBE"
    />
    <path
      d="M25.0813 17.7423L18.0157 11.1315C17.8298 10.9572 17.5406 10.9561 17.353 11.1284L10.1576 17.7392C9.95941 17.9213 9.9464 18.2294 10.1285 18.4276C10.2245 18.5323 10.3557 18.5853 10.4874 18.5853C10.6052 18.5853 10.7235 18.5427 10.817 18.4568L17.6798 12.1517L24.4155 18.4539C24.6124 18.6379 24.9203 18.6274 25.1042 18.431C25.2879 18.2344 25.2778 17.9261 25.0813 17.7423Z"
      fill="#1A7CBE"
    />
  </svg>
);

export default function TopBarHeader() {
  return (
    <>
      <Row gutter={[18, 18]} className="headerBox">
        <Col span={10}>
          <SearchInputBox />
          <DocumentTypeSelect />
        </Col>

        <Col>
          <SelectCompanyBox />
          <DatePickerComponent />
        </Col>
        <Col span={2} style={{ marginLeft: "8%" }}>
          {homeIcon}
        </Col>
      </Row>
    </>
  );
}
