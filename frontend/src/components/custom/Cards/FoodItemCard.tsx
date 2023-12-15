function FoodItemCard() {
  return (
    <div className="card my-2" style={{ border: 0 }}>
      <img src="/src/assets/pizza0.jpg" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn-theme-filled-shadowed">Add to cart</button>
      </div>
    </div>
  );
}

export default FoodItemCard;
