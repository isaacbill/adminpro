import ProdCard from "../../cards/ProdCard";
import { useState } from "react";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 200,
  },
  {
    field: "price",
    type: "number",
    headerName: "Price",
    width: 200,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "string",
    width: 200,
  },
  {
    field: "descritption",
    headerName: "Description",
    type: "string",
    width: 200,
  },

  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   width: 200,
  //   type: "string",
  // },
  // {
  //   field: "inStock",
  //   headerName: "In Stock",
  //   width: 150,
  //   type: "boolean",
  // },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="container">
        <div className="upper">
          <div className="left">
            <input type="search" className="prodSearch" />
          </div>
          <div className="right">
            <button className="addCateg">+ Category</button>
            <button onClick={() => setOpen(true)} className="addProd">
              + Product
            </button>
          </div>
        </div>
        <div className="lower">
          <div className="cardContainer">
            <ProdCard />
          </div>
        </div>
      </div>
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
