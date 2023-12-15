import FoodItemCard from "../../components/custom/Cards/FoodItemCard";

function FoodsHome() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-4 col-lg-3">

          <FoodItemCard />
        </div>
        <div className="col-md-4 col-lg-3">

          <FoodItemCard />
        </div>
        <div className="col-md-4 col-lg-3">

          <FoodItemCard />
        </div>
        <div className="col-md-4 col-lg-3">

          <FoodItemCard />
        </div>
      </div>
    </div>
  );
}

export default FoodsHome;
