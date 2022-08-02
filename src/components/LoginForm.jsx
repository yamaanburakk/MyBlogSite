import React from "react";
import "../assets/style.css";

const LoginForm = () => {
  return (
    <div className="App">
      <div className="header">Welcome to my blog site!</div>
      <div className="form">
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button type="button">Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
