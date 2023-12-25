import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are mandatory!!");
      return;
    }

    try {
      const res = await fetch("http://localhost:30001/user/createLogin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 404) {
        console.log(` Error :${res.statusText} ,user not found`);
      }
      if (res.status == 401) {
        console.log(` Error :${res.statusText} ,invalid password`);
      }
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", JSON.stringify(data));
        console.log(data);
        navigate("/expense");
      } else {
        const data = await res.json();
      }
    } catch (error) {
      console.error("Error logging in :", error);
    }
    setEmail("");
    setPassword("");
  };

  return (

    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h4> Welcome again to Expense-Tracker</h4>
            <form onSubmit={(e) => handleLogin(e)}>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  class="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label class="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label class="form-label" for="form1Example23">
                  Password
                </label>
              </div>
            

              <div class="d-flex justify-content-around align-items-center mb-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label class="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <NavLink to="/forgot">Forgot password?</NavLink>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block">
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
