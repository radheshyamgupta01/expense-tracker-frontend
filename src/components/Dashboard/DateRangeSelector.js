import React from 'react';

const DateRangeSelector = ({ selectedDateRange, onChange }) => {
  const handleDateRangeChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Date Range: </label>
      <select value={selectedDateRange} onChange={handleDateRangeChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
  );
};

export default DateRangeSelector;
