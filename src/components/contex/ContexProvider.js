import React, { useState } from "react";
import Ctx from "./Contex";
function ContexProvider({ children }) {
  const [Id, setID] = useState("");
  const [editData, setEditData] = useState(false);
  const [OpenModel, setIsModelOpen] = useState(false);
  const [localStorageData, setLocalStorageData] = useState(2);
  const [resData, setRestData] = useState([]);
  const [yearlyExpenseData, setyearlyExpenseData] = useState([]);
  const [yearlyTotalExpense, setyearlyTotalExpense] = useState([]);
  const [weeklyTotalExpense, setWeeklyTotalExpense] = useState([]);
  const [weeklyExpense, setWeeklyExpense] = useState([]);
 const [ expenseData,setexpenseData]=useState([])
 const [fetchUserExpeTableData, setFetchUserExpeTableData] = useState(false);
const FetchUserExpeTableDataHandler=(data)=>{
  setFetchUserExpeTableData(data)
}

  const getExpenseDataHandler=(data)=>{
setexpenseData(data)
  }
  const yearlyExpenseHandler = (data) => {
    setyearlyExpenseData(data);
  };
  const yearlyTotalExpenseHandler = (data) => {
    setyearlyTotalExpense(data);
  };
  const [amountData, setAmoutData] = useState(null);
  const amountHandler = (data) => {
    setAmoutData(data);
  };

  const resDatAHandler = (data) => {
    setRestData((prvData) => [...prvData, ...data]);
  };
  const setIDHandler = (id) => {
    setID(id);
  };
  const ModelOpener = () => {
    setIsModelOpen(!OpenModel);
  };
  const editDataHandler = () => {
    setEditData(!editData);
  };
  const weeklyTotalExpenseHandler = (data) => {
    setWeeklyTotalExpense(data);
  };
  const weeklyExpenseHandler = (data) => {
    setWeeklyExpense(data);
  };
  const localStorageDataHandler = (data) => {
    setLocalStorageData(data);
  };
  return (
    <Ctx.Provider
      value={{
        getExpenseDataHandler,expenseData,
        weeklyTotalExpenseHandler,
        weeklyExpenseHandler,
        fetchUserExpeTableData,FetchUserExpeTableDataHandler,
        weeklyExpense,weeklyTotalExpense,
        yearlyTotalExpense,
        yearlyExpenseData,
        yearlyExpenseHandler,
        yearlyTotalExpenseHandler,
        amountHandler,
        amountData,
        resDatAHandler,
        resData,
        ModelOpener,
        OpenModel,
        Id,
        setIDHandler,
        editDataHandler,
        editData,
        localStorageDataHandler,
        localStorageData,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export default ContexProvider;
