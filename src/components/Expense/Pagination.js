
import React from 'react';
  import { NavLink } from 'react-router-dom';
import DropdownPerPageExp from './DropdownPerPageExp';
function Pagination({ expensesPerPage, totalExpenses, currentPage, paginate,setexpensesPerPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalExpenses / expensesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="..." style={{ fontFamily: "sanserif", marginRight:"10px" }}>
       <DropdownPerPageExp setexpensesPerPage={setexpensesPerPage}></DropdownPerPageExp>
      <ul className="pagination">
    
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <NavLink  style={{ fontFamily: "sanserif", marginRight:"10px" }} className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={() => paginate(currentPage - 1)}>
            Previous
          </NavLink>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <NavLink className="page-link" href="#" onClick={() => paginate(number)}>
              {number}
            </NavLink>
          </li>
        ))}

        <li className={`page-item ${currentPage === Math.ceil(totalExpenses / expensesPerPage) ? 'disabled' : ''}`}>
          < NavLink style={{ fontFamily: "sanserif", marginRight:"10px" }} className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>
            Next
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
