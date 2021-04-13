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
  const [enteredInputValue, setEnteredInputValue] = React.useState("");

  const optionData = topCompanies.map((option) => {
    const company = option.CompanyName;
    return {
      ...option,
      matchPattern: company?.includes("Sector") ? "SECTOR" : "COMPANY",
    };
  });

  const [options, setOptions] = React.useState(optionData);

  const handleDelete = (e) => {
    setTagValue((tags) =>
      tags.filter((chip) => chip.CompanyId !== e.CompanyId)
    );
    const sectionData = [e, ...options];
    const newOptions = sectionData.map((option) => {
      const company = option.CompanyName;
      return {
        matchPattern: company?.includes("Sector") ? "SECTOR" : "COMPANY",
        ...option,
      };
    });
    setOptions(newOptions);
  };

  const handleChange = (e, newValue) => {
    let filterData;
    setTagValue(newValue);
    newValue.forEach((element) => {
      filterData = options.filter(
        (option) => option.CompanyId !== element.CompanyId
      );
    });
    setOptions(filterData);
  };

  return (
    <div style={{ paddingTop: "5px" }}>
      <Autocomplete
        id="SelectCompanyBox"
        multiple
        autoHighlight
        disableClearable
        // limitTags={3}
        style={{ width: 400 }}
        value={tagValue}
        options={options
          ?.slice(0, 4)
          .sort((a, b) => -b.matchPattern.localeCompare(a.matchPattern))}
        onChange={(e, newValue) => handleChange(e, newValue)}
        groupBy={(option) => option.matchPattern}
        getOptionLabel={(option) =>
          enteredInputValue.toUpperCase() === option.DisplayName
            ? option.DisplayName
            : option.CompanyName
        }
        onInputChange={(event, newInputValue) => {
          setEnteredInputValue(newInputValue);
        }}
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
          const matches = match(option.CompanyName, inputValue);
          const parts = parse(option.CompanyName, matches);
          return (
            <div style={{ fontSize: "14px" }}>
              {parts?.map((part, index) => (
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
          value?.map((option, index) => (
            <Chip
              key={index}
              label={option.DisplayName}
              onDelete={() => handleDelete(option)}
              deleteIcon={
                <CloseIcon
                  style={{ height: 16, width: 16, color: "#2C3E50" }}
                />
              }
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
  { CompanyId: 0, CompanyName: "Reliance Industries", DisplayName: "RELIANCE" },
  {
    CompanyId: 1,
    CompanyName: "Tata Consultancy Services",
    DisplayName: "TCS",
  },
  {
    CompanyId: 2,
    CompanyName: "Hindustan Unilever",
    DisplayName: "HINDUNILVR",
  },
  { CompanyId: 3, CompanyName: "Infosys", DisplayName: "INFY" },
  { CompanyId: 4, CompanyName: "ICICI Bank Ltd.", DisplayName: "ICICIBANK" },
  {
    CompanyId: 5,
    CompanyName: "Housing & Urban Development Corporation Ltd.",
    DisplayName: "HDFC",
  },
  {
    CompanyId: 6,
    CompanyName: "Dewan Housing Finance Corporation Ltd.",
    DisplayName: "DHFCL",
  },
  {
    CompanyId: 7,
    CompanyName: "KPIT Technologies Ltd.",
    DisplayName: "KPITTL",
  },
  {
    CompanyId: 8,
    CompanyName: "Maheshwari Logistics Ltd.",
    DisplayName: "MLT",
  },
  {
    CompanyId: 9,
    CompanyName: "Vishwaraj Sugar Industries Ltd.",
    DisplayName: "VSIL",
  },
  {
    CompanyId: 10,
    CompanyName: "Hindustan Construction Company Ltd.",
    DisplayName: "HCL",
  },
  {
    CompanyId: 11,
    CompanyName: "Dhanada Corporation Ltd.",
    DisplayName: "DCL",
  },
  {
    CompanyId: 12,
    CompanyName: "Vishwaraj Sugar Industries Ltd.",
    DisplayName: "VSIL",
  },
  {
    CompanyId: 13,
    CompanyName: "State Bank Of India",
    DisplayName: "SBIN",
  },
  {
    CompanyId: 14,
    CompanyName: "Nestle India",
    DisplayName: "NESTLEIND",
  },
  { CompanyId: 15, CompanyName: "Axis Bank", DisplayName: "AXISBANK" },
  {
    CompanyId: 16,
    CompanyName: "Avenue Supermarts",
    DisplayName: "DMART",
  },
  {
    CompanyId: 17,
    CompanyName: "Sun Pharmaceutical Industries",
    DisplayName: "SUNPHARMA",
  },
  {
    CompanyId: 18,
    CompanyName: "Adani Green Energy",
    DisplayName: "ADANIGREEN",
  },
  { CompanyId: 19, CompanyName: "Titan Company", DisplayName: "TITAN" },
  {
    CompanyId: 20,
    CompanyName: "Oil & Natural Gas Corporation",
    DisplayName: "ONGC",
  },
];
