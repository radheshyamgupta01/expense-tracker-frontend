import React, { useState, useEffect } from "react";

import DownloadButton from "./DownloadButton";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import Footer from "../Footer/../Footer/Footer";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { isSameDay, isSameWeek, isSameMonth } from "date-fns";
import { IoPersonCircle } from "react-icons/io5";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { Button } from "react-bootstrap";
import Calendar from "./Calendar/Calender";
import MyCalendar from "./Calendar/Calender";
import Ctx from "../Contex/Contex";
import { useContext } from "react";
const Dashboard = ({ date }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("weekly");
  const {
    resDatAHandler,
    resData,
    amountHandler,
    amountData,
    yearlyTotalExpense,
    yearlyExpenseData,
    weeklyExpense,
    weeklyTotalExpense,
    yearlyExpenseHandler,
    yearlyTotalExpenseHandler,
    weeklyExpenseHandler,
    weeklyTotalExpenseHandler,
    getExpenseDataHandler,
    expenseData,
  } = useContext(Ctx);
  const [transactions, setTransactions] = useState([]);
  const [isPremiumUser, setIsPremiumUser] = useState(true);
  const [totalIncoomeData, setTotalIncomeData] = useState(0);
  const [totalProfit, setProfit] = useState(0);
  const [data, setData] = useState([]);
  const [calendar, setCalendar] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("token"));
  const token = storedData.token;
  const [selectedData, setSelectedData] = useState(null);
  const monthlyReportHandler = () => {
    setCalendar(true);
    setSelectedTimePeriod("monthly");
    handleSelection("monthly");
  };
  const YearlyReportHandler = () => {
    setCalendar(true);
    setSelectedTimePeriod("yearly");
    handleSelection("yearly");
  };
  const WeeklyReportHandler = () => {
    setCalendar(true);
    setSelectedTimePeriod("weekly");
    handleSelection("weekly");
  };
  const handleSelection = (data) => {
    setSelectedData(data);
  };
  const getAllMonthlyReportHandler = async () => {
    try {
      const response = await fetch(
        "http://localhost:30001/expense/getAllMonthlyIncome",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      resDatAHandler(responseData.monthlyData);
      amountHandler(responseData.monthlyExpense);
    } catch (err) {
      console.error("Error fetching monthly income:", err);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await fetch(
        `http://localhost:30001/expense/totalExpense/${token}`,
        {
          method: "get",
        }
      );
      const data = await response.json();

      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const getIncome = async () => {
    try {
      const response = await fetch(
        `http://localhost:30001/expense/getIncome/${token}`,
        {
          method: "get",
        }
      );
      const data = await response.json();
      setTotalIncomeData(data);
      console.log(data, "this is getting  income data");
    } catch (err) {
      console.log("getting some error", err);
    }
  };
  useEffect(() => {
    getIncome();
  }, []);
  const getProfit = async () => {
    try {
      const response = await fetch(
        `http://localhost:30001/expense/getprofit/${token}`,
        {
          method: "get",
        }
      );
      const data = await response.json();
      setProfit(data);
      console.log(data, "this is getting  income data");
    } catch (err) {
      console.log("getting some error", err);
    }
  };
  useEffect(() => {
    getProfit();
  }, []);
  console.log(resData, "this  is res data");
  const settingHandler = () => {
    window.location.href = "/expense";
  };
  return (
    <>
      <div className="bg-green" style={{ background: '#2c3e50' }}>
        <header style={{ fontFamily: "sanserif", marginRight: "10px",background: '#2c3e50' }}>
          <nav class="collapse d-lg-block sidebar collapse bg-light" style={{ background: '#2c3e50' }}>
            <div class="position-sticky"   style={{ background: '#2c3e50' }}>
              <div class="list-group list-group-flush mx-3 ">
                <div
                  class=" list-group-item-action py-2 ripple"
                  aria-current="true"
                ></div>

                <div class="list-group-item-action py-2 ripple"   style={{ background: '#2c3e50' }}>
                  <div class="card" style={{ background: '#2c3e50' }}>
                    <div class="card-body" style={{ background: '#2c3e50' }}>
                      <div class="col">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzTl9iPM9GYuyAyhNDR-JiJxL8KUgWUSLlueSAiBaJg&s"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <h5 class="card-title text-white ">Name - Radheshyam </h5>
                      <p class="card-text text-white">Full Stack Developer</p>
                      <p class="card-text text-white">India ,Mumbai</p>
                      <div
                        class="btn btn-primary"
                        onClick={() => settingHandler()}
                      >
                        Edit
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  className=" list-group-item py-2 ripple text-black btn-light"
                  // style={{ textDecoration: "none", backgroundColor: "#f4f4f4" }}
                  style={{ background: '#2c3e50' }}
                >
                  <i className="fas fa-cog fa-fw me-3 text-white"></i>
                  <span className="text-white" onClick={() => settingHandler()}>
                    Expense
                  </span>
                </a>
                <a
                  href="/dynamiccal"
                  class=" list-group-item py-2 ripple btn-light"
                  // style={{
                  //   textDecoration: "none ",
                  //   backgroundColor: "#f3f3f3",
                  // }}
                  style={{ background: '#2c3e50' }}
                >
                  <i className="fas fa-calendar fa-fw me-3 text-white"></i>

                  <span className="text-white">Calendar</span>
                </a>

                <a
                  href="/login"
                  className=" list-group-item list-group  ripple btn-light bg-btn-light text-white "
                  // style={{ textDecoration: "none", backgroundColor: "#f3f3f3" }}
                  style={{ background: '#2c3e50' }}
                >
                  <i className="fas fa-sign-out-alt fa-fw me-3 text-black bg-btn-light"></i>
                  <span className="text-white">Logout</span>
                </a>
              </div>
            </div>
          </nav>

          <nav
             style={{ background: '#2c3e50' }}
            class="navbar navbar-expand-lg navbar-light  fixed-top border"
          >
            <div class="container-fluid" style={{ background: '#2c3e50' }} >
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
              <a class="navbar-brand" href="#">
                <RiMoneyEuroCircleFill size={32} />
              </a>
              <ul class="navbar-nav ms-auto d-flex flex-row"   style={{ background: '#2c3e50' }}>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#"
                  
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
                  ></ul>
                </li>

            
              
                <li class="nav-item me-3 me-lg-0">
                  <a class="nav-link" href="#">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
             

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                    href="#"
                   
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
                      <NavLink to="/setting">Settings</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Logout</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main style={{ marginTop: "58px" }}>
          <div class="container pt-4">
            <div>
              {calendar && (
                <MyCalendar
                  setCalendar={setCalendar}
                  monthlyReportHandler={monthlyReportHandler}
                  YearlyReportHandler={YearlyReportHandler}
                ></MyCalendar>
              )}
            </div>

            <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
              <a class="navbar-brand text-info text-muted"   style={{ fontFamily: "sanserif", marginRight: "10px" }}>Dashboard</a>

              <ul className="nav nav-pills">
                <li className="nav-item ">
                  <button
                    style={{ fontFamily: "sanserif", marginRight: "10px" 
                   ,background: '#2c3e50' }}
                    className=" btn btn-primary ms-2 me-2 text-white"
                    onClick={WeeklyReportHandler}
                  >
                    Weekly Report
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    style={{ fontFamily: "sanserif", marginRight: "10px" 
                   , background: '#2c3e50' }}
                    className=" btn btn-primary ms-2 me-2 text-white"
                    onClick={() => monthlyReportHandler()}
                  >
                    Monthly Report
                  </button>
                </li>
                <li className="nav-item ">
                  <button
                    style={{ fontFamily: "sanserif", marginRight: "10px", background: '#2c3e50' }}
                    className=" btn  btn-primary ms-2 me-2 text-white"
                    onClick={() => YearlyReportHandler()}
                  >
                    Yearly Report
                  </button>
                </li>
                <li className="">
                  {selectedData && (
                    <>
                      {selectedData === "weekly" &&
                        weeklyExpense.length > 0 && (
                          <DownloadButton
                            isPremiumUser={isPremiumUser}
                            fileName={`Download_${selectedData}`}
                          />
                        )}

                      {selectedData === "monthly" && resData.length > 0 && (
                        <DownloadButton
                          isPremiumUser={isPremiumUser}
                          fileName={`Download_${selectedData}`}
                          getExpenseDataHandler={getExpenseDataHandler(resData)}
                        />
                      )}

                      {selectedData === "yearly" &&
                        yearlyExpenseData.length > 0 && (
                          <DownloadButton
                            isPremiumUser={isPremiumUser}
                            fileName={`Download_${selectedData}`}
                            className="bg-blue-500 text-white"
                            getExpenseDataHandler={getExpenseDataHandler(
                              yearlyExpenseData
                            )}
                          />
                        )}
                    </>
                  )}
                </li>
              </ul>
            </nav>
            <div class="row">
              <div class="col-sm-4" style={{ background: '#2c3e50' }}>
                <div class="card" style={{ background: '#2c3e50' }}>
                  <div class="card-body" style={{ background: '#2c3e50' }}>
                    <h5
                      class="card-title text-white"
                      style={{ fontFamily: "sanserif", marginRight: "10px" }}
                    >
                      Total Expense
                    </h5>
                    <p class="card-text text-white">₹{transactions.totalExpense}</p>
                    <button
                      onClick={() => fetchTransactions()}
                      type="button"
                      style={{ fontFamily: "sanserif", marginRight: "10px",
                      background: '#2c3e50' }}
                      class="btn btn-primary"
                    >
                      Total Expense
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card" style={{ background: '#2c3e50' }}>
                  <div class="card-body" style={{ background: '#2c3e50' }}>
                    <h5
                      class="card-title text-white" style={{ background: '#2c3e50' 
                     , fontFamily: "sanserif", marginRight: "10px" }}
                    >
                      Total Income
                    </h5>
                    <p class="card-text text-white"> ₹{totalIncoomeData}</p>
                    <button class="btn btn-primary" onClick={() => getIncome()} style={{ background: '#2c3e50' }}>
                      Total Income
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card" style={{ background: '#2c3e50' }}>
                  <div class="card-body" style={{ background: '#2c3e50' }}>
                    <h5 class="card-title text-white"  style={{ fontFamily: "sanserif", marginRight: "10px" }}>Total profit</h5>
                    <p class="card-text text-white"> ₹{totalProfit}</p>
                    <button class="btn btn-primary text-white" style={{ background: '#2c3e50' }} >Total profit</button>
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
              {selectedTimePeriod === "weekly" && (
                <h5>
                  <div className="container">
                    <h5
                      className="text-center mt-4 mb-3"
                      style={{ fontFamily: "sanserif", marginRight: "10px" }}
                    >
                     {weeklyExpense.length>0?<div className="text-white">Weekly Expense</div>:<div className="text-white">No Weekly Expense Found</div>} 
                    </h5>
                    {weeklyExpense.length > 0 ? (
                      <table className="table  table-striped">
                        <thead className="thead-info">
                          <tr  className="text-white"
                            style={{ backgroundColor: "#3498db"
                            
                              ,fontFamily: "sanserif",
                              marginRight: "10px",
                            }}
                          >
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Income</th>
                            <th scope="col">Expense</th>
                          </tr>
                        </thead>
                        <tbody>
                          {weeklyExpense.map((data) => (
                            <tr className="text-white b-0" key={data.id}   style={{ fontFamily: "sanserif", marginRight: "10px",border:"1px" }}>
                              <td>
                                {new Date(data.createdAt).toLocaleString()}
                              </td>
                              <td>{data.description}</td>
                              <td>{data.catogary}</td>
                              <td>--</td>
                              <td>{data.amount}</td>
                            </tr>
                          ))}
                          <tr  className="bg-blue-500 text-white" style={{ border: 'none' }}>
                            <td style={{ border: 'none' }}></td>
                            <td style={{ border: 'none' }}></td>
                            <td style={{ border: 'none' }}></td>
                            <td
                              style={{
                                fontFamily: "sanserif",
                                marginRight: "10px",
                               border: 'none' }}
                            >
                              Total income = ₹ {totalIncoomeData}
                            </td>
                            <td
                              style={{
                                fontFamily: "sanserif",
                                marginRight: "10px",
                               border: 'none' }}
                            >
                              {" "}
                              Weekly total expense = ₹ {weeklyTotalExpense}{" "}
                            </td>
                          </tr>
                          <tr  className="text-white bf-blue-500" style={{ border: 'none' }}>
                            <td style={{ border: 'none' }}></td>
                            <td style={{ border: 'none' }}></td>
                            <td style={{ border: 'none' }}></td>
                            <td style={{ border: 'none' }}></td>
                            <td
                              style={{
                                fontFamily: "sanserif",
                                marginRight: "10px",
                              border: 'none' }}
                            >
                              savings = ₹
                              {parseInt(totalIncoomeData, 10) -
                                parseInt(weeklyTotalExpense, 10)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <p
                      className="mt-4 mb-3 w-full object-fit-cover"
                      style={{ fontFamily: "sans-serif", marginRight: "10px", position: "relative" }}
                    >
                      <img
                        src="https://t3.ftcdn.net/jpg/05/61/33/26/240_F_561332618_4Pe7Jpro00VZF2c2e2AgLKIZNYt3A8gI.jpg"
                        style={{ width: "100%", height: "350px", borderRadius: "8px" }}
                        alt="No data available"
                      />
                    </p>
                    
                    )}
                  </div>
                </h5>
              )}

              {selectedTimePeriod == "monthly" && (
                <div className="container">
                  <h5
                    className="text-center mt-4 mb-3 text-white"
                    style={{ fontFamily: "sanserif", marginRight: "10px" }}
                  >
                    Monthly Expense
                  </h5>
                  <table className="table   table-striped">
                    <thead className="thead-info">
                      <tr className="text-white"
                        style={{ backgroundColor: "#3498db",fontFamily: "sanserif", marginRight: "10px"  }}
                       
                      >
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Income</th>
                        <th scope="col">Expense</th>
                      </tr>
                      <tr></tr>
                    </thead>

                    <tbody>
                      {resData.map((data) => {
                        return (
                          <tr  className="text-white"  style={{ fontFamily: "sanserif", marginRight: "10px" }}>
                            <td>{new Date(data.createdAt).toLocaleString()}</td>

                            <td>{data.description}</td>
                            <td>{data.catogary}</td>
                            <td>--</td>
                            <td>{data.amount}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tr  className="text-white bg-blue-500">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td
                        style={{ fontFamily: "sanserif", marginRight: "10px" }}
                      >
                        Total income = ₹ {totalIncoomeData}
                      </td>
                      <td
                        style={{ fontFamily: "sanserif", marginRight: "10px" }}
                      >
                        {" "}
                        Monthly expense ₹{amountData}{" "}
                      </td>
                    </tr>
                    <tr className="bg-blue-500 text-white">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>

                      <td
                        style={{ fontFamily: "sanserif", marginRight: "10px" }}
                      >
                        savings = ₹
                        {parseInt(totalIncoomeData, 10) -
                          parseInt(amountData, 10)}
                      </td>
                    </tr>
                  </table>
                </div>
              )}

              {selectedTimePeriod === "yearly" && (
                <h5>
                  <h5
                    className="text-center mt-4 mb-3 text-white"
                    style={{ fontFamily: "sanserif", marginRight: "10px" }}
                  >
                    Yearly expense
                  </h5>
                  <div className="container">
                    <table className="table   table-striped">
                      <thead className="thead-info">
                        <tr className="text-white"
                          style={{ backgroundColor: "#3498db",fontFamily: "sanserif",
                          marginRight: "10px", }}
                       
                        >
                          <th scope="col">Date</th>
                          <th scope="col">Description</th>
                          <th scope="col">Category</th>
                          <th scope="col">Income</th>
                          <th scope="col">Expense</th>
                        </tr>
                        <tr></tr>
                      </thead>

                      <tbody>
                        {yearlyExpenseData.map((data) => {
                          return (
                            <tr
                            className="text-white"
                              style={{
                                fontFamily: "sanserif",
                                marginRight: "10px",
                              }}
                            >
                              <td>
                                {new Date(data.createdAt).toLocaleString()}
                              </td>

                              <td>{data.description}</td>
                              <td>{data.catogary}</td>
                              <td>--</td>
                              <td>{data.amount}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tr style={{ backgroundColor: "#3498db" }}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> </td>
                      </tr>
                      <tr  className="text-white bg-blue-500">
                        <td className="bg-blue-500 text-white"></td>
                        <td className="bg-blue-500 text-white"></td>
                        <td className="bg-blue-500 text-white"></td>
                        <td
                          style={{
                            fontFamily: "sanserif",
                            marginRight: "10px",
                          }}
                          className="bg-blue-500 text-white"
                        >
                          Total income = ₹ {totalIncoomeData}
                        </td>
                        <td
                          style={{
                            fontFamily: "sanserif",
                            marginRight: "10px",
                          }}
                        >
                          {" "}
                          Yearly total expense ₹ {yearlyTotalExpense}{" "}
                        </td>
                      </tr>
                      <tr className="bg-blue-500 text-white">
                        <td className="bg-blue-500 text-white"></td>
                        <td className="bg-blue-500 text-white"></td>
                        <td className="bg-blue-500 text-white"></td>
                        <td className="bg-blue-500 text-white"></td>
                        <td
                          style={{
                            fontFamily: "sanserif",
                          
                          }} 
                          className="bg-blue-500 text-white"
                        >
                          savings = ₹
                          {parseInt(totalIncoomeData, 10) -
                            parseInt(yearlyTotalExpense, 10)}
                        </td>
                      </tr>
                    </table>
                  </div>
                </h5>
              )}
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Dashboard;
