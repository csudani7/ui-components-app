import React from "react";
import { Row, Col } from "antd";
import SearchInputBox from "./SearchInputBox";
import DocumentTypeSelect from "./DocumentTypeSelect";
import DatePickerComponent from "./DatePickerComponent";
import SelectCompanyBox from "./SelectCompanyBox";
import "./TopBarHeader.css";

export default function TopBarHeader() {
  return (
    <div className="headerBox">
      <Row>
        <Col span={8}>
          <SearchInputBox />
        </Col>
        <Col span={8} style={{ marginLeft: "-35px" }}>
          <DocumentTypeSelect />
        </Col>
        <Col span={8}>
          <DatePickerComponent />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <SelectCompanyBox />
        </Col>
      </Row>
    </div>
  );
}
