import { useState } from "react";
import { newProducts } from "../../data";
import "../../pages/products/products.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../add/Add";
import Delete from "../delete/Delete";

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

const ProdCard = () => {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

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
                <button onClick={() => setOpen(true)} className="edit">
                  Edit
                </button>
                <button
                  onClick={() => setDeleteOpen(true)}
                  className="deleteBtn"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {open && (
          <Add slug="Update Product" columns={columns} setOpen={setOpen} />
        )}
      </div>
      {deleteOpen && (
        <Delete
          slug="delete product"
          columns={columns}
          setDeleteOpen={setDeleteOpen}
        />
      )}
    </>
  );
};

export default ProdCard;
