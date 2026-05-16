import Image from "next/image";

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const food = data.data;
  console.log("food in foods details page", food);
  const { id, dish_name, image_link, price, category, origin_and_popularity } =
    food;
  return (
    <div className="border  shadow-2xl rounded-xl p-10 m-10  flex items-center gap-6 justify-center">
      <div>
        <h2>Food Details here: {foodId}</h2>
        <p className="text-2xl">Name: {dish_name}</p>

        <p>price: $ {price}</p>
        <p>Category: {category}</p>
        <p>Description: {origin_and_popularity}</p>
      </div>
      <div>
        <Image src={image_link} alt={dish_name} width={400} height={300} />
      </div>
    </div>
  );
};

export default FoodDetailsPage;
