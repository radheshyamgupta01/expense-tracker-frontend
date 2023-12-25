// // import React, { useEffect, useState, useCallback } from "react";
// // import styles from "./ExpenseForm.module.css";
// // import classes from "./styles.module.css";
// // import ExpenseList from "./ExpenseList";
// // import { useDispatch, useSelector } from "react-redux";
// // import { expenseAction } from "../../store/expenseSlice";
// // import { toggleDarkMode } from "../../store/themeSlice";
// // import { CSVLink } from "react-csv";

// // const Expenses = () => {
// //   const [expenses, setExpenses] = useState([]);
// //   const [moneySpent, setMoneySpent] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [premium, setPremium] = useState(false);
// //   const [premiumActive, setPremiumActive] = useState(false);
// //   const [csvData, setCsv] = useState("No Data");
// //   const [isEdit, setEdit] = useState(false);
// //   const [expenseId, setExpenseId] = useState(null);
// //   const userEmail = localStorage.getItem("email");

// //   const dispatch = useDispatch();
// //   const darkMode = useSelector((state) => state.theme.darkMode);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (isEdit === true) {
// //       const expenseData = {
// //         amount: moneySpent,
// //         description: description,
// //         category: selectedCategory,
// //       };
// //       dispatch(expenseAction.addAmount(moneySpent));
// //       dispatch(expenseAction.addDesc(description));
// //       dispatch(expenseAction.addCategory(selectedCategory));
// //       fetch(
// //         `https://e-commerse-23b6e-default-rtdb.firebaseio.com/userExpenses${userEmail}/${expenseId}.json`,
// //         {
// //           method: "PUT",
// //           body: JSON.stringify(expenseData),
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       )
// //         .then((response) => {
// //           setEdit(false);
// //           console.log(response);
// //           fetchExpenses();
// //         })
// //         .catch((err) => {
// //           alert("Not able to edit successfully - " + err);
// //         });
// //     } else {
// //       const expenseData = {
// //         amount: moneySpent,
// //         description: description,
// //         category: selectedCategory,
// //       };
// //       dispatch(expenseAction.addAmount(moneySpent));
// //       dispatch(expenseAction.addDesc(description));
// //       dispatch(expenseAction.addCategory(selectedCategory));

// //       fetch(
// //         `https://e-commerse-23b6e-default-rtdb.firebaseio.com/userExpenses${userEmail}.json`,
// //         {
// //           method: "POST",
// //           body: JSON.stringify(expenseData),
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       )
// //         .then((response) => {
// //           if (!response.ok) {
// //             throw new Error("Something went wrong!");
// //           }
// //           return response.json();
// //         })
// //         .then((data) => {
// //           console.log("Expense added successfully!", data);
// //           const expenseDataWithId = { ...expenseData, id: data.name };
// //           setExpenses((prevExpenses) => [...prevExpenses, expenseDataWithId]);
// //           fetchExpenses();
// //         })
// //         .catch((error) => {
// //           console.error("Error adding expense:", error);
// //           alert("Error adding expense");
// //         });
// //     }
// //     setMoneySpent("");
// //     setDescription("");
// //     setSelectedCategory("");
// //   };

// //   const fetchExpenses = useCallback(() => {
// //     fetch(
// //       `https://e-commerse-23b6e-default-rtdb.firebaseio.com/userExpenses${userEmail}.json`,
// //       {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     )
// //       .then((response) => {
// //         if (response.ok) {
// //           response.json().then((data) => {
// //             console.log(data);
// //             let arr = [];
// //             for (let key in data) {
// //               arr.push({
// //                 id: key,
// //                 description: data[key].description,
// //                 amount: data[key].amount,
// //                 category: data[key].category,
// //               });
// //             }
// //             setCsv(arr);
// //             setExpenses(arr);
// //             localStorage.setItem("allExpense", JSON.stringify(arr));
// //             dispatch(expenseAction.addExpenses(expenses));
// //           });
// //         } else {
// //           response.json().then((data) => {
// //             let errorMessage = "Add Expense Failed!!";
// //             if (data && data.error && data.error.message) {
// //               errorMessage = data.error.message;
// //             }
// //             throw new Error(errorMessage);
// //           });
// //         }
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }, [dispatch, userEmail, expenses]);

// //   useEffect(() => {
// //     fetchExpenses();
// //   }, []);

// //   const editHandler = (id) => {
// //     let editExpense = expenses.filter((expense) => {
// //       return expense.id === id;
// //     });
// //     setEdit(true);
// //     setExpenseId(id);
// //     setMoneySpent(editExpense[0].amount);
// //     setDescription(editExpense[0].description);
// //     setSelectedCategory(editExpense[0].category);
// //     console.log(editExpense);
// //   };

// //   const deleteHandler = (id) => {
// //     fetch(
// //       `https://e-commerse-23b6e-default-rtdb.firebaseio.com/userExpenses${userEmail}/${id}.json`,
// //       {
// //         method: "DELETE",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     )
// //       .then((response) => {
// //         console.log(response);
// //         setExpenses((expense) => expense.filter((item) => item.id !== id));
// //       })
// //       .catch((err) => {
// //         alert("Expense not deleted!! " + err);
// //       });
// //   };

// //   useEffect(() => {
// //     for (let i = 0; i < expenses.length; i++) {
// //       if (expenses[i].amount > 10000 && premiumActive === false) {
// //         setPremium(true);
// //         break;
// //       } else {
// //         setPremium(false);
// //       }
// //     }
// //   }, [expenses, premiumActive]);

// //   const activatePremiumHandler = () => {
// //     if (premium === true) {
// //       setPremiumActive(true);
// //       setPremium(false);
// //     } else {
// //       setPremiumActive(false);
// //     }
// //   };

// //   let header = [
// //     {
// //       label: "Amount",
// //       key: "amount",
// //     },
// //     {
// //       label: "Description",
// //       key: "description",
// //     },
// //     {
// //       label: "Category",
// //       key: "category",
// //     },
// //   ];

// //   return (
// //     <div className={styles.container}>
// //       <div
// //         className={
// //           darkMode
// //             ? `${styles.expenseForm} ${classes.darkTheme}`
// //             : styles.expenseForm
// //         }
// //       >
// //         <div className={styles.formHeader}>
// //           <h2>Expense Tracker</h2>
// //           {premiumActive && (
// //             <button
// //               className={styles.themeBtn}
// //               onClick={() => dispatch(toggleDarkMode())}
// //             >
// //               Toggle Dark Mode
// //             </button>
// //           )}
// //         </div>

// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             placeholder="Description"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="number"
// //             placeholder="Enter Amount"
// //             value={moneySpent}
// //             onChange={(e) => setMoneySpent(e.target.value)}
// //             required
// //           />
// //           <select
// //             value={selectedCategory}
// //             onChange={(e) => setSelectedCategory(e.target.value)}
// //             required
// //           >
// //             <option value="" disabled>
// //               Select Category
// //             </option>
// //             <option value="Food">Food</option>

// //             <option value="Petrol">Petrol</option>

// //             <option value="Other">Other</option>
// //           </select>
// //           <button className={styles.submitBtn} type="submit">
// //             Add Expense
// //           </button>
// //         </form>
// //         <ExpenseList
// //           expenses={expenses}
// //           editHandler={editHandler}
// //           deleteHandler={deleteHandler}
// //         />
// //         <div>
// //           {premium && (
// //             <button
// //               className={styles.premiumBtn}
// //               onClick={activatePremiumHandler}
// //             >
// //               Activate Premium
// //             </button>
// //           )}

// //           {premiumActive && (
// //             <button className={styles.csvBtn}>
// //               <CSVLink data={csvData} headers={header} filename="expenses.csv">
// //                 Download Expense File
// //               </CSVLink>
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Expenses;
// import React, { useEffect, useState, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { expenseAction } from "../../store/expenseSlice";
// import { toggleDarkMode } from "../../store/themeSlice";
// import { CSVLink } from "react-csv";
// import ExpenseList from "./ExpenseList";

// const Expenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [moneySpent, setMoneySpent] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [premium, setPremium] = useState(false);
//   const [premiumActive, setPremiumActive] = useState(false);
//   const [csvData, setCsv] = useState("No Data");
//   const [isEdit, setEdit] = useState(false);
//   const [expenseId, setExpenseId] = useState(null);
//   const userEmail = localStorage.getItem("email");

//   const getAll = async () => {
//     try {
//       const response = await fetch("http://localhost:30001/expense/getAll", {
//         method: "get",
//       });

//       if (!response.ok) {
//         throw new Error("something went wrong");
//       }

//       const data = await response.json();
//       setExpenses(data);

//       // Call the function
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     getAll();
//   }, []);

//   // const dispatch = useDispatch();
//   // const darkMode = useSelector((state) => state.theme.darkMode);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://localhost:30001/expense/createExpense",
//         {
//           method: "post",
//           body: JSON.stringify({
//             amount: moneySpent,
//             description: description,
//             catogary: selectedCategory,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       setExpenses([...expenses, data]);

//       if (isEdit === true) {
//         // ... (unchanged code)
//       } else {
//         // ... (unchanged code)
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     }

//     setMoneySpent("");
//     setDescription("");
//     setSelectedCategory("");
//   };

//   // const fetchExpenses = useCallback(() => {
//   //   // ... (unchanged code)
//   // }, [dispatch, userEmail, expenses]);

//   // useEffect(() => {
//   //   fetchExpenses();
//   // }, []);

//   const editHandler = async (id) => {
//     setSelectedCategory(selectedCategory)
//     setMoneySpent(moneySpent)
//     setDescription(description)
//     try {
//       const response = await fetch(
//         `http://localhost:30001/expense/edit/${id}`,
//         {
//           method: "put",
//           body: JSON.stringify({
//             amount: moneySpent,
//             description: description,
//             catogary: selectedCategory,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (err) {}
//   };

//   const deleteHandler = async (id) => {
//     console.log(id);
//     try {
//       const response = await fetch(
//         `http://localhost:30001/expense/delete/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       getAll();
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   // useEffect(() => {
//   //   // ... (unchanged code)
//   // }, [expenses, premiumActive]);

//   let header = [
//     {
//       label: "Amount",
//       key: "amount",
//     },
//     {
//       label: "Description",
//       key: "description",
//     },
//     {
//       label: "Category",
//       key: "category",
//     },
//   ];

//   return (
//     // <div className={`container mt-4 ${darkMode ? "bg-dark text-light" : ""}`}>
//     <div className={`container mt-4 }`}>
//       <div
//         className={`p-4 rounded-lg shadow-lg `}
//         // className={`p-4 rounded-lg shadow-lg ${
//         //   darkMode ? "bg-dark" : "bg-light"
//         // }`}
//       >
//         <div className="d-flex justify-content-between align-items-center">
//           <h2 className="text-2xl font-semibold">Expense Tracker</h2>
//           {premiumActive && (
//             <button
//               className="btn btn-primary"
//               // onClick={() => dispatch(toggleDarkMode())}
//             >
//               Toggle Dark Mode
//             </button>
//           )}
//         </div>

//         <form onSubmit={handleSubmit} className="mt-4">
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={moneySpent}
//               onChange={(e) => setMoneySpent(e.target.value)}
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="mb-3">
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               required
//               className="form-select"
//             >
//               <option value="" disabled>
//                 Select Category
//               </option>
//               <option value="Food">Food</option>
//               <option value="Petrol">Petrol</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <button
//             // className={`btn btn-success ${darkMode ? "btn-dark" : ""}`}
//             className={`btn btn-success `}
//             type="submit"
//           >
//             Add Expense
//           </button>
//         </form>

//         <ExpenseList
//           expenses={expenses}
//           editHandler={editHandler}
//           deleteHandler={deleteHandler}
//         />

//         <div className="mt-4">
//           {premium && (
//             <button
//               className="btn btn-warning"
//               // onClick={activatePremiumHandler}
//             >
//               Activate Premium
//             </button>
//           )}

//           {/* {premiumActive && (
//             <button className={`btn btn-success ${darkMode ? "btn-dark" : ""}`}>
//               <CSVLink
//                 data={csvData}
//                 headers={header}
//                 filename="expenses.csv"
//                 className="text-light"
//               >
//                 Download Expense File
//               </CSVLink>
//             </button>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Expenses;
// import React, { useEffect, useState } from "react";
// import ExpenseList from "./ExpenseList";

// const Expenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [moneySpent, setMoneySpent] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [isEdit, setIsEdit] = useState(false);
//   const [expenseId, setExpenseId] = useState(null);

//   const getAllExpenses = async () => {
//     try {
//       const response = await fetch("http://localhost:30001/expense/getAll", {
//         method: "get",
//       });

//       if (!response.ok) {
//         throw new Error("something went wrong");
//       }

//       const data = await response.json();
//       setExpenses(data);
//     } catch (err) {
//       console.error("Error fetching expenses:", err);
//     }
//   };

//   useEffect(() => {
//     getAllExpenses();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:30001/expense/createExpense", {
//         method: "post",
//         body: JSON.stringify({
//           amount: moneySpent,
//           description: description,
//           catogary: selectedCategory,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (isEdit) {
//         // Update existing expense
//         const updatedExpenses = expenses.map((expense) =>
//           expense.id === expenseId ? data : expense
//         );
//         setExpenses(updatedExpenses);
//         setIsEdit(false);
//       } else {
//         // Add new expense
//         setExpenses([...expenses, data]);
//       }

//       setMoneySpent("");
//       setDescription("");
//       setSelectedCategory("");
//     } catch (err) {
//       console.error("Error adding/editing expense:", err);
//     }
//   };

//   const editHandler = (id) => {
//     const editExpense = expenses.find((expense) => expense.id === id);
//     setIsEdit(true);
//     setExpenseId(id);
//     setMoneySpent(editExpense.amount);
//     setDescription(editExpense.description);
//     setSelectedCategory(editExpense.catogary);
//   };

//   const deleteHandler = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:30001/expense/delete/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       getAllExpenses();
//     } catch (err) {
//       console.error("Error deleting expense:", err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Enter Amount"
//           value={moneySpent}
//           onChange={(e) => setMoneySpent(e.target.value)}
//           required
//         />
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           required
//         >
//           <option value="" disabled>
//             Select Category
//           </option>
//           <option value="Food">Food</option>
//           <option value="Petrol">Petrol</option>
//           <option value="Other">Other</option>
//         </select>
//         <button type="submit">{isEdit ? "Update Expense" : "Add Expense"}</button>
//       </form>

//       <ExpenseList
//         expenses={expenses}
//         editHandler={editHandler}
//         deleteHandler={deleteHandler}
//       />
//     </div>
//   );
// };

// export default Expenses;
// import React, { useEffect, useState } from "react";
// import ExpenseList from "./ExpenseList";

// const Expenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [moneySpent, setMoneySpent] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [isEdit, setIsEdit] = useState(false);
//   const [expenseId, setExpenseId] = useState(null);

//   const getAllExpenses = async () => {
//     try {
//       const response = await fetch("http://localhost:30001/expense/getAll", {
//         method: "get",
//       });

//       if (!response.ok) {
//         throw new Error("something went wrong");
//       }

//       const data = await response.json();
//       setExpenses(data);
//     } catch (err) {
//       console.error("Error fetching expenses:", err);
//     }
//   };

//   useEffect(() => {
//     getAllExpenses();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:30001/expense/createExpense", {
//         method: "post",
//         body: JSON.stringify({
//           amount: moneySpent,
//           description: description,
//           catogary: selectedCategory,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (isEdit) {
//         // Update existing expense
//         const updatedExpenses = expenses.map((expense) =>
//           expense.id === expenseId ? data : expense
//         );
//         setExpenses(updatedExpenses);
//         setIsEdit(false);
//       } else {
//         // Add new expense
//         setExpenses([...expenses, data]);
//       }

//       setMoneySpent("");
//       setDescription("");
//       setSelectedCategory("");
//     } catch (err) {
//       console.error("Error adding/editing expense:", err);
//     }
//   };

//   const editHandler = (id) => {
//     const editExpense = expenses.find((expense) => expense.id === id);
//     setIsEdit(true);
//     setExpenseId(id);
//     setMoneySpent(editExpense.amount);
//     setDescription(editExpense.description);
//     setSelectedCategory(editExpense.catogary);
//   };

//   const deleteHandler = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:30001/expense/delete/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       getAllExpenses();
//     } catch (err) {
//       console.error("Error deleting expense:", err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="container flex d-col">
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           className="col-6"
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Enter Amount"
//           value={moneySpent}
//           className="col-6"
//           onChange={(e) => setMoneySpent(e.target.value)}
//           required
//         />
//         <select
//           value={selectedCategory}
//           className="col-6"
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           required
//         >
//           <option value="" disabled>
//             Select Category
//           </option>
//           <option value="Food">Food</option>
//           <option value="Petrol">Petrol</option>
//           <option value="Other">Other</option>
//         </select>
//         <button className="col-6" type="submit">{isEdit ? "Update Expense" : "Add Expense"}</button>
//       </form>

//       <ExpenseList
//         expenses={expenses}
//         editHandler={editHandler}
//         deleteHandler={deleteHandler}
//       />
//     </div>
//   );
// };

// export default Expenses;
import React, { useContext, useEffect, useState } from "react";
import ExpenseList from "./ExpenseList";
import EditExpenseModal from "./ExpenseModel";
import Ctx from "../contex/Contex";
import RazorpayIntegration from "./PurchaseMember";
import Leaderboard from "./Leaderboard";
import ExpenseModel from "./ExpenseModel";
import Modal from "./ExpenseModel";
import Profile from "./Profile";
import Pagination from "./Pagination";
const Expenses = () => {
  const { setIDHandler, editDataHandler, editData } = useContext(Ctx);
  const [expenses, setExpenses] = useState([]);
  const [moneySpent, setMoneySpent] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [expenseId, setExpenseId] = useState(null);
  const [premiumMessage, setPremiumMessage] = useState("");
  const getToken = JSON.parse(localStorage.getItem("token"));
  const [PaginationExpenses, setPaginationExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expensesPerPage] = useState(10);

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
      console.log(data);
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

      const data = await response.json();
      setExpenses([...expenses, data]);

      setMoneySpent("");
      setDescription("");
      setSelectedCategory("");
    } catch (err) {
      console.error("Error adding/editing expense:", err);
    }
  };

  const editHandler = async (id) => {
    setIDHandler(id);
    editDataHandler();

    try {
      if (id) {
        const editExpense = expenses.find((expense) => expense.id === id);
        setIsEdit(true);
        setExpenseId(id);

        // Assuming deleteHandler returns a promise

        editHandler2(id);

        // Call getAllExpenses after deleteHandler is done

        // You can add more code here if needed after getAllExpenses
      }
    } catch (error) {
      console.error("Error in editHandler:", error);
      // Handle errors if needed
    }
  };
  const editHandler2 = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:30001/expense/edit/${id}`,
        {
          method: "put",
          body: JSON.stringify({
            amount: moneySpent,
            description: description,
            catogary: selectedCategory,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(" something went wrong while editing");
      }
      // getAllExpenses()
      const data = response.json();
      console.log(data);
      setExpenses([...expenses, data]);
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };
  useEffect(() => {
    const paginationPage = async () => {
      console.log('Before fetch');
      const response = await fetch(`http://localhost:30001/expense/pagination`, {
        method: "get",
      });
  
      if (response.ok) {
        alert("success");
        const data = await response.json();
        console.log(data, "fetching successfully");
        setPaginationExpenses(data);
      }
    };
  
    paginationPage();
  }, []);
  
  
   // Get current expenses
   const indexOfLastExpense = currentPage * expensesPerPage;
   const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
   const currentExpenses = PaginationExpenses.slice(indexOfFirstExpense, indexOfLastExpense);
// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    // <div>

    //   {editData ? (
    //     <Modal></Modal>
    //   ) : (
    //     <div className="container mt-4">

    //       <div className="p-4 rounded-lg shadow-lg">
    //         <div className="d-flex justify-content-between align-items-center">
    //           <h2
    //             className="text-2xl font-semibold"
    //             style={{
    //               fontFamily: "Sofia, sans-serif",
    //               textShadow: "3px 3px 3px #ababab",
    //             }}
    //           >
    //             𝓔𝔁𝓹𝓮𝓷𝓼𝓮 𝓽𝓻𝓪𝓬𝓴𝓮𝓻{" "}
    //           </h2>
    //         </div>

    //         <form onSubmit={handleSubmit} className="mt-4">
    //           <div className="mb-3">
    //             <input
    //               type="text"
    //               // style={{ fontFamily: "Sofia" }}
    //               placeholder="Description"
    //               value={description}
    //               onChange={(e) => setDescription(e.target.value)}
    //               required
    //               className="form-control"
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <input
    //               type="number"
    //               // style={{ fontFamily: "Sofia" }}
    //               placeholder="Enter Amount"
    //               value={moneySpent}
    //               onChange={(e) => setMoneySpent(e.target.value)}
    //               required
    //               className="form-control"
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <select
    //               value={selectedCategory}
    //               // style={{ fontFamily: "Sofia" }}
    //               onChange={(e) => setSelectedCategory(e.target.value)}
    //               required
    //               className="form-select"
    //             >
    //               <option value="" disabled>
    //                 Select Category
    //               </option>
    //               <option value="Food">Food</option>
    //               <option value="Petrol">Petrol</option>
    //               <option value="Other">Other</option>
    //             </select>
    //           </div>
    //           <button className="btn btn-success" type="submit">
    //             {editData ? "Update Expense" : "Add Expense"}
    //           </button>
    //           {/* <button
    //   className="btn btn-warning ml-4"
    //   type="submit"
    //   onClick={handlePayment}
    // >
    //   PremiumButton
    // </button> */}
    //           <button className="btn btn-warning ml-4" type="submit">
    //             <RazorpayIntegration></RazorpayIntegration>
    //           </button>

    //           <button className="btn btn-warning ml-4" type="submit">
    //             <Leaderboard handleSubmit={handleSubmit}></Leaderboard>
    //           </button>
    //         </form>

    //         <ExpenseList
    //           expenses={expenses}
    //           editHandler={editHandler}
    //           deleteHandler={deleteHandler}
    //         />
    //       </div>
    //     </div>
    //   )}
    // </div><>
    <>
      <section>
        <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Dashboard
                  </a>
                </li>
            
              </ul>

              <div class="d-flex align-items-center">
              <div class="input-group">
                  <input type="search" id="form1" class="form-control" />
                  <label class="form-label visually-hidden" for="form1">
                    Search
                  </label>
                  <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
                <div class="dropdown px-4">
                  <a
                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      class="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        My profile
                      </a>
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
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div class="row">
          <div class="col-md-8 mb-4">
            <div class="card mb-4">
              <div class="card-header py-3 flex justify-between">
                <h2
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "Sofia, sans-serif",
                    textShadow: "3px 3px 3px #ababab",
                  }}
                >
                  𝓔𝔁𝓹𝓮𝓷𝓼𝓮 𝓽𝓻𝓪𝓬𝓴𝓮𝓻{" "}
                </h2>
              </div>

              <div class="card-body">
                <form>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        // style={{ fontFamily: "Sofia" }}
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
                        // style={{ fontFamily: "Sofia" }}
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
                        // style={{ fontFamily: "Sofia" }}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        required
                        className="form-select"
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="Food">Food</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <button className="btn btn-success" type="submit">
                      {editData ? "Update Expense" : "Add Expense"}
                    </button>
                    {/* <button
      className="btn btn-warning ml-4"
      type="submit"
      onClick={handlePayment}
    >
      PremiumButton
    </button> */}
                  </form>
                </form>
                <ExpenseList
                  expenses={expenses}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                  currentExpensese={currentExpenses}
                />
                <Pagination
                
                expensesPerPage={expensesPerPage}
                totalExpenses={PaginationExpenses.length}
                currentPage={currentPage}
                paginate={paginate}
                
                ></Pagination>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card mb-4">
              <div class="card-header py-3 flex  ">
                <h5 class="mb-0">Overview</h5>
              </div>
              <button className="btn btn-warning ml-4" type="submit">
                <RazorpayIntegration></RazorpayIntegration>
              </button>

              <div class="card-body">
                <ul class="list-group list-group-flush">
                  {/* <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>$53.98</span>
              <Leaderboard></Leaderboard>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p class="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>$53.98</strong></span>
            </li> */}
                  <Leaderboard></Leaderboard>
                  <div class="card">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <i class="fas fa-trophy"></i>
                      </h5>
                      <p class="card-text">Rohan</p>
                    </div>
                  </div>
                  <div class="card-group">
                    <div class="card">
                      <img
                        src="data:image/jpeg;base64,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"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                        <i class="fas fa-medal"></i>
                        
                        </h5>
                        <p class="card-text">Aarya.</p>
                      </div>
                    </div>
                    <div class="card">
                      <img
                        src="data:image/jpeg;base64,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"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                        <i class="fas fa-award"></i>
                        </h5>
                        <p class="card-text">Suman.</p>
                      </div>
                    </div>
                  </div>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">All User</th>

                        <th scope="col">Total Expense</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"></th>
                        <td>
                          <div class="d-inline-flex position-relative">
                            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                              <span class="visually-hidden">Rohan</span>
                            </span>
                            <img
                              class="rounded-4 shadow-4"
                              src="https://mdbootstrap.com/img/Photos/Avatars/man2.jpg"
                              alt="Avatar"
                              style={{ width: "50px", height: "50px" }}
                            />
                            <span class="">Rohan</span>
                          </div>
                        </td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <div class="d-inline-flex position-relative">
                          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                          </span>
                          <img
                            class="rounded-4 shadow-4"
                            src="https://mdbootstrap.com/img/Photos/Avatars/man2.jpg"
                            alt="Avatar"
                            style={{ width: "50px", height: "50px" }}
                          />
                          <span class="">Rohan</span>
                        </div>
                        <td>4500</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <div class="d-inline-flex position-relative">
                          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                          </span>
                          <img
                            class="rounded-4 shadow-4"
                            src="https://mdbootstrap.com/img/Photos/Avatars/man2.jpg"
                            alt="Avatar"
                            style={{ width: "50px", height: "50px" }}
                          />
                          <span class="">Rohan</span>
                        </div>

                        <td> 4500</td>
                      </tr>
                    </tbody>
                  </table>
                  <Pagination></Pagination>
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

{
  /* <section>
  <div class="row">
    <div class="col-md-8 mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Biling details</h5>
        </div>
        <div class="card-body">
          <form>
         
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form6Example1" class="form-control" />
                  <label class="form-label" for="form6Example1">First name</label>
                </div>
              </div>
             
            </div>

           
            <div class="form-outline mb-4">
              <input type="text" id="form6Example3" class="form-control" />
              <label class="form-label" for="form6Example3">Company name</label>
            </div>

         
            <div class="form-outline mb-4">
              <input type="text" id="form6Example4" class="form-control" />
              <label class="form-label" for="form6Example4">Address</label>
            </div>

         
            <div class="form-outline mb-4">
              <input type="email" id="form6Example5" class="form-control" />
              <label class="form-label" for="form6Example5">Email</label>
            </div>

          
            <div class="form-outline mb-4">
              <input type="number" id="form6Example6" class="form-control" />
              <label class="form-label" for="form6Example6">Phone</label>
            </div>

            <hr class="my-4" />

            
            

            <hr class="my-4" />

           
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-3">
                <input
                  type="text"
                  // style={{ fontFamily: "Sofia" }}
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
                  // style={{ fontFamily: "Sofia" }}
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
                  // style={{ fontFamily: "Sofia" }}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                  className="form-select"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Food">Food</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button className="btn btn-success" type="submit">
                {editData ? "Update Expense" : "Add Expense"}
              </button>
              {/* <button
      className="btn btn-warning ml-4"
      type="submit"
      onClick={handlePayment}
    >
      PremiumButton
    </button> */
}
//   <button className="btn btn-warning ml-4" type="submit">
//     <RazorpayIntegration></RazorpayIntegration>
//   </button>

//   <button className="btn btn-warning ml-4" type="submit">
//     <Leaderboard handleSubmit={handleSubmit}></Leaderboard>
//   </button>
// </form>

//             <button class="btn btn-primary btn-lg btn-block" type="submit">
//               Continue to checkout
//             </button>
//           </form>
//           <ExpenseList
//               expenses={expenses}
//               editHandler={editHandler}
//               deleteHandler={deleteHandler}
//             />
//         </div>
//       </div>
//     </div>

//     <div class="col-md-4 mb-4">
//       <div class="card mb-4">
//         <div class="card-header py-3">
//           <h5 class="mb-0">Summary</h5>
//         </div>
//         <div class="card-body">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//               Products
//               <span>$53.98</span>
//               <Leaderboard></Leaderboard>
//             </li>
//             <li class="list-group-item d-flex justify-content-between align-items-center px-0">
//               Shipping
//               <span>Gratis</span>
//             </li>
//             <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//               <div>
//                 <strong>Total amount</strong>
//                 <strong>
//                   <p class="mb-0">(including VAT)</p>
//                 </strong>
//               </div>
//               <span><strong>$53.98</strong></span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </section> */}
