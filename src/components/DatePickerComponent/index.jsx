import React from "react";
import moment from "moment";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default function DatePickerComponent() {
  return (
    <div>
      <RangePicker
        className="rangeStyle w-100"
        size="large"
        picker="month"
        defaultValue={[
          moment("2020-01", "YYYY-MM"),
          moment("2020-12", "YYYY-MM"),
        ]}
        // onChange={(dateMoment, dateString) =>
        //   dispatch(handleDateChange({ dateMoment, dateString }))
        // }
      />
    </div>
  );
}
