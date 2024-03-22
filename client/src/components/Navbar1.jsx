import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import UserProfile from "./UserDashboard/UserProfile";

const Navbar1 = () => {
  const { isLoggedIn, user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg header border-bottom sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <h2 className="logo-h1">H²-HealthHarbor</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/doctors" className="nav-link">
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/patients" className="nav-link">
                Patients
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/appointment" className="nav-link">
                Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link">
                ContactUs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/emergency" className="nav-link">
                Emergency
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                Services
              </Link>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  isDropdownOpen ? "show" : ""
                }`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/bloodtest">
                    Blood Test
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/xray">
                    X-Rays & Scans
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/geneticTesting">
                    Genetic Testing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/doctorconsultation">
                    Doctor Consultation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/surgery">
                    Surgery
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/supplement">
                    Supplements
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/healthtips">
                    Health Tips
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/offers">
                    Offers
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <>
                {user.isAdmin && (
                  <Link to="/admin">
                    <button className="btn btn-warning mx-4">Admin_Panel</button>
                  </Link>
                )}
                <UserProfile />
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-primary  mx-4">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
