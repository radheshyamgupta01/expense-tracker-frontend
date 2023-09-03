// import React from 'react';
// import styles from './ExpenseList.module.css';

// const ExpenseList = (props) => {
//   return (
//     <div className={styles.expenseList}>
     
//       <ul>
//         {props.expenses.map((expense, index) => (
//           <li key={index} className={styles.expenseItem} id={expense.id}>
//             <span className={styles.expenseCategory}>{expense.category}</span>
//             <span className={styles.expenseDescription}>{expense.description}</span>
//             <span className={styles.expenseAmount}>Rs.{expense.amount}</span>
//             <button onClick={() => props.editHandler(expense.id)} className={styles.editBtn}>
//           Edit
//         </button>
//         <button onClick={() => props.deleteHandler(expense.id)} className={styles.deleteBtn}>
//           Delete
//         </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React from 'react';
import './Expense.css';

const ExpenseList = (props) => {
  return (
    <div className="expenseList">
      <table className="expenseTable">
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.map((expense, index) => (
            <tr key={index}>
              <td className="text-font">{expense.category}</td>
              <td className="text-font">{expense.description}</td>
              <td className="text-font">Rs.{expense.amount}</td>
              <td>
                <button className="edit" onClick={() => props.editHandler(expense.id)}>Edit</button>
                <button className="delet" onClick={() => props.deleteHandler(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;

