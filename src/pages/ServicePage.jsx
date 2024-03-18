import { useEffect } from "react";
import usePost from "../hooks/use-post";
import * as postApi from "../api/post";
import Container from "../layouts/Container";
import Card from "../products/Card";
import { useState } from "react";
import CardList from "../features/service/components/Cardlist";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ServicePage() {
  const { cards, setCards } = usePost();

  useEffect(() => {
    postApi
      .getAllTrips()
      .then((res) => setCards(res.data.trips))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Service Page</h1>
      <div className="flex">
        <div className="flex flex-col">
          <CardList />
          <Link to="/create" className="flex justify-end">
            <Button bg="orange" color="white">
              Create Trip
            </Button>
          </Link>
          <div className="grid grid-cols-1"></div>
        </div>
        <h1>Filter Component</h1>
      </div>
    </>
  );
}
