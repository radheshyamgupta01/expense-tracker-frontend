// import React, { useContext, useEffect, useState } from "react";
// import { Await, Navigate } from "react-router-dom";
// import Ctx from "../contex/Contex";
// import RazorpayIntegration from "./PurchaseMember";
// function ExpenseModel() {
//   const [editData, setEditData] = useState([]);
//   const [Description, setDescription] = useState("");
//   const [moneySpent, setMoneySpent] = useState("");
//   const [category, setSelectedCategory] = useState("");
//   const { Id } = useContext(Ctx);

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         const res = await fetch(`http://localhost:30001/expense/edit/${Id}`, {
//           method: "put",
//         });
//         const data = res.json();
//         console.log(data, "getting all data from ");
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllData();
//   });
//   return (
//    <div>

//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//       Launch demo modal
//     </button>

//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">
//             ...
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-primary">Save changes</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default ExpenseModel;
// {
//   /* <div>
// <button
//   type="button"
//   class="btn btn-primary"
//   data-bs-toggle="modal"
//   data-bs-target="#exampleModal"
// >
//   <h2
//     className="text-2xl font-extrabold"
//     style={{
//       fontFamily: "'Pacifico', cursive",
//       textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
//       color: "white",
//     }}
//   >
//     edit - 𝓔𝔁𝓹𝓮𝓷𝓼𝓮{" "}
//   </h2>
// </button>

// <div
//   class="modal fade"
//   id="exampleModal"
//   tabindex="-1"
//   aria-labelledby="exampleModalLabel"
//   aria-hidden="true"
// >
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">
//           {" "}
//           Expense Modal{" "}
//         </h1>
//         <button
//           type="button"
//           class="btn-close"
//           data-bs-dismiss="modal"
//           aria-label="Close"
//         ></button>
//       </div>
//       <div class="modal-body">
//         <div className="p-4 rounded-lg shadow-lg">
//           <div className="d-flex justify-content-between align-items-center">
//             <h2
//               className="text-2xl font-semibold"
//               style={{
//                 fontFamily: "Sofia, sans-serif",
//                 textShadow: "3px 3px 3px #ababab",
//               }}
//             >
//               𝓔𝔁𝓹𝓮𝓷𝓼𝓮 𝓽𝓻𝓪𝓬𝓴𝓮𝓻{" "}
//             </h2>
//           </div>

//           <form className="mt-4">
//             <div className="mb-3">
//               <input
//                 type="text"
//                 style={{ fontFamily: "Sofia" }}
//                 placeholder="Description"
//                 value={Description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//                 className="form-control"
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 style={{ fontFamily: "Sofia" }}
//                 placeholder="Enter Amount"
//                 value={moneySpent}
//                 onChange={(e) => setMoneySpent(e.target.value)}
//                 required
//                 className="form-control"
//               />
//             </div>
//             <div className="mb-3">
//               <select
//                 value={category}
//                 style={{ fontFamily: "Sofia" }}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 required
//                 className="form-select"
//               >
//                 <option value="" disabled>
//                   Select Category
//                 </option>
//                 <option value="Food">Food</option>
//                 <option value="Petrol">Petrol</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <button
//               className="btn btn-success"
//               type="submit"
//               style={{ fontFamily: "Sofia" }}
//             >
//               Update Expense
//             </button>
//             <button className="btn btn-warning ml-4" type="submit">
//            <RazorpayIntegration></RazorpayIntegration>
//             </button>
//           </form>
//         </div>
//       </div>
//       <div class="modal-footer">
//         <button
//           type="button"
//           class="btn btn-secondary"
//           data-bs-dismiss="modal"
//         >
//           Close
//         </button>
//         <button type="button" class="btn btn-primary">
//           Save changes
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// </div> */
// }
import React, { useState, useContext } from "react";
import Ctx from "../contex/Contex";
import ReactDOM from "react-dom";
import RazorpayIntegration from "./PurchaseMember";

const Modal = ({ children }) => {
  const { setIDHandler, editDataHandler,editData } = useContext(Ctx);
  const [expenses, setExpenses] = useState([]);
  const [moneySpent, setMoneySpent] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [expenseId, setExpenseId] = useState(null);
  const [premiumMessage, setPremiumMessage] = useState("");
  const getToken = JSON.parse(localStorage.getItem("token"));

  return ReactDOM.createPortal(
    <div className="modal" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
          <h2
      className="text-2xl font-semibold"
      style={{
        fontFamily: "Sofia, sans-serif",
        textShadow: "3px 3px 3px #ababab",
      }}
    >
      𝓔𝔁𝓹𝓮𝓷𝓼𝓮 𝓽𝓻𝓪𝓬𝓴𝓮𝓻{" "}
    </h2>
            <button
              type="button"
              className="btn-close"
              onClick={editDataHandler}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {children}
            <form className="mt-4">
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
              <button className="btn btn-warning ml-4" type="submit">
                <RazorpayIntegration></RazorpayIntegration>
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={editDataHandler}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default Modal;
