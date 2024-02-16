import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "../components/Navbar"

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/login">
        <Button bg="orange" color="white">
          Log in
        </Button>
      </Link>
    </>
  );
}
