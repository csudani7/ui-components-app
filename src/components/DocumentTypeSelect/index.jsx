import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "@material-ui/icons/Close";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function DocumentTypeSelect() {
  const handleDelete = (e) => {
    // console.log(e, "e");
  };

  return (
    <div style={{ paddingTop: "32px", overflow: 'hidden' }}>
      <Autocomplete
        multiple
        limitTags={5}
        id="DocumentTypeSelect"
        options={documentTypeList}
        disableCloseOnSelect
        getOptionLabel={(option) => option.ticker}
        dropdown
        disableClearable
        renderOption={(option, { selected }) => (
          <>  
          <div className='innerOptions'>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8, color: option.color }}
              checked={selected}
            />
            {option.name}
            <div>
            <hr style={{width: '300%'}} />
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
                color: "#4A406C",
                borderRadius: "4px",
                marginLeft: "5px",
                height: "22px",
              }}
              onDelete={() => handleDelete(option)}
              deleteIcon={
                <CloseIcon
                  style={{ height: 16, width: 16, color: "#4A406C" }}
                />
              }
            />
          ))
        }
        style={{ width: 400 }}
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
  },
  {
    name: "ConCall Transcript",
    ticker: "CT",
    color: "#F39C12",
    chipBgColor: "rgba(243, 156, 18, 0.3)",
  },
  {
    name: "Earning Release",
    ticker: "ER",
    color: "#2ECC71",
    chipBgColor: "rgba(46, 204, 113, 0.3)",
  },
  {
    name: "Investor Presentation",
    ticker: "IP",
    color: "#E91E63",
    chipBgColor: "rgba(233, 30, 99, 0.3)",
  },
  {
    name: "Brokerage Report",
    ticker: "BR",
    color: "#6893E6",
    chipBgColor: "rgba(104, 147, 230, 0.3)",
  },
  {
    name: "Exchange Filling",
    ticker: "EF",
    color: "#E66868",
    chipBgColor: "rgba(230, 104, 104, 0.3)",
  },
  {
    name: "Others",
    ticker: "OT",
    color: "#3FE3ED",
    chipBgColor: "rgba(63, 227, 237, 0.3)",
  },
];
