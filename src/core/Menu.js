import React, { Fragment } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};


const Menu = ({ history }) => (
  
  <div className="float mobile">
<label className="logo-title"><i class="fas fa-hand-holding-heart"></i><a style={{textDecoration:"none",color:"white"}} href="/">Teeskapo</a></label>
<input type="checkbox" id="check"></input>
<label for="check" className="checkBtn"><i class="fas fa-bars"></i></label>
    <ul className="">
      <li >
        <Link style={currentTab(history, "/")} className="list-item" to="/">
          Home
        </Link>
      </li>
      <li className=" ">
        <Link
          style={currentTab(history, "/cart")}
          className="list-item"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className=" ">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="list-item"
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="list-item"
            to="/admin/dashboard"
          >
           Admin Dashboard
          </Link>
        </li>
      )}


      {!isAutheticated() && (
        <Fragment>
          <li className=" ">
            <Link
              style={currentTab(history, "/signup")}
              className="list-item"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="">
            <Link
              style={currentTab(history, "/signin")}
              className="list-item"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="">
          <span
            className="list-item text-warning"
            onClick={() => {
              signout(() => {
                window.location.reload()});
            }}
          > 
            Signout
          </span>
        </li>
      )}
      <li className=" ">
        <Link style={currentTab(history, "/corona-tracker")} className="list-item" to="/corona-tracker">
          Corona-Tracker
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
