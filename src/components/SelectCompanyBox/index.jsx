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
    const company = option.CompanyName;
    return {
      matchPattern: company.includes("Sector") ? "SECTOR" : "COMPANY",
      ...option,
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
      filterData = options.filter((op) => op.CompanyId !== element.CompanyId);
    });
    setOptions(filterData);
  };

  return (
    <div style={{ paddingTop: "5px" }}>
      <Autocomplete
        id="SelectCompanyBox"
        multiple
        limitTags={3}
        value={tagValue}
        style={{ width: 400 }}
        disableClearable
        options={options
          .slice(0, 4)
          ?.sort((a, b) => -b.matchPattern.localeCompare(a.matchPattern))}
        onChange={(e, newValue) => handleChange(e, newValue)}
        groupBy={(option) => option.matchPattern}
        getOptionLabel={(option) => option.CompanyName}
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
              label={option.DisplayName}
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
  {
    CompanyId: 4,
    CompanyName: "Asset Management Sector",
    DisplayName: "AMGMTSECTOR",
  },
  {
    CompanyId: 5,
    CompanyName: "Hotels & Hospitality Sector",
    DisplayName: "HHSM",
  },
  {
    CompanyId: 6,
    CompanyName: "Oil Refining Sector",
    DisplayName: "ORS",
  },
  {
    CompanyId: 7,
    CompanyName: "Chemical Sector",
    DisplayName: "CS",
  },
  {
    CompanyId: 8,
    CompanyName: "Hospital Sector",
    DisplayName: "HS",
  },
  { CompanyId: 10, CompanyName: "ICICI Bank Ltd.", DisplayName: "ICICIBANK" },
  {
    CompanyId: 11,
    CompanyName: "Housing & Urban Development Corporation Ltd.",
    DisplayName: "HDFC",
  },
  {
    CompanyId: 12,
    CompanyName: "Dewan Housing Finance Corporation Ltd.",
    DisplayName: "DHFCL",
  },
  {
    CompanyId: 13,
    CompanyName: "KPIT Technologies Ltd.",
    DisplayName: "KPITTL",
  },
  {
    CompanyId: 14,
    CompanyName: "Maheshwari Logistics Ltd.",
    DisplayName: "MLT",
  },
  {
    CompanyId: 15,
    CompanyName: "Vishwaraj Sugar Industries Ltd.",
    DisplayName: "VSIL",
  },
  {
    CompanyId: 16,
    CompanyName: "Hindustan Construction Company Ltd.",
    DisplayName: "HCL",
  },
  {
    CompanyId: 17,
    CompanyName: "Dhanada Corporation Ltd.",
    DisplayName: "DCL",
  },
  {
    CompanyId: 15,
    CompanyName: "Vishwaraj Sugar Industries Ltd.",
    DisplayName: "VSIL",
  },
  {
    CompanyId: 16,
    CompanyName: "State Bank Of India",
    DisplayName: "SBIN",
  },
  {
    CompanyId: 17,
    CompanyName: "Nestle India",
    DisplayName: "NESTLEIND",
  },
  { CompanyId: 18, CompanyName: "Axis Bank", DisplayName: "AXISBANK" },
  {
    CompanyId: 19,
    CompanyName: "Avenue Supermarts",
    DisplayName: "DMART",
  },
  { CompanyId: 20, CompanyName: "Larsen & Toubro", DisplayName: "LT" },
];
