import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import "./deletes.scss";
type Props = {
  slug: string;
  columns: GridColDef[];
  setDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Delete = (props: Props) => {
  const [deleted, setDeleted] = useState(new Set());
  const deleteProduct = () => {
    // setDeleted(deleted.add(...default));
  };
  return (
    <div className="delete">
      <div className="modal">
        <span className="close" onClick={() => props.setDeleteOpen(false)}>
          X
        </span>
        <h1> {props.slug}</h1>
        <div className="delDialog">
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="delItem">
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  className="input"
                />
              </div>
            ))}
        </div>
        <div className="delDialogBtn">
          <button className="dialogOkBtns" onClick={deleteProduct}>
            Ok
          </button>
          <button
            className="dialogCancelBtns"
            onClick={() => props.setDeleteOpen(false)}
          >
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
