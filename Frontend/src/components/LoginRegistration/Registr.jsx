import { useState } from "react";
import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registr() {
  const [First_name, setFirst_name] = useState();
  const [Last_name, setLast_name] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const url = "http://localhost:3001";
  const nagivate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/register`, {
        First_name,
        Last_name,
        Email,
        Password,
      })
      .then((result) => {
        console.log(result)
        nagivate('/Login')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First_name</label>
          <input
            type="text"
            placeholder="enter first name"
            autoComplete="off"
            name="First_name"
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div>
          <label>Last_name</label>
          <input
            type="text"
            placeholder="enter last name"
            name="Last_name"
            autoComplete="off"
            onChange={(e) => setLast_name(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="enter your email"
            name="Email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="enter your password"
            name="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit"> Register</button>
      </form>
    </div>
  );
}
