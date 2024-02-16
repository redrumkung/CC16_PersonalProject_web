import Button from "../components/Button";
import { Link } from "react-router-dom";
// import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import ProtectedIsLogin from "../features/auth/components/ProtectedIsLogin";
import ProtectedGuest from "../features/auth/components/ProtectedGuest";
import Dropdown from "./Dropdown";
// import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-orange-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Products</a>
                <ul className="p-2">
                  <li>
                    <a>1 day trips</a>
                  </li>
                  <li>
                    <a>Private trips</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contract us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Your trip</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li>
                    <a>1 day trips</a>
                  </li>
                  <li>
                    <a>Private trips</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contract Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ProtectedGuest>
            <Link to="/login">
              <Button bg="orange" color="white">
                Log in
              </Button>
            </Link>
          </ProtectedGuest>

          <ProtectedIsLogin>
            <Dropdown />
          </ProtectedIsLogin>
          
            
          
        </div>
      </div>
    </>
  );
}
