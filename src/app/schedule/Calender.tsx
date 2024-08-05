// Calender.tsx
import React from "react";
import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

interface CalendarProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Calender({ setValue }: CalendarProps) {
  // Get the current date in ISO format (e.g., "YYYY-MM-DD")
  const currentDate = new Date().toISOString().split('T')[0];

  // Initialize value state with the parsed current date
  const [value, setLocalValue] = React.useState(parseDate(currentDate));

  // Handle date change
  const handleDateChange = (newDate: any) => {
    setLocalValue(newDate);
    setValue(newDate.toString()); // Convert to string or another appropriate format
  };

  return (
    <Calendar
      aria-label="Date (Controlled)"
      value={value}
      onChange={handleDateChange}
    />
  );
}
