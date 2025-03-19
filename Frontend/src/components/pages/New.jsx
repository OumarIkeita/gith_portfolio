import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Link from 'react-router-dom';
import "../css/LoginElement.css";
import { useState } from "react";
import axios from "axios";
export default function New() {
  const [First_name, setFirst_name] = useState()
  const [Last_name, setLast_name] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/', {
        First_name, 
        Last_name,
        Email,
        Password,
      })
      .then((result) => {console.log(result)
        navigate("/Login")}
    )
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form className="formElement" onSubmit={handleSubmit}>
        <div className="loginContaint">
          <div className="first_name">
            <label>First_name:</label>
            <br />
            <input
              type="text"
              onChange={(e)=>setFirst_name(e.target.value)}
              placeholder="enter First_name"
              autoComplete="off"
              name="First_name"
            />
          </div>
          <div className="last_name">
            <label>Last_name:</label>
            <br />
            <input
              type="text"
              onChange={(e)=>setLast_name(e.target.value)}
              placeholder="enter last_name"
              name="Last_name"
              autoComplete="off"
            />
          </div>
          <div className="student_email">
            <label>Email:</label>
            <br />
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              name="Email"
              placeholder="enter your email"
              autoComplete="off"
            />
          </div>
          <div className="password">
            <label>Pass_Word</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              autoComplete="off"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="Login_button">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
      <Link to="/Login">Login</Link>
    </div>
  );
}
