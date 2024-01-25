import React, { useState,useContext } from 'react';
 import Ctx from '../Contex/Contex';
export default function DropdownPerPageExp({setexpensesPerPage}) {
    const {localStorageDataHandler}= useContext(Ctx)
 
  


  const handleExpensesPerPageChange = (newValue) => {
    console.log(newValue,"this is new value")
    localStorageDataHandler(newValue)
   
    setexpensesPerPage(newValue)
   
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor="expensesPerPage">Expenses Per Page: </label>
      <select
     
        onChange={(e) => handleExpensesPerPageChange(e.target.value)}
        style={{ padding: '8px', fontSize: '14px' ,borderRadius:"10px "}}
        className="btn btn-primary mr-4 ml-4"
      >
         <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      
      </select>

    </div>
  );
}
