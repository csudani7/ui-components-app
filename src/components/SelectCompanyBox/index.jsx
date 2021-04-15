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

  const handleClearAll = () => {
    setTagValue([]);
    setOptions(optionData);
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
    <div style={{ paddingTop: "18px", display: "flex" }}>
      <Autocomplete
        id="SelectCompanyBox"
        multiple
        autoHighlight
        disableClearable
        style={{ width: 230 }}
        value={tagValue}
        options={options?.sort(
          (a, b) => -b.matchPattern.localeCompare(a.matchPattern)
        )}
        onChange={(e, newValue) => handleChange(e, newValue)}
        groupBy={(option) => option.matchPattern}
        getOptionLabel={(option) =>
          option.DisplayName === enteredInputValue.toUpperCase()
            ? option.DisplayName
            : option.CompanyName
        }
        onInputChange={(_event, newInputValue) => {
          setEnteredInputValue(newInputValue);
        }}
        popupIcon={<ExpandMoreIcon />}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            label="Add Companies"
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
        renderTags={(tags) => setTagValue(tags)}
      />
      <div className="chips-items">
        {tagValue &&
          tagValue.map((tag) => {
            return (
              <Chip
                key={tag.CompanyId}
                label={tag.DisplayName}
                onDelete={() => handleDelete(tag)}
                style={{
                  backgroundColor: tag.active ? "#70808E" : "#fff",
                  color: tag.active ? "#FFF" : "#70808E",
                  borderColor: tag.active ? "#70808E" : "#fff",
                  border: "1px solid",
                  borderRadius: "12px",
                  marginRight: "5px",
                }}
                deleteIcon={
                  <CloseIcon
                    style={{
                      height: 16,
                      width: 16,
                      color: tag.active ? "FFF" : "#70808E",
                    }}
                  />
                }
              />
            );
          })}

        {tagValue && tagValue.length > 0 ? (
          <div className="clear-all" onClick={handleClearAll}>
            Clear all
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

// data from API response
const topCompanies = [
  {
    CompanyId: 0,
    CompanyName: "Reliance Industries",
    DisplayName: "RELIANCE",
    active: false,
  },
  {
    CompanyId: 1,
    CompanyName: "Tata Consultancy Services",
    DisplayName: "TCS",
    active: true,
  },
  {
    CompanyId: 2,
    CompanyName: "Hindustan Unilever",
    DisplayName: "HINDUNILVR",
    active: false,
  },
  { CompanyId: 3, CompanyName: "Infosys", DisplayName: "INFY", active: true },
  {
    CompanyId: 4,
    CompanyName: "ICICI Bank Ltd.",
    DisplayName: "ICICIBANK",
    active: true,
  },
  {
    CompanyId: 5,
    CompanyName: "Housing & Urban Development Corporation Ltd.",
    DisplayName: "HDFC",
    active: true,
  },
  {
    CompanyId: 6,
    CompanyName: "Dewan Housing Finance Corporation Ltd.",
    DisplayName: "DHFCL",
    active: false,
  },
  {
    CompanyId: 7,
    CompanyName: "KPIT Technologies Ltd.",
    DisplayName: "KPITTL",
    active: true,
  },
  {
    CompanyId: 8,
    CompanyName: "Maheshwari Logistics Ltd.",
    DisplayName: "MLT",
    active: true,
  },
  {
    CompanyId: 9,
    CompanyName: "Vishwaraj Sugar Industries Ltd.",
    DisplayName: "VSIL",
    active: false,
  },
  {
    CompanyId: 10,
    CompanyName: "Hindustan Construction Company Ltd.",
    DisplayName: "HCL",
    active: true,
  },
  {
    CompanyId: 11,
    CompanyName: "Dhanada Corporation Ltd.",
    DisplayName: "DCL",
    active: false,
  },
  {
    CompanyId: 12,
    CompanyName: "Vishwaraj Sugar Industries Ltd.",
    DisplayName: "VSIL",
    active: false,
  },
  {
    CompanyId: 13,
    CompanyName: "State Bank Of India",
    DisplayName: "SBIN",
    active: true,
  },
  {
    CompanyId: 14,
    CompanyName: "Nestle India",
    DisplayName: "NESTLEIND",
    active: true,
  },
  {
    CompanyId: 15,
    CompanyName: "Axis Bank",
    DisplayName: "AXISBANK",
    active: true,
  },
  {
    CompanyId: 16,
    CompanyName: "Avenue Supermarts",
    DisplayName: "DMART",
    active: false,
  },
  {
    CompanyId: 17,
    CompanyName: "Sun Pharmaceutical Industries",
    DisplayName: "SUNPHARMA",
    active: true,
  },
  {
    CompanyId: 18,
    CompanyName: "Adani Green Energy",
    DisplayName: "ADANIGREEN",
    active: false,
  },
  {
    CompanyId: 19,
    CompanyName: "Titan Company",
    DisplayName: "TITAN",
    active: true,
  },
  {
    CompanyId: 20,
    CompanyName: "Oil & Natural Gas Corporation",
    DisplayName: "ONGC",
    active: true,
  },
];
