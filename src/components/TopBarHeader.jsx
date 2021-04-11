import React from "react";
import SearchInputBox from "./SearchInputBox";
import DocumentTypeSelect from "./DocumentTypeSelect";
import DatePickerComponent from "./DatePickerComponent";
import SelectCompanyBox from "./SelectCompanyBox";
import "./TopBarHeader.css";

export default function TopBarHeader() {
  return (
    <div className="outerDiv">
      <div className="sideBar">
      </div>
      <div className="header">
        <div className="element">
            <SearchInputBox />
        </div>
        <div className="element">
            <SelectCompanyBox />
        </div>
        <div className="element">
            <DocumentTypeSelect />
        </div>
        <div className="element">
            <DatePickerComponent />
        </div>
      </div>
    </div>
  );
}
