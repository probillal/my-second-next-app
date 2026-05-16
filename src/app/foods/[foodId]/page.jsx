const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  return (
    <div>
      <h2>Food Details here: {foodId}</h2>
    </div>
  );
};

export default FoodDetailsPage;
