import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  const [error, setError]= useState("");
  
  const isLoggedIn=localStorage.getItem('token');
  console.log(isLoggedIn)


  const verifyHandler=(e)=>{
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBkF2-mE1bnkl0uqWpo1DqHfkG5bNacCd0",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: isLoggedIn,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
        if (res.ok) {
           res.json().then((data) => {
            console.log(data);
          })
        } else {
          res.json().then((data) => {
            if (data && data.error && data.error.message) {
              setError("Verification mail not sent... try again"+ data.error.message);
            }else{
              setError("Some error occured!! Please try again..")
            }
          });
        }
      }).catch((err) => {
        console.log("Some error in sending verification mail - " + err);
      });
  }

  return (
    <div className="home">
    <div className="home2">
    <h1>Welcome to Expense Tracker!!</h1>
    {isLoggedIn&& <h3><i>Your Profile is Incomplete <Link to="/profile">Complete Now</Link></i></h3>}
    
   {isLoggedIn && <div className="container">
        <h2>Verify your email </h2>
        <button className="verifyBtn" onClick={verifyHandler}>
          Verify Email 
        </button>
      </div>}
      <p className="error">{error}</p>
    </div>
    
      </div>
  )
}

export default Home