import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand ms-4" to="/">
            Expense Manager
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-4 me-4">
              {loginUser && (
                <li className="nav-item">
                  <p className="nav-link welcome-text">
                    Welcome, {loginUser.name}
                  </p>
                </li>
              )}
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
