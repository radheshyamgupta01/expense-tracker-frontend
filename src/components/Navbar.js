// // Import necessary React and library modules
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { RiHandCoinLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store/authSlice';

// Import your custom Tailwind CSS styles
// import './styles.css';

// Navbar component
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedin);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authAction.logout());
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('allExpense');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    // <nav className="bg-blue-500 p-4 w-screen" >
    //   <div className="container mx-auto flex items-center justify-between">
    //     <div className="text-white font-serif text-lg">
    //       <span className="font-semibold">Expense Tracker</span>
    //     </div>
    //     <button
    //       className="lg:hidden text-white focus:outline-none"
    //       onClick={toggleMenu}
    //     >
    //       <span className="text-2xl">&#9776;</span>
    //     </button>
    //     <ul
    //       className={`lg:flex flex-col lg:flex-row lg:items-center lg:justify-end ${
    //         menuActive ? 'block' : 'hidden'
    //       }`}
    //     >
    //       <li className="my-2 lg:my-0">
    //         <Link
    //           to="/home"
    //           className="text-white hover:text-gray-300 font-serif"
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li className="my-2 lg:my-0">
    //         <Link
    //           to="/profile"
    //           className="text-white hover:text-gray-300 font-serif"
    //         >
    //           Profile
    //         </Link>
    //       </li>
    //       {!isLoggedIn && (
    //         <li className="my-2 lg:my-0">
    //           <Link
    //             to="/login"
    //             className="text-white hover:text-gray-300 font-serif space-x-4"
    //           >
    //             Login
    //           </Link>
    //         </li>
    //       )}
    //       <li className="my-2 lg:my-0">
    //         <Link
    //           to="/expense"
    //           className="text-white hover:text-gray-300 font-serif"
    //         >
    //           Expenses
    //         </Link>
    //       </li>
    //       {isLoggedIn && (
    //         <li className="my-2 lg:my-0">
    //           <button
    //             className="text-white hover:text-gray-300 font-serif"
    //             onClick={logoutHandler}
    //           >
    //             Logout
    //           </button>
    //         </li>
    //       )}
    //     </ul>
    //   </div>
    // </nav>
    <nav className="bg-blue-500 p-4 w-screen">
  <div className="container mx-auto flex items-center justify-between">
    <div className="text-white font-serif text-lg">
      <span className="font-semibold">Expense Tracker</span>
    </div>
    <button
      className="lg:hidden text-white focus:outline-none"
      onClick={toggleMenu}
    >
      <span className="text-2xl">&#9776;</span>
    </button>
    <ul
      className={`lg:flex flex-col lg:flex-row lg:items-center lg:justify-end space-x-4 ${
        menuActive ? 'block' : 'hidden'
      }`}
    >
      <li className="my-2 lg:my-0">
        <Link
          to="/home"
          className="text-white hover:text-gray-300 font-serif"
        >
          Home
        </Link>
      </li>
      {/* <li className="my-2 lg:my-0">
        <Link
          to="/profile"
          className="text-white hover:text-gray-300 font-serif"
        >
          Profile
        </Link>
      </li> */}
      {!isLoggedIn && (
        <li className="my-2 lg:my-0">
          <Link
            to="/login"
            className="text-white hover:text-gray-300 font-serif"
          >
            Login
          </Link>
        </li>
      )}
      <li className="my-2 lg:my-0">
        <Link
          to="/expense"
          className="text-white hover:text-gray-300 font-serif"
        >
          Expenses
        </Link>
      </li>
      {isLoggedIn && (
        <li className="my-2 lg:my-0">
          <button
            className="text-white hover:text-gray-300 font-serif"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
