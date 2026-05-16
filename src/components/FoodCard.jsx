import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { dish_name, image_link, category, price, origin_and_popularity } =
    food;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <Image
          src={image_link}
          alt={dish_name}
          width={300}
          height={200}
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Category: {category}</p>
        <p>Price: $ {price}</p>
        <p>{origin_and_popularity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
          <Link href={`/foods/${food.id}`}>
            <button className="btn btn-accent">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
