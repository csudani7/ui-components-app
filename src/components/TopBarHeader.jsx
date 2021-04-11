import React from "react";
import { Row, Col } from "antd";
import Button from "@material-ui/core/Button";
import SearchInputBox from "./SearchInputBox";
import DocumentTypeSelect from "./DocumentTypeSelect";
import DatePickerComponent from "./DatePickerComponent";
import SelectCompanyBox from "./SelectCompanyBox";
import "./TopBarHeader.css";

export default function TopBarHeader() {
  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={10}>
          <SearchInputBox />
          <DocumentTypeSelect />
        </Col>
        <Col span={12}>
          <SelectCompanyBox />
          <DatePickerComponent />
        </Col>
      </Row>
    </>
  );
}
