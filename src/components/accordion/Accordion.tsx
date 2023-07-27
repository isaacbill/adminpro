import { Accordion } from "react-bootstrap";

const AccordionComponent = (props) => {
  return (
    <>
      {props.categories.map((item) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>{item.desc}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionComponent;
