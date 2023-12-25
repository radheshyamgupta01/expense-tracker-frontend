import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carosal from "./HeroSection/Carosal";
import Card from "./HeroSection/Card";
import Footer from "./HeroSection/Footer";
import OffCanvas from "./HeroSection/Offcanvash";
import Header from "./HeroSection/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./HeroSection/Home";
import Expenses from "./components/expenses/ExpenseForm";
import Expense from "./components/expenses/Expense"
 import UsernameInput from "./RagistrationInput/EmailInput";
import PasswordInput from "./RagistrationInput/PasswordInput";
import SubmitButton from "./RagistrationInput/SubmitButton";
import Ragistration from "./RagistrationInput/Ragistration";
import RegistrationForm from "./RagistrationInput/User";
import Profile from "./components/expenses/Profile";
import ResetPasswordForm from "./pages/ResetPassForm";
import Forget from "./pages/Forgot";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      {/* Common layout components (Header, Carosal, Card, etc.) */}
     
   
    
      {/* Define routes */}
      <Routes>
        
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/expense" element={<Expense></Expense>} />
       
        <Route path="/forgot" element={<Forget></Forget>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/password/resetpassword/:resetId/:token" element={< ResetPasswordForm></ResetPasswordForm>} />

      </Routes>

      {/* Footer component */}
     
    </Router>
    
  );
}

export default App;

