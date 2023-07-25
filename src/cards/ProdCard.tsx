import { newProducts } from "../data";
import "../pages/products/products.scss";

const ProdCard = () => {
  return (
    <>
      <div className="cardContainer">
        {newProducts.map((item) => (
          <div className="card" key={item.id}>
            <div className="top">
              <div className="cardHeader">{item.title}</div>
              <div className="details">
                <div className="price">Price: {item.price}</div>
                <div className="quantity"> Quantity: {item.quantity}</div>
                <div className="description">
                  Descritpion: {item.description}
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="btns">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProdCard;
