import { useState } from "react";
import { RightFromBracketIcon } from "../icons";
import { useEffect } from "react";
import { useRef } from "react";
import useAuth from "../hooks/use-auth";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const dropdownEl = useRef(null);

  const {
    authUser: { profileImage, firstName, lastName, id },
    logout,
  } = useAuth();

  useEffect(() => {
    if (open) {
      const handleClickOutside = (e) => {
        if (dropdownEl.current && !dropdownEl.current.contains(e.target))
          setOpen(false);
      };

      document.addEventListener("mouseup", handleClickOutside);
      return () => document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [open]);

  return (
    <>
      <div className="dropdown dropdown-left">
        <div tabIndex={0} role="button" className="btn m-1">
          Welcome. {firstName}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
          <Link to={`/profile/${id}`} onClick={() => setOpen(false)}>
            <div className="flex flex-col">
              <span className="font-semibold">
                {firstName} {lastName}
              </span>
              <span className="text-sm text-gray-500">See your profile</span>
            </div>
            </Link>
          </li>
          <li>
            <div
              className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
              role="button"
              onClick={logout}
            >
              <div className="bg-gray-300 w-9 h-9 rounded-full flex items-center justify-center">
                <RightFromBracketIcon />
              </div>
              <span className="font-semibold text-sm">Log out</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
