import ProdCard from "../../components/cards/ProdCard";
import { useState } from "react";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 250,
  },
  {
    field: "price",
    type: "number",
    headerName: "Price",
    width: 250,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "string",
    width: 250,
  },
  {
    field: "descritption",
    headerName: "Description",
    type: "string",
    width: 250,
  },
];
const categColumns: GridColDef[] = [
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 100,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const [categOpen, setCategOpen] = useState(false);
  return (
    <div className="products">
      <div className="container">
        <div className="upper">
          <div className="left">
            <input type="search" className="prodSearch" />
          </div>
          <div className="right">
            <button onClick={() => setCategOpen(true)} className="addCateg">
              + Category
            </button>
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
      {open && (
        <Add slug=" Add new product" columns={columns} setOpen={setOpen} />
      )}
      {categOpen && (
        <Add
          slug="Add new category"
          columns={categColumns}
          setOpen={setCategOpen}
        />
      )}
    </div>
  );
};

export default Products;
