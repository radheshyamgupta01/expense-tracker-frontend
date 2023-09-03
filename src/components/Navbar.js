import React,{useState} from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
// import { BiMenu,BiSolidHome,BiSolidUser,BiLogIn,BiLogOut,BiNotepad } from "react-icons/bi";
import { RiHandCoinLine } from "react-icons/ri";
import { useSelector,useDispatch } from 'react-redux';
import {authAction} from "../store/authSlice"

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedin);
    const navigate= useNavigate();

    const logoutHandler=()=>{
      dispatch(authAction.logout());
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("allExpense");
        navigate('/login');
    }

    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <div className={styles.navbarTitle}><span className={styles.expenseSign}></span>  Expense Tracker </div>
      </div>
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
      <span className={styles.hamburgerIcon}></span>
    </button>
      <ul className={`${styles.navbarNav} ${menuActive ? styles.active : ''}`}>
        <li className={styles.navItem}><Link to="/home" className={styles.navLink}>Home</Link></li>
        <li className={styles.navItem}><Link to="/profile" className={styles.navLink}>Profile</Link></li>
        {!isLoggedIn&& <li className={styles.navItem}><Link to="/login" className={styles.navLink}> Login</Link></li>}
        {isLoggedIn&& <li className={styles.navItem}><Link to="/expense" className={styles.navLink}> Expenses</Link></li>}
        {isLoggedIn&& <li className={styles.navItem}><button  className={styles.navLink} onClick={logoutHandler}> Logout</button></li>}
        </ul>
    </nav>
  );
};

export default Navbar;
