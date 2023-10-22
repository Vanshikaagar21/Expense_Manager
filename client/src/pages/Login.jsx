import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/LoginPage.css";
import Footer from "../components/Layout/Footer";

const Login = () => {
  const img = "https://www.digitap.ai/assets/images/expense-page-graphic.svg";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/users/login", values);
      setLoading(false);
      message.success("Login Successful");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Invalid username or password!");
    }
  };

  // Prevent logged-in users from accessing the login page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="header-card">
        <h1>Expense Manager</h1>
      </div>
      <div className="login-page">
        {loading && <Spinner />}
        <div className="login-card">
          <div className="login-image">
            <img src={img} alt="login-img" />
          </div>
          <div className="login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>
              <Form.Item label="Email" name="email">
                <Input type="email" required="true" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">Not a User? Click here to Register</Link>
                <button className="btn btn-primary">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
