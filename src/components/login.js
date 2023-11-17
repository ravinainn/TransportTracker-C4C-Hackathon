// import axios from "axios";
import "./login.css";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="left">
          <h1>Welcome to Transport Trackers</h1>
          {/* <div className="toggle">
            <button className={state ? "" : "activeBtn"}>Teacher Login</button>
            <button className={state ? "activeBtn" : ""} onClick={toggle}>
              Student Login
            </button>
          </div> */}
          <form
            className="form"
            // onSubmit={}
            action="/challan"
            // onSubmit={state ? submithandlerStudent : submithandlerTeacher}
          >
            <div className="form-comp">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                name="email"
                placeholder="example@gmail.com"
                // value={email}
                // onChange={(e) => {
                //   setemail(e.target.value);
                // }}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"

                // value={password}
                // onChange={(e) => {
                //   setpassword(e.target.value);
                // }}
              />
            </div>
            <button className="btn">Login</button>
          </form>
        </div>
        <div className="right">
          <h1>
            Keeping Indian Roads Safe: Spotting and Reporting Expired Cars
          </h1>
        </div>
      </section>
    </>
  );
};

export default Login;
