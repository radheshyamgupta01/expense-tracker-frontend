import React, { useEffect, useState } from "react";
import Ctx from "../Contex/Contex";
import { useContext } from "react";
const UserExpenseTable = () => {
  const {fetchUserExpeTableData,FetchUserExpeTableDataHandler}=useContext(Ctx)
  const [allUserData, setAllUserData] = useState([]);

  useEffect(() => {
    const fetchAllUserExpense = async () => {
      try {
        const response = await fetch(
          "http://localhost:30001/expense/allUserExp",
          {
            method: "get",
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch user expenses");
          return;
        }

        const data = await response.json();
        console.log(data, "getting all user expense along with the name ");
        setAllUserData(data);
      } catch (error) {
        console.error("An error occurred while fetching user expenses", error);
      }
    };

    fetchAllUserExpense();
    FetchUserExpeTableDataHandler(false)
  }, [fetchUserExpeTableData]);
  return (
    
    <table className="table table-striped">
  <thead className="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col">Total Expense</th>
    </tr>
  </thead>
  <tbody>
    {allUserData.map((user, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>
          <div className="d-inline-flex align-items-center">
            <span className="font-weight-bold">{user.firstName}</span>
          </div>
        </td>
        <td> ₹{user.totalExpense.toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</table>

  );
};

export default UserExpenseTable;
