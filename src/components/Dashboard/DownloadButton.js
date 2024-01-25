import React, { useContext } from "react";
import { saveAs } from "file-saver";
import Ctx from "../Contex/Contex";

const DownloadButton = ({ isPremiumUser, fileName }) => {
  const {  getExpenseDataHandler,expenseData}=useContext(Ctx)
 
  const handleDownload = () => { 
    console.log(expenseData, "this is expense data ");
  
  
    const formattedData = expenseData.map(item => {
      return `Description: ${item.description}, Amount: ${item.amount}, Category: ${item.catogary}, Date: ${item.createdAt}`;
    }).join('\n');  
  
    const blob = new Blob([formattedData], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${fileName}.txt`);
  };
  
  

  return (
    <div>
      <button
        type="button"
        
        className="btn btn-primary"
        data-mdb-ripple-init
        onClick={handleDownload}
        disabled={!isPremiumUser}
        
        style={{ fontFamily: "sanserif", marginRight: "10px", background: '#2c3e50' }}
      >
        Download Expenses
      </button>
    </div>
  );
};

export default DownloadButton;
