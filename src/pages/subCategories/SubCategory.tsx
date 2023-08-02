import { useParams } from "react-router-dom";
import "./subCategory.scss";

const SubCategory = () => {
  const { subCategs } = useParams();
  return <div className="subCategory">{subCategs}</div>;
};

export default SubCategory;
