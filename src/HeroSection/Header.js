import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{fontFamily:"Sofia"}}>
      <a class="navbar-brand" href="#" style={{fontFamily:"Sofia"}}>
        Amazon
      </a>
      <button
        class="navbar-toggler"
        style={{fontFamily:"Sofia"}}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        
        <button class=" ml-2  btn btn-outline-success my-2 my-sm-0 bg-success text-white">
            <NavLink to="/home" class="   my-2 my-sm-0 text-white" style={{color:"white"}} style={{fontFamily:"Sofia"}}>
          Home
            </NavLink>
          </button>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                <p>Hello, sign in </p>
              </a>
              <NavLink class="dropdown-item" to="/expense">
                <p>Expense </p>
              </NavLink>
              <a class="dropdown-item" href="#">
                <li class="nav-item">
                  <a class="nav-link disabled">Return & Order </a>
                </li>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <i class="ri-shopping-cart-2-line"></i>
                Cart
              </a>
            </div>
          </li>
          
         
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{fontFamily:"Sofia"}}>
            Search
          </button>

        </form>
        <button class=" btn btn-outline-success my-2 my-sm-0 bg-success ml-2 text-white" >
            <NavLink to="/login" class="  my-2 my-sm-0   text-white " style={{color:"white"}} style={{fontFamily:"Sofia"}}>
              Login
            </NavLink>
          </button>
          <button class=" ml-2  btn btn-outline-success my-2 my-sm-0 bg-success text-white">
            <NavLink to="/" class="   my-2 my-sm-0 text-white" style={{color:"white"}}>
           sign
            </NavLink>
          </button>
      </div>
    </nav>
  );
}

export default Header;
