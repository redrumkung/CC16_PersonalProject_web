import usePost from "../hooks/use-post";

export default function Card() {
  const {
    authPost: { id },
  } = usePost();

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>Date :</p>
    <p>Price :</p>
    <p>Available :</p>
    <div className="card-actions justify-end">
    <Link to={`/${id}`}>
      <button className="btn btn-primary">Book Now</button>
    </Link>
    </div>
  </div>
</div>
    )
}