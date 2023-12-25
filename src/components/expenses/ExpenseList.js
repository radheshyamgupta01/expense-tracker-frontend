import React, { useState } from "react";

const ExpenseList = ({expenses, deleteHandler,editHandler,currentExpenses}) => {

 
  return (
    <div className="bg-light mt-4 overflow-x-auto">
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="py-2 px-4" style={{fontFamily:"Sofia"}}>Category</th>
            <th className="py-2 px-4" style={{fontFamily:"Sofia"}}>Description</th>
            <th className="py-2 px-4" style={{fontFamily:"Sofia"}}>Amount</th>
            <th className="py-2 px-4" style={{fontFamily:"Sofia"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentExpenses.map((expense, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 " style={{fontFamily:"Sofia"}}>{expense.catogary}</td>
              <td className="py-2 px-4" style={{fontFamily:"Sofia"}}>{expense.description}</td>
              <td className="py-2 px-4" style={{fontFamily:"Sofia"}}>Rs.{expense.amount}</td>
              <td className="py-2 px-4 " style={{fontFamily:"Sofia"}}>
                <button
                  className="btn btn-primary me-2  text-shadow: 3px 3px 3px #ababab"
                  style={{fontFamily:"Sofia"}}
                  onClick={() => editHandler(expense.id)}
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
    </div>
  );
};

export default ExpenseList;
