import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/Button";


export default function ProfilePage() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [editing, setEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedMobile, setEditedMobile] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/auth/me");
        const userData = response.data;
        setFirstName(userData.user.firstName);
        setLastName(userData.user.lastName);
        setMobile(userData.user.mobile);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [id]);

  const handleEditClick = () => {
    setEditing(true);
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
    setEditedMobile(mobile);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.patch("/users/edit", {
        firstName: editedFirstName,
        lastName: editedLastName,
        mobile: editedMobile,
      });
      const updatedUserData = response.data;
      setFirstName(updatedUserData.user.firstName);
      setLastName(updatedUserData.user.lastName);
      setMobile(updatedUserData.user.mobile);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  return (
    <>
      <h1>Profile Page</h1>
      {editing ? (
        <>
          <input
            type="text"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
          />
          <input
            type="text"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
          />
          <input
            type="text"
            value={editedMobile}
            onChange={(e) => setEditedMobile(e.target.value)}
          />
          <Button onClick={handleSaveClick} bg="orange" color="white">Save</Button>
          <Button onClick={handleCancelClick} bg="orange" color="white">Cancel</Button>
        </>
      ) : (
        <>
          <p>Firstname: {firstName}</p>
          <p>Lastname: {lastName}</p>
          <p>Mobile: {mobile}</p>
          <Button onClick={handleEditClick} bg="orange" color="white">Edit</Button>
        </>
      )}
    </>
  );
}
