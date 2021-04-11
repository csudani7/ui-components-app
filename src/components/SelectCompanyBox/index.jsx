import React from "react";
import "./SelectCompanyBox.css";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function SelectCompanyBox() {
  const [tagValue, setTagValue] = React.useState([]);
  const optionData = topCompanies.map((option) => {
    const company = option.name;
    return {
      matchPattern: company.includes("Sector") ? "SECTOR" : "COMPANY",
      ...option,
    };
  });
  const [options, setOptions] = React.useState(optionData);

  const handleDelete = (e) => {
    setTagValue((tags) => tags.filter((chip) => chip.key !== e.key));
    const sectionData = [e, ...options];
    const newOptions = sectionData.map((option) => {
      const company = option.name;
      return {
        matchPattern: company.includes("Sector") ? "SECTOR" : "COMPANY",
        ...option,
      };
    });
    setOptions(newOptions);
  };

  const handleChange = (e, newValue) => {
    setTagValue(newValue);
    let filterData;
    newValue.forEach((element) => {
      filterData = options.filter((op) => op.key !== element.key);
    });
    setOptions(filterData);
  };

  return (
    <div>
      <Autocomplete
        id="SelectCompanyBox"
        multiple
        limitTags={2}
        value={tagValue}
        style={{ width: 400 }}
        disableClearable
        options={options
          .slice(0, 4)
          ?.sort((a, b) => -b.matchPattern.localeCompare(a.matchPattern))}
        onChange={(e, newValue) => handleChange(e, newValue)}
        groupBy={(option) => option.matchPattern}
        getOptionLabel={(option) => option.name}
        popupIcon={<ExpandMoreIcon />}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            label="Search for a company"
            variant="outlined"
          />
        )}
        renderOption={(option, { inputValue }) => {
          const matches = match(option.name, inputValue);
          const parts = parse(option.name, matches);
          return (
            <div style={{ fontFamily: "Montserrat", fontSize: "14px" }}>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 900 : "normal" }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          );
        }}
        renderTags={(value) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option.name}
              onDelete={() => handleDelete(option)}
              deleteIcon={<CloseIcon style={{ height: 16, width: 16 }} />}
              style={{
                height: "26px",
                backgroundColor: "rgba(189, 206, 219, 0.3)",
              }}
            />
          ))
        }
      />
    </div>
  );
}

// data from API response
const topCompanies = [
  { key: 0, name: "Reliance Industries", sectorCompany: [] },
  { key: 1, name: "Tata Consultancy Services", sectorCompany: [] },
  { key: 2, name: "Hindustan Unilever", sectorCompany: [] },
  { key: 3, name: "Infosys", sectorCompany: [] },
  {
    key: 4,
    name: "Asset Management Sector",
    sectorCompany: [
      { key: 4, name: "Asset Management Sector 1" },
      { key: 4, name: "Asset Management Sector 2" },
    ],
  },
  {
    key: 5,
    name: "Hotels & Hospitality Sector",
    sectorCompany: [{ key: 5, name: "Hotels & Hospitality Sector 1" }],
  },
  {
    key: 6,
    name: "Oil Refining Sector",
    sectorCompany: [
      { key: 6, name: "Oil Refining Sector 1" },
      { key: 6, name: "Oil Refining Sector 2" },
      { key: 6, name: "Oil Refining Sector 3" },
    ],
  },
  {
    key: 7,
    name: "Chemical Sector",
    sectorCompany: [{ key: 7, name: "Chemical Sector 1" }],
  },
  {
    key: 8,
    name: "Hospital Sector",
    sectorCompany: [
      { key: 8, name: "Hospital Sector 1" },
      { key: 8, name: "Hospital Sector 2" },
    ],
  },
  {
    key: 9,
    name: "Automobile Sector",
    sectorCompany: [
      { key: 9, name: "Automobile Sector 1" },
      { key: 9, name: "Automobile Sector 2" },
    ],
  },
  { key: 10, name: "ICICI Bank Ltd.", sectorCompany: [] },
  {
    key: 11,
    name: "Housing & Urban Development Corporation Ltd.",
    sectorCompany: [],
  },
  {
    key: 12,
    name: "Dewan Housing Finance Corporation Ltd.",
    sectorCompany: [],
  },
  { key: 13, name: "KPIT Technologies Ltd.", sectorCompany: [] },
  { key: 14, name: "Maheshwari Logistics Ltd.", sectorCompany: [] },
  { key: 15, name: "Vishwaraj Sugar Industries Ltd.", sectorCompany: [] },
  { key: 16, name: "Hindustan Construction Company Ltd.", sectorCompany: [] },
  { key: 17, name: "Dhanada Corporation Ltd.", sectorCompany: [] },
  { key: 14, name: "Maheshwari Logistics Ltd.", sectorCompany: [] },
  { key: 15, name: "Vishwaraj Sugar Industries Ltd.", sectorCompany: [] },
  { key: 16, name: "Hindustan Construction Company Ltd.", sectorCompany: [] },
  { key: 17, name: "Dhanada Corporation Ltd.", sectorCompany: [] },
  { key: 14, name: "Maheshwari Logistics Ltd.", sectorCompany: [] },
  { key: 15, name: "Vishwaraj Sugar Industries Ltd.", sectorCompany: [] },
  { key: 16, name: "Hindustan Construction Company Ltd.", sectorCompany: [] },
  { key: 17, name: "Dhanada Corporation Ltd.", sectorCompany: [] },
];
