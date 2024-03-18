import { useState, useEffect } from "react";
import Container from "../layouts/Container";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";

export default function TripPage() {
  const { id } = useParams();
  const [text, setText] = useState(
    localStorage.getItem(`textboxText_${id}`) || ""
  );
  const [editing, setEditing] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [inputValue, setInputValue] = useState(""); // อย่าลืมเริ่มต้นเป็นค่าว่าง
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrData, setQRData] = useState("");

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await axios.get(`/services/trips/${id}`);
        const tripData = response.data;
        setDestination(tripData.trip.destination);
        setDate(tripData.trip.date);
        setPrice(tripData.trip.price);
        setAvailable(tripData.trip.available);
        setCreatedBy(
          `${tripData.trip.user.firstName} ${tripData.trip.user.lastName}`
        );
      } catch (error) {
        console.error("Error fetching trip data:", error);
      }
    };

    fetchTripData();
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`textboxText_${id}`, text);
  }, [text, id]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleSaveClick = () => {
    console.log("Saved:", text);
    setEditing(false);
  };

  const handleBuyClick = (e) => {
    e.preventDefault();
    generateQRCode();
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(`/services/delete/${id}`);
    } catch {
      console.error("Error delete trip data:", error);
    }
  };

  const calculateTotalPrice = () => {
    if (!isNaN(inputValue)) {
      return inputValue * price;
    }
    return "";
  };

  const generateQRCode = () => {
    const data = "Your data for QR code";
    setQRData(data);
    setShowQRCode(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <p>Destination: {destination}</p>
        <p>Date: {date}</p>
        <p>Price: {price}</p>
        <p>Available: {available}</p>
        <p>Created By: {createdBy}</p>
      </div>
      {editing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            className="border border-gray-400 rounded p-2 mr-2"
          />
          <Button onClick={handleSaveClick} bg="orange" color="white">
            Save
          </Button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <form className="max-w-sm mx-auto mb-4">
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium"
              style={{ color: "black" }}
            >
              Select :
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              min="1"
              max={available}
              value={inputValue}
              onChange={handleInputValueChange}
              required
            />
            <Button onClick={handleBuyClick} bg="orange" color="white">
              Buy
            </Button>
            <Button onClick={handleEditClick} bg="orange" color="white">
              Edit
            </Button>
            <Link Link to="/services">
              <Button onClick={handleDeleteClick} bg="orange" color="white">
                Delete
              </Button>
            </Link>
          </form>
          <p>Total Price: {calculateTotalPrice()}</p>
          {showQRCode && (
            <div>
              <QRCode value={qrData} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
