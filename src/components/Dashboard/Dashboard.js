import React, { useState, useEffect } from "react";
import DateRangeSelector from "./DateRangeSelector";
import ExpenseIncomeChart from "./ExpenseIncomeChart";
import DownloadButton from "./DownloadButton";
import "./Dashboard.css";
import Footer from "./Footer";
const Dashboard = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("monthly");
  const [expenses, setExpenses] = useState([50, 30, 20]); // Example data
  const [incomes, setIncomes] = useState([100, 80, 50]); // Example data
  const [isPremiumUser, setIsPremiumUser] = useState(true);

  useEffect(() => {
    // Fetch expenses and incomes based on selectedDateRange
    // Update state variables
  }, [selectedDateRange]);

  return (
    <>
      <div className="bg-light">
        {/* <!--Main Navigation--> */}
        <header>
          {/* <!-- Sidebar --> */}
          <nav
            id="sidebarMenu"
            class="collapse d-lg-block sidebar collapse bg-light"
          >
            <div class="position-sticky">
              <div class="list-group list-group-flush mx-3 mt-4">
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <i class="fa-solid fa-address-card"></i>

                  <span className="px-2">User Profile</span>
                </a>

                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <div class="card">
                    <div class="card-body">
                      <div class="col">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzTl9iPM9GYuyAyhNDR-JiJxL8KUgWUSLlueSAiBaJg&s"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <h5 class="card-title "> Name:Arjun</h5>
                      <p class="card-text">Position:Frontend Developer</p>
                      <a href="#" class="btn btn-primary">
                        Edit
                      </a>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-cog fa-fw me-3"></i>
                  <span>Settings</span>
                </a>

                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-calendar fa-fw me-3"></i>
                  <span>Calendar</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-sign-out-alt fa-fw me-3"></i>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </nav>
          {/* <!-- Sidebar -->

  <!-- Navbar --> */}
          <nav
            id="main-navbar"
            class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow"
          >
            {/* <!-- Container wrapper --> */}
            <div class="container-fluid">
              {/* <!-- Toggle button --> */}
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>

              {/* <!-- Brand --> */}
              <a class="navbar-brand" href="#">
              <i class="fa-solid fa-money-check-dollar"></i>
              </a>
              

              {/* <!-- Right links --> */}
              <ul class="navbar-nav ms-auto d-flex flex-row">
                {/* <!-- Notification dropdown --> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Some news
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another news
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <!-- Icon --> */}
                <li class="nav-item">
                  <a class="nav-link me-3 me-lg-0" href="#">
                    <i class="fas fa-fill-drip"></i>
                  </a>
                </li>
                {/* <!-- Icon --> */}
                <li class="nav-item me-3 me-lg-0">
                  <a class="nav-link" href="#">
                    <i class="fab fa-github"></i>
                  </a>
                </li>

                {/* <!-- Icon dropdown --> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flag-united-kingdom flag m-0"></i>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-united-kingdom flag"></i>English
                        <i class="fa fa-check text-success ms-2"></i>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-poland flag"></i>Polski
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-china flag"></i>中文
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-japan flag"></i>日本語
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-germany flag"></i>Deutsch
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-france flag"></i>Français
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-spain flag"></i>Español
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="flag-russia flag"></i>Русский
                      </a>
                    </li>
                  
                  </ul>
                </li>

                {/* <!-- Avatar --> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                      class="rounded-circle"
                      height="22"
                      alt="Avatar"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <div class="card" style={{ width: " 18rem" }}>
                        <div class="card-body">
                          <h5 class="card-title">Total Expense</h5>
                          <p class="card-text">250</p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- Container wrapper --> */}
          </nav>
          {/* <!-- Navbar --> */}
        </header>
        {/* <!--Main Navigation--> */}
        {/* <!-- Navbar --> */}

{/* <!-- Navbar --> */}
        {/* <!--Main layout--> */}
        <main style={{ marginTop: "58px" }}>
          
          <div class="container pt-4">
            <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
              <a class="navbar-brand text-info text-muted" href="#">
                Dashboard
                
              </a>
              
              
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading1">
                    {" "}
                    Daily Report{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">
                    {" "}
                    Monthly Report
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">
                    {" "}
                    Yearly Report
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">
                    {" "}
                    <DownloadButton isPremiumUser={isPremiumUser} />
                  </a>
                </li>
              </ul>
            </nav>
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Total Expense</h5>
                    <p class="card-text"> ₹12542554</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Total Revenue</h5>
                    <p class="card-text"> ₹2222222</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Total incomes</h5>
                    <p class="card-text"> ₹30000</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-root-margin="0px 0px -40%"
              data-bs-smooth-scroll="true"
              class="scrollspy-example bg-body-tertiary p-3 rounded-2"
              tabindex="0"
            >
              <h5 id="scrollspyHeading1">
                <div className="container">
                  <h5 className="text-center mt-4 mb-3">Daily Expense</h5>
                  <table className="table  table-bordered">
                    <thead className="thead-info">
                      <tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Income</th>
                        <th scope="col">Expense</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1-2-2021</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td >3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td >4</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </h5>
            
              <p>...</p>
              <div className="container">
                  <h5 className="text-center mt-4 mb-3">Monthly Expense</h5>
                  <table className="table  table-bordered">
                    <thead className="thead-info">
                      <tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Income</th>
                        <th scope="col">Expense</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td colSpan="2">3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td colSpan="2">4</td>
                        <td>Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              
              <p>...</p>
              <h5 id="scrollspyHeading3">
              <h5 className="text-center mt-4 mb-3">Yearly Expense</h5>
              <div className="container">
                 
              

                    <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Title</th>
      <th>Status</th>
      <th>Position</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width:" 45px",height:"45px"}}
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Software engineer</p>
        <p class="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span class="badge badge-success rounded-pill d-inline">Active</span>
      </td>
      <td>Senior</td>
      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              class="rounded-circle"
              alt=""
              style={{width:" 45px",height:"45px"}}
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Alex Ray</p>
            <p class="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Consultant</p>
        <p class="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span class="badge badge-primary rounded-pill d-inline"
              >Onboarding</span
          >
      </td>
      <td>Junior</td>
      <td>
        <button
                type="button"
                class="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
                >
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              class="rounded-circle"
              alt=""
              style={{width:" 45px", height:" 45px"}}
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Kate Hunington</p>
            <p class="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Designer</p>
        <p class="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span class="badge badge-warning rounded-pill d-inline">Awaiting</span>
      </td>
      <td>Senior</td>
      <td>
        <button
                type="button"
                class="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
                >
          Edit
        </button>
      </td>
    </tr>
  </tbody>
</table>
                  
                </div>
              </h5>
            </div>
          </div>
        </main>
        {/* <!--Main layout--> */}
        <Footer></Footer>
      </div>
     
    </>
  );
};

export default Dashboard;
