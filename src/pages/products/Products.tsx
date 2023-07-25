import ProdCard from "../../cards/prodCard";
import { newProducts } from "../../data";
import "./products.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="upper">
          <div className="left">
            <input type="search" className="prodSearch" />
          </div>
          <div className="right">
            <button className="addCateg">+ Category</button>
            <button className="addProd">+ Product</button>
          </div>
        </div>
        <div className="lower">
          <div className="cardContainer">
            <ProdCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
