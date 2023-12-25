// import React from 'react'

// function Pagination({ expensesPerPage, totalExpenses, currentPage, paginate }) {
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalExpenses / expensesPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <nav aria-label="...">
//     <ul class="pagination">
//       <li class="page-item disabled">
//         <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
//       </li>
//       <li class="page-item"><a class="page-link" href="#">1</a></li>
//       <li class="page-item active" aria-current="page">
//         <a class="page-link" href="#">2</a>
//       </li>
//       <li class="page-item"><a class="page-link" href="#">3</a></li>
//       <li class="page-item">
//         <a class="page-link" href="#">Next</a>
//       </li>
//     </ul>
//   </nav>
//   )
// }

// export default Pagination
import React from 'react';

function Pagination({ expensesPerPage, totalExpenses, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalExpenses / expensesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={() => paginate(currentPage - 1)}>
            Previous
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a className="page-link" href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}

        <li className={`page-item ${currentPage === Math.ceil(totalExpenses / expensesPerPage) ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
