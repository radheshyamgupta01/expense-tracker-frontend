import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Sign() {
 
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allReady, setAllReady] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setError("All fields are mandatory!!");
      return;
    }

    try {
      const res = await fetch("http://localhost:30001/user/createSignin", {
        method: "POST",
        body: JSON.stringify({
          FirstName: FirstName,
          LastName: LastName,
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 409) {
        console.log(`Error: ${res.statusText}. Email is already exists.`);
        setAllReady(true);
        setTimeout(() => {
          setAllReady(false);
        }, 5000);
      }
      if (res.ok) {
        setLoading(false);
        const data = await res.json();

        console.log(data);
        navigate("/login");
      } else {
        setLoading(false);
        const data = await res.json();
        if (data && data.error.message) {
          setError("Login not successful- " + data.error.message);
        } else {
          setError("Some error occurred!! Please try again..");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
const loginHandler=()=>{
  navigate("/login");
}
  return (
    <section class="vh-100" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container">
      
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <h4 class="nav-link" href="#">Expense</h4>
            </li>
          </ul>
  
          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-primary me-3" onClick={()=>loginHandler()}>Login</button>
            <a href="https://github.com/mdbootstrap/mdb-ui-kit" class="btn btn-dark px-3" role="button">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
      <div class="container ">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-12 col-xl-11">
            <div class=" text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class=" h1  mb-3 mx-1 mx-md-4 mt-3">Ragister</p>
                    {allReady && (
                      <div class="alert alert-warning mt-3" role="alert">
                        Email is already exists.
                      </div>
                    )}
                    <form class="mx-1 mx-md-4" onSubmit={(e) => handleLogin(e)}>
                      <div class="d-flex flex-row align-items-center mb-2">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Radheshyam "

                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <label class="form-label">Your Name</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Gupta"
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          <label class="form-label"> your LastName </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                         placeholder="Example@gmail.com"
                            class="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label class="form-label">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                          placeholder="12@hHF240J@!4F"
                            class="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label class="form-label" >
                            Password
                          </label>
                        </div>
                      </div>
                      <button type="submit" class="btn  btn-primary btn-lg">
                        Register
                      </button>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-steal-data-concept_23-2148534257.jpg?w=740&t=st=1705341919~exp=1705342519~hmac=9eb3e87f2ee66fbb1a16754025ddfb27670176b74302dd353cb44c5ebcc974e1"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign;
