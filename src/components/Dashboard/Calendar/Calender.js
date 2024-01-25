// MyCalendar.js

import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Ctx from "../../Contex/Contex";

const MyCalendar = ({
  onShow,
  setCalendar,
  monthlyReportHandler,
  YearlyReportHandler,
}) => {
  const { getExpenseDataHandler, weeklyTotalExpenseHandler,weeklyExpenseHandler,resDatAHandler, resData, amountHandler, amountData,yearlyExpenseHandler,  yearlyTotalExpenseHandler} =
    useContext(Ctx);
    const currentYear = new Date().getFullYear();
console.log(currentYear,"this is currnet year")
    const [date, setDate] = useState(new Date(currentYear, 0, 1));

  
  const storedData = JSON.parse(localStorage.getItem("token"));
  const token = storedData.token;


  const onChange = (newDate) => {
    setDate(newDate);
    console.log(newDate, "this is new data");
  };

  const handleOverlayClick = (e) => {
    // Check if e and e.target are defined
    if (e && e.target && e.target.classList.contains("modal-overlay-cal")) {
      onClose();
    }
  };
  
  

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalContentStyle = {
    backgroundColor: "white",
    padding: "20px",
    textAlign: "center",
  };

  const onClose = () => {
    setCalendar(false);
  };

  const monthlyReportHandler2 = async () => {
    console.log("this is monthly report handler ");
    setCalendar(false);
    try {
      const response = await fetch(
        `http://localhost:30001/expense/getMonthlyIncome/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ date: date.toISOString() }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      resDatAHandler(responseData.monthlyData);
      getExpenseDataHandler(resData.monthlyData)
      amountHandler(responseData.monthlyExpense);
    } catch (err) {
      console.error("Error fetching monthly income:", err);
    }
  };

  const YearlyReportHandler2 = async () => {
    try {
      setCalendar(false);
      const response = await fetch(
        "http://localhost:30001/expense/yearlyExpense",
        {
          method: "post",
          body: JSON.stringify({ date: date.toISOString() }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(" something went wrong ");
      }
      const data = await response.json();

      console.log(data,"this is yearly expense getting ");
      yearlyExpenseHandler(data.yearlyExpense)
      getExpenseDataHandler(data.yearlyExpense)
      yearlyTotalExpenseHandler(data.yearlyTotalExpense)



    } catch (err) {
      console.error("something went wrong", err);
    }
  };
  
  
  const WeeklyReportHandler2 = async () => {
    try {
      setCalendar(false);
      const response = await fetch(
        "http://localhost:30001/expense/weeklyExpense",
        {
          method: "post",
          body: JSON.stringify({ date: date.toISOString() }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(" something went wrong ");
      }
      const data = await response.json();

      console.log(data,"this is wekkly expense getting ");
      weeklyExpenseHandler(data.weeklyExpenses)
      getExpenseDataHandler(data.weeklyExpenses)
      weeklyTotalExpenseHandler(data.weeklyTotalExpense)
      


    } catch (err) {
      console.error("something went wrong", err);
    }
  };
 
  
  return createPortal(
    <div style={modalOverlayStyle} onClick={handleOverlayClick}>
      <div style={modalContentStyle}>
        <h3
          style={{
            color: "#333",
            backgroundColor: "#007bff",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "inline-block",
          }}
        >
          Select date, month, and year
        </h3>

        <Calendar
          onChange={onChange}
          value={date}
          date={date}
          resData={resData}
        />

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => monthlyReportHandler2()}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={()=>monthlyReportHandler2()}
        >
          Monthly
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={()=>YearlyReportHandler2()}
        >
          Yearly
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={()=>WeeklyReportHandler2()}
        >
          Weekly
        </button>
      </div>
    </div>,
    document.getElementById("calendar")
  );
};

export default MyCalendar;
