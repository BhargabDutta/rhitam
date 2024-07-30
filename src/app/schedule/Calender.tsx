import React from "react";
import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

export default function Calender() {
  // Get the current date in ISO format (e.g., "YYYY-MM-DD")
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Initialize value state with the parsed current date
  let [value, setValue] = React.useState(parseDate(currentDate));

  return (
    <Calendar 
      aria-label="Date (Controlled)" 
      value={value} 
      onChange={setValue} 
    />
  );
}
