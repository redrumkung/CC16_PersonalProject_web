import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react"; // เพิ่ม import useState
import ProtectedIsLogin from "../features/auth/components/ProtectedIsLogin";
import ProtectedGuest from "../features/auth/components/ProtectedGuest";
import Dropdown from "./Dropdown";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false); // เพิ่ม state เพื่อควบคุมการแสดงเมนู dropdown

  const toggleDropdown = (e) => {
    console.log("toggleDropdown")
    // setShowDropdown(!showDropdown); // สลับค่าเมื่อเรียกใช้ toggleDropdown
    console.log(e.target)
  };

  return (
    <>
      <div className="navbar bg-orange-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
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
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${showDropdown ? 'block' : 'hidden'}`} // ใช้เงื่อนไขเพื่อกำหนดคลาสแสดง/ซ่อนเมนู dropdown
            >
              <li>
                <a>About Us</a>
              </li>
              <li>
                <div onClick={toggleDropdown}>Products</div>
                <ul className="p-2">
                  <li>
                    <Link to="/services">1 day trips</Link>
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
          <Link to="/">
          <a className="btn btn-ghost text-xl">Your trip</a>
          </Link>
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
                    <Link to="/services" onClick={e=>e.target.onblur()}>1 day trips</Link>
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
