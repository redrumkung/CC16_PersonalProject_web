import Button from "../../../components/Button";
import usePost from "../../../hooks/use-post";
import CardItem from "./CardItem";
import axios from "axios";

export default function CardList() {
  const { cards } = usePost();



  console.log(cards);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}
