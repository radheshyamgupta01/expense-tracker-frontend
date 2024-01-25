import React, { useState, useContext } from "react";
import Ctx from "../../Contex/Contex";
import ReactDOM from "react-dom";
import RazorpayIntegration from "../../Razorpay/PurchaseMember";

const Modal = ({ children, editTableData ,getAllExpenses }) => {
  const { setIDHandler, editDataHandler, editData, ModelOpener, OpenModel } =
    useContext(Ctx);

  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState("");
  const [updated, setUpdated] = useState(false);

  const storedToken = localStorage.getItem("token");
  const { token } = JSON.parse(storedToken);
  console.log(token, "this is getting token from the  local storage");

  const updateHandler = async (e) => {
    e.preventDefault();
    if (!token) {
      console.error("Token not found");

      return;
    }

    try {
      const response = await fetch(
        `http://localhost:30001/expense/edit/${token}`,
        {
          method: "put",
          body: JSON.stringify({
            amount: expenseAmount,
            catogary: selectedExpenseCategory,
            description: expenseDescription,
            id: editTableData.id,
          }),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error updating expense: ${response.statusText}`);
      } else {
        const data = await response.json();
        console.log(data);
        setUpdated(true);
       
        setTimeout(() => {
          setUpdated(false);
          ModelOpener();
        }, 2000);
      }
    } catch (error) {
      console.error("Error updating expense:", error.message);
   
    }
  };

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
              onClick={() => ModelOpener()}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {children}
            <form className="mt-4" onSubmit={(e) => updateHandler(e)}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder={editTableData.description}
                  required
                  className="form-control"
                  value={expenseDescription}
                  onChange={(e) => setExpenseDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  placeholder={editTableData.amount}
                  required
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <select
                  placeholder={editTableData.catogary}
                  value={selectedExpenseCategory}
                  onChange={(e) => setSelectedExpenseCategory(e.target.value)}
                  required
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
                Update Expense"
              </button>
              {updated && (
                <div class="alert alert-success" role="alert">
                Item successfully updated
              </div>
              
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => ModelOpener()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default Modal;
