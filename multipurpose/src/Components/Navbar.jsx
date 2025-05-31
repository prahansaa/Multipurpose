import React from "react";
import "./Navbar.css";
import logo from "./../images/logo_new.png";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} height="80px" width="80px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="new">
            <NavLink to="#" className="nav-link icon">
              <FaCartPlus data-bs-toggle="offcanvas" data-bs-target="#demo" />
            </NavLink>

            <NavLink to="/login" className="nav-link icon">
              <CgProfile />
            </NavLink>
            <form className="d-flex">
              <input
                class="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button class="btn btn-warning" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div class="offcanvas offcanvas-end" id="demo">
        <div class="offcanvas-header">
          <h1 class="offcanvas-title">Your Cart</h1>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>Your cart is empty</p>
          <button class="btn btn-secondary" type="button">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
