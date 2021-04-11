import React from "react";
import SearchInputBox from "./SearchInputBox";
import DocumentTypeSelect from "./DocumentTypeSelect";
import DatePickerComponent from "./DatePickerComponent";
import SelectCompanyBox from "./SelectCompanyBox";

export default function TopBarHeader() {
  return (
    <div>
      <SearchInputBox />
      <DocumentTypeSelect />
      <DatePickerComponent />
      <SelectCompanyBox />
    </div>
  );
}
