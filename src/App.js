import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

import Expenses from "./components/Expense/ExpenseForm";
import Expense from "./components/Expense/Expense";


import ResetPasswordForm from "./components/Auth/ResetPassForm";
import Forget from "./components/Auth/Forgot";
import Dashboard from "./components/Dashboard/Dashboard";
import DynamicCalendar from "./components/Dashboard/Calendar/DynamicCalendar";
import Setting from "./components/Dashboard/Setting";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
     
        <Route path="/expense" element={<Expense></Expense>} />
        <Route path="/setting" element={<Setting></Setting>}></Route>

        <Route path="/forgot" element={<Forget></Forget>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/password/resetpassword/:resetId/:token"
          element={<ResetPasswordForm></ResetPasswordForm>}
        />
         <Route
          path="/dynamiccal"
          element={<DynamicCalendar></DynamicCalendar>}
        ></Route> 
      </Routes>
    </Router>
  );
}

export default App;
