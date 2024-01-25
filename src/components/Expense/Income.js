import { elements } from "chart.js";
import React, { useState } from "react";


const Income = ({ setIncome }) => {
  const [amount, setAmount] = useState("");
  const [salary, setSalary] = useState("");

  const storedData = JSON.parse(localStorage.getItem("token"));
  const token = storedData.token;
  const IncomehandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:30001/expense/createIncome/${token}`,
        {
          method: "post",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            amount: amount,
            salary: salary,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      } else {
        const data = await response.json();
        console.log(data);
        setIncome(false);
      }
    } catch (err) {
      console.error("error", err);
    }
    setAmount("");
    setSalary("");
  };

  return (
    <div className="card-body">
      <form onSubmit={(e) => IncomehandleSubmit(e)} className="mt-4">
        <div className="mb-3">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Income description"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <button className="btn btn-success ms-2" type="submit">
          Add Income
        </button>
      </form>
    </div>
  );
};

export default Income;
