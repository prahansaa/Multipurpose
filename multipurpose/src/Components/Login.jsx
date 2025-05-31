import React from "react";
import Login_form from "./Login_form.css";
import log from "./../images/log.jpg";
const Login = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* left column */}
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column  left-box">
            <div className="featured-image">
              <img src={log} className="img-fluid" width="250px" />
            </div>
            <p className="para">Shop online</p>
            <p className=" new text-wrap mb-3 ">
              Join for multipurpose shopping here
            </p>
          </div>
          {/* right column */}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <p>Welcome</p>
                <p>Login Here</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mb-1">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mb-5 d-flex">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label for="formCheck">
                    <small className="form-check-label text-secondary">
                      Remember Me Always
                    </small>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
