import { Link } from "react-router-dom";

export default function CardItem({ card }) {
  const {
    id,
    date,
    destination,
    price,
    available,
    // coverImage,
    user: { firstName, lastName,},
  } = card;

  return (
    <div className="">
      <div className="grid p-20">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{destination}</h2>
            <p>Date : {date}</p>
            <p>Price : {price}</p>
            <p>Available :{available}</p>
            <p>Create By : {firstName}{lastName}</p>
            <div className="card-actions justify-end">
            <Link to={`/services/${id}`} className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
