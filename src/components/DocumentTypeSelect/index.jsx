import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "@material-ui/icons/Close";
import "./DocumentTypeSelect.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function DocumentTypeSelect() {
  const handleDelete = (e) => {
    console.log(e, "e");
  };

  return (
    <div style={{ paddingTop: "6px" }}>
      <Autocomplete
        multiple
        id="DocumentTypeSelect"
        options={documentTypeList}
        disableCloseOnSelect
        getOptionLabel={(option) => option.ticker}
        dropdown
        disableClearable /* this is use for clear all button */
        renderOption={(option, { selected }) => (
          <>
            <div style={{ width: "100%" }}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8, color: option.color }}
                checked={selected}
              />
              {option.name}
              <div>
                <hr />
              </div>
            </div>
          </>
        )}
        renderTags={(value) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option.ticker}
              style={{
                backgroundColor: option.chipBgColor,
                color: option.fontColor,
                borderRadius: "4px",
                marginLeft: "5px",
                height: "22px",
                overflow: "hidden",
              }}
              onDelete={() => handleDelete(option)}
              deleteIcon={
                <CloseIcon
                  style={{ height: 16, width: 16, color: option.fontColor }}
                />
              }
            />
          ))
        }
        style={{ width: 480 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Select Document type"
            // placeholder="Select Document type"
          />
        )}
      />
    </div>
  );
}

const documentTypeList = [
  {
    name: "Annual Report",
    ticker: "AR",
    color: "#8E44AD",
    chipBgColor: "rgba(142, 68, 173, 0.3)",
    fontColor: "#4A406C",
  },
  {
    name: "ConCall Transcript",
    ticker: "CT",
    color: "#F39C12",
    chipBgColor: "rgba(243, 156, 18, 0.3)",
    fontColor: "#685B3D",
  },
  {
    name: "Earning Release",
    ticker: "ER",
    color: "#2ECC71",
    chipBgColor: "rgba(46, 204, 113, 0.3)",
    fontColor: "#2D695A",
  },
  {
    name: "Investor Presentation",
    ticker: "IP",
    color: "#E91E63",
    chipBgColor: "rgba(233, 30, 99, 0.3)",
    fontColor: "#653556",
  },
  {
    name: "Brokerage Report",
    ticker: "BR",
    color: "#6893E6",
    chipBgColor: "rgba(104, 147, 230, 0.3)",
    fontColor: "#3E587D",
  },
  {
    name: "Exchange Filling",
    ticker: "EF",
    color: "#E66868",
    chipBgColor: "rgba(230, 104, 104, 0.3)",
    fontColor: "#644B57",
  },
  {
    name: "Others",
    ticker: "OT",
    color: "#3FE3ED",
    chipBgColor: "rgba(63, 227, 237, 0.3)",
    fontColor: "#32707F",
  },
];
