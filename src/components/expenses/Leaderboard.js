import React, { useEffect, useState } from "react";

function Leaderboard({handleSubmit}) {
  const [Leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
   
    fetch("http://localhost:30001/user/getAllUser", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"this is getting data ")
        let formattedData = [];
  
        for (let i = 0; i < data.userLeaderboard.length; i++) {
          const user = data.userLeaderboard[i];
          formattedData.push({
            id: user.id,
            username: user.firstName,
            totalExpenseAmount: user.totalExpense
          });
        }
  
        setLeaderboard(formattedData);
       
      })
      .catch((err) => console.error("Error fetching user leaderboard:", err));
  }, [handleSubmit]);
  const titleStyle = {
    fontFamily: "Open Sans",
    fontSize: '24px',
    color: '#3498db',
    fontWeight: 'bold',
  };

  return (
    <div>
      <div data-bs-toggle="modal" data-bs-target="#exampleModal">
 
       
      <span style={{fontFamily:"monospace"}}>Leaderboard</span><i class="fas fa-star"></i>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {" "}
                
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table class="table  table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">User</th>
                    <th scope="col">Total Expense</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {Leaderboard.map((user, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                   
                       <td>{user.username}</td> 
                      <td>{user.totalExpenseAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
