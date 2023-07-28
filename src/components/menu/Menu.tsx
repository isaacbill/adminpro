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
            {item.listItems.map((listItem) => {
              // if listitem is category
              if (listItem.title === "Category") {
                return (
                  <div>
                    <AccordionComponent
                      title="Category"
                      icon={listItem.icon}
                      categories={listItem.categs}
                    />
                  </div>
                );
              } else {
                // if listitem is not category
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
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
