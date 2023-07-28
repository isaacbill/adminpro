import { useState } from "react";
import "./accordion.scss";
import { Link } from "react-router-dom";

const AccordionComponent = (props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="left">
              <img src={props.icon} alt="" />
              <div>{props.title}</div>
            </div>
            {!isActive ? (
              <div className="plus-icon">+</div>
            ) : (
              <div className="plus-icon">-</div>
            )}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {" "}
          {props.categories.map((categs) => (
            <ul
              key={categs.id}
              style={{
                padding: "0 0 0 40px",
                listStyleType: "none",
              }}
            >
              <Link to="/">
                <li
                  style={{
                    padding: "5px 0 15px 0",
                  }}
                >
                  {categs.title}
                </li>
              </Link>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default AccordionComponent;
