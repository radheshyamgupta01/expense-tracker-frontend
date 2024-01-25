import React, { useContext, useEffect, useState } from "react";
import Income from "./Income";
import ExpenseList from "./ExpenseList";

import Ctx from "../Contex/Contex";
import RazorpayIntegration from "../Razorpay/PurchaseMember";
import Leaderboard from "./Leaderboard";


import Pagination from "./Pagination";
import { NavLink } from "react-router-dom";
import UserExpenseTable from "./UserExpTable";
const Expenses = () => {
  const {
    setIDHandler,
    editDataHandler,
    editData,
    localStorageData,
    ModelOpener,
    OpenModel,FetchUserExpeTableDataHandler
  } = useContext(Ctx);
  const [expenses, setExpenses] = useState([]);
  const [moneySpent, setMoneySpent] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [expenseId, setExpenseId] = useState(null);
  const [premiumMessage, setPremiumMessage] = useState("");
  const [PaginationExpenses, setPaginationExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchdata, setfetch] = useState(false);
  const [income, setIncome] = useState(false);

  const [expensesPerPage, setexpensesPerPage] = useState(5);

  const getToken = JSON.parse(localStorage.getItem("token"));
  console.log(getToken.token, "gettign token");
  const getAllExpenses = async () => {
    try {
      const response = await fetch("http://localhost:30001/expense/getAll", {
        method: "get",

        headers: {
          authorization: `Bearer ${getToken.token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();

      console.log("Data fetched successfully:", data);
      setExpenses(data);
    } catch (err) {
      console.log("Error fetching expenses:", err);
    }
  };

  useEffect(() => {
    getAllExpenses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:30001/expense/createExpense",
        {
          method: "post",
          body: JSON.stringify({
            amount: moneySpent,
            description: description,
            catogary: selectedCategory,
          }),
          headers: {
            authorization: `Bearer ${getToken.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
if(response.ok){
  const data = await response.json();

  setExpenses((prevExpenses) => [...prevExpenses, data]);
  setfetch(true);
  FetchUserExpeTableDataHandler(true)
}
     

      setMoneySpent("");
      setDescription("");
      setSelectedCategory("");
      getAllExpenses();
    } catch (err) {
      console.error("Error adding/editing expense:", err);
    }
  };

  const editHandler = async (id) => {
    try {
      if (id) {
        const editExpense = expenses.find((expense) => expense.id === id);
        setIDHandler(id);
        setIsEdit(true);
        setExpenseId(id);
        ModelOpener(true);

        const editedData = {
          amount: moneySpent,
          description: description,
          catogary: selectedCategory,
        };

        const response = await fetch(
          `http://localhost:30001/expense/edit/${id}`,
          {
            method: "put",
            body: JSON.stringify(editedData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Something went wrong while editing");
        }

        await getAllExpenses();

        setExpenses((prevExpenses) => {
          const updatedExpenses = prevExpenses.map((expense) =>
            expense.id === id ? { ...expense, ...editedData } : expense
          );
          return updatedExpenses;
        });

        console.log("Expense edited successfully");
      }
    } catch (error) {
      console.error("Error in editHandler:", error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:30001/expense/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      getAllExpenses();
      setfetch(true);
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  useEffect(() => {
    var paginationPage = async () => {
      console.log("Before fetch");
      const response = await fetch(
        `http://localhost:30001/expense/pagination`,
        {
          method: "get",
          headers: {
            authorization: `Bearer ${getToken.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // console.log(data, "fetching successfully  in paginations");
        setPaginationExpenses(data);
      }
    };

    paginationPage();
    getAllExpenses();
    setfetch(false);
  }, [fetchdata]);

  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = PaginationExpenses.slice(
    indexOfFirstExpense,
    indexOfLastExpense
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    getAllExpenses();
    console.log("this is also running ");

    setfetch(false);
  }, [fetchdata]);

  return (
    <>
      <section className="bg-light">
        <nav className="navbar navbar-expand-lg mb-2 border-b">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <h4 className="navbar-brand" style={{ fontFamily: "sanserif", marginRight:"10px" }}>Expense-Tracker</h4>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                <div className="dropdown px-4">
                  <NavLink
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    to="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height="25"
                      alt="Profile Avatar"
                      loading="lazy"
                    />
                  </NavLink>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <NavLink style={{ fontFamily: "sanserif", marginRight:"10px" }}
                        className="dropdown-item style-none w-full"
                        to="/dashboard"
                      >
                        My profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={{ fontFamily: "sanserif", marginRight:"10px" }}
                        className="dropdown-item style-none w-full"
                        to="/setting"
                      >
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      style={{ fontFamily: "sanserif", marginRight:"10px" }}
                        className="dropdown-item style-none w-full"
                        to="/login"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3 flex justify-between bg-primary text-white">
                {!income ? (
                  <h2 className="text-2xl font-semibold" style={{ fontFamily: "sanserif", marginRight:"10px" }}>Manage Expense</h2>
                ) : (
                  "Add Income"
                )}
              </div>

              <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
                {income ? (
                  <Income setIncome={setIncome}></Income>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        placeholder="Enter Amount"
                        value={moneySpent}
                        onChange={(e) => setMoneySpent(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        required
                        className="form-select"
                      >
                        <option value="" disabled style={{ fontFamily: "sanserif", marginRight:"10px" }}>
                          Select Category
                        </option>
                        <option value="Food" style={{ fontFamily: "sanserif", marginRight:"10px" }}>Food</option>
                        <option value="Petrol" style={{ fontFamily: "sanserif", marginRight:"10px" }}>Petrol</option>
                        <option value="Other" style={{ fontFamily: "sanserif", marginRight:"10px" }}>Other</option>
                      </select>
                    </div>
                    <button className="btn btn-success me-2" type="submit" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
                      {editData ? "Update Expense" : "Add Expense"}
                    </button>
                    <button
                      className="btn btn-success ms-2"
                      type="submit" style={{ fontFamily: "sanserif", marginRight:"10px" }}
                      onClick={() => setIncome(true)}
                    >
                      Add Income
                    </button>
                  </form>
                )}

                <ExpenseList
                  expenses={expenses}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                  currentExpenses={currentExpenses}
                  getAllExpenses={getAllExpenses}
                />
                <Pagination
                  expensesPerPage={expensesPerPage}
                  totalExpenses={PaginationExpenses.length}
                  currentPage={currentPage}
                  setexpensesPerPage={setexpensesPerPage}
                  paginate={paginate}
                ></Pagination>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3 flex bg-danger text-white">
                <h5 className="mb-0" style={{ fontFamily: "sanserif", marginRight:"10px" }}>Overview</h5>
              </div>
              <button className="btn  ml-4" type="submit">
                <RazorpayIntegration></RazorpayIntegration>
              </button>

              <div className="card-body">
                <ul className="list-group list-group-flush  border">
                  <Leaderboard handleSubmit={handleSubmit}></Leaderboard>
                  <UserExpenseTable></UserExpenseTable>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expenses;
