import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";
import AccordionComponent from "../accordion/Accordion";

const Menu = () => {
  return (
    <>
      <div className="menu">
        {menu.map((item) => (
          <div className="item" key={item.id}>
            {/* <span className="title">{item.title}</span> */}
            {item.listItems.map((listItem) => {
              // if listitem is not category

              // if listitem is category

              return (
                <div>
                  <Link
                    to={listItem.url}
                    className="listItem"
                    key={listItem.id}
                  >
                    <div className="top">
                      <img src={listItem.icon} alt="" />

                      <span className="listItemTitle">{listItem.title}</span>
                    </div>
                  </Link>
                  {listItem.categs && (
                    <div className="accordionContainer">
                      <AccordionComponent categories={listItem.categs} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
