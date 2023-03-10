import React from "react";
import Logo from "../assets/index.png"
import { NavLink } from "react-router-dom";

function Navbar () {
  // function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }

  return (
    <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          <img src={Logo} alt="logo" width="200px" height="200px" fw="700" className="d-inline-block align-top mr-2" />

              {/* <a className="navbar-brand" href="/">Positively<span>Psyched</span></a> */}

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>      
              </button>
              
              <div className="collapse navbar-collapse" id="navbarContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                      <ul className="navbar-nav nav-center">
                          <li className="nav-item">
                              <NavLink to="/"  className="nav-link">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/services"  className="nav-link">Services</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/about"  className="nav-link">About Us</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/events"  className="nav-link">Events</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/volunteers"  className="nav-link">Volunteers</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/faqs"  className="nav-link">FAQs</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/contact"  className="nav-link">Contact Us</NavLink>
                          </li>
                      </ul>
                      {/* <button className="btn btn-primary" id="nav-btn">Log In</button> */}
                      {/* <div>
                      {user ? (
                        <button className="btn btn-primary"  id="nav-btn" onClick={handleLogoutClick}>Logout</button>
                       ) : 
                       (
                      //   <div>
                      //     <NavLink to="/login" className="btn btn-primary" id="nav-btn">Login</NavLink>
                      //   </div>
                      )
                    }
                    </div> */}
              </div>
          </div>
      </nav>
  );
}
export default Navbar;