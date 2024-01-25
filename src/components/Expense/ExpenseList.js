
import "./Model.css";
import Modal from "../Expense/Modal/ExpenseModel";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Ctx from "../Contex/Contex";
import { useContext } from "react";

const ExpenseList = ({
  expenses,
  deleteHandler,
  editHandler,
  currentExpenses,
  getAllExpenses 
}) => {
  
  const { ModelOpener, OpenModel } = useContext(Ctx);
  const [editTableData,setEditTableData]=useState()
 
  const handleEditClick = (id) => {
  
    const editExpenseData = currentExpenses.find(
      (expense) => expense.id === id
    );

    ModelOpener(true);

    
    setEditTableData({
      id: editExpenseData.id,
      catogary: editExpenseData.catogary,
      description: editExpenseData.description,
      amount: editExpenseData.amount,
    });
  };


  return (
    <div className="bg-light mt-4 overflow-x-auto">
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-white" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
            <th className="py-2 px-4" >
              Category
            </th>
            <th className="py-2 px-4" >
              Description
            </th>
            <th className="py-2 px-4" >
              Amount
            </th>
            <th className="py-2 px-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentExpenses.map((expense, index) => (
            <tr key={index} className="text-center" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
              <td className="py-2 px-4 " >
                {expense.catogary}
              </td>
              <td className="py-2 px-4" >
                {expense.description}
              </td>
              <td className="py-2 px-4" >
                Rs.{expense.amount}
              </td>
              <td className="py-2 px-4 " >
                <button
                  className="btn btn-primary me-2 text-shadow: 3px 3px 3px #ababab"
                
                  onClick={() => handleEditClick(expense.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandler(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       {OpenModel ? <Modal editTableData={editTableData} getAllExpenses ={getAllExpenses } ></Modal> : ""} 
    </div>
  );
};

export default ExpenseList;
