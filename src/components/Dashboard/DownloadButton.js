import React from "react";
import { saveAs } from "file-saver";

const DownloadButton = ({ isPremiumUser }) => {
  const handleDownload = () => {
    // Logic to create and download the expense file
    const expenseData = "Category 1: $50\nCategory 2: $30\nCategory 3: $20"; // Replace with your actual data
    const blob = new Blob([expenseData], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "expenses.txt");
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-mdb-ripple-init
        onClick={handleDownload}
        disabled={!isPremiumUser}
      >
         Download Expenses
      </button>
    </div>
  );
};

export default DownloadButton;
