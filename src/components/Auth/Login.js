import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);
const [validPassword, setValidPassword] = useState(false);


  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

   

    try {
      const res = await fetch("http://localhost:30001/user/createLogin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
         
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
     
     
   
    
      if (res.ok) {
        const data = await res.json();
        setValidPassword(true);

        localStorage.setItem("token", JSON.stringify(data));
        console.log(data);
        navigate("/expense");
      } else {
        setInvalidPassword(true);
      }
    } catch (error) {
      console.error("Error logging in :", error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <section class="vh-100" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.1.25593491.1698475769&semt=ais"
              class="img-fluid"
            />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h4>Welcome back</h4>

            {invalidPassword && (
              <div className="alert alert-warning" role="alert">
                Invalid email or password
              </div>
            )}

            {validPassword && (
              <div className="alert alert-success" role="alert">
                Successfully logged in
              </div>
            )}

            <form onSubmit={(e) => handleLogin(e)}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                 
                  placeholder=" Example@gmail.com"
                  className="form-control form-control-lg"
                  value={email}
                  style={{ fontFamily: "sanserif", marginRight: "10px" }}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder=" 1d@5df&!10 "
                  style={{ fontFamily: "sanserif", marginRight: "10px" }}
             
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    checked
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <NavLink to="/forgot" className="text-decoration-none">
                  Forgot password?
                </NavLink>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
