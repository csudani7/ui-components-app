import React from "react";
import SearchInputBox from "./SearchInputBox";
import DocumentTypeSelect from "./DocumentTypeSelect";
import DatePicker from "./DatePicker";

export default function TopBarComponent() {
  return (
    <div>
      <SearchInputBox />
      <DocumentTypeSelect />
      <DatePicker />
    </div>
  );
}
