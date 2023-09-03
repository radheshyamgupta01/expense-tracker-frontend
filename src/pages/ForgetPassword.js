import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forgot.css"

const ForgetPassword = () => {
  const [email, setEmail]= useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState("");

  const passwordChangeHandler = (e) => {
    e.preventDefault();
    setLoading(true)

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBkF2-mE1bnkl0uqWpo1DqHfkG5bNacCd0",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        setLoading(false)
        if (response.ok) {
          response.json().then((data) => {
            console.log(data);
            alert("Password reset request sent")
          })
        } else {
          response.json().then((data) => {
            if(data && data.error.message){
                setError("SignUp not successful- " + data.error.message)
              } else{
                setError("Some error occured!! Please try again..")
              }
          });
        }
      }).catch((err) => {
        console.log("Reset Password request not sent - " +err.message);
      });
      setEmail("");
  };
  return (
    <>
    <div className="form-container" >
      <form  className="form">
        <h2>Forgot Password?</h2>
        <h3>Enter your registered email.</h3>
        <div className="bodycss">
          <input type="email" id="email" placeholder="Enter  your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <p className="errorMessage">{error}</p>
        {!loading && <button type="submit" onClick={passwordChangeHandler} className="btn">
          Send link
        </button>}
        <p className="para">
          Already a user? <Link to="/login">Login</Link>
        </p>
        {loading && <h2>Submitting Data...</h2>}
      </form>
      </div>
    </>
  );
};

export default ForgetPassword;