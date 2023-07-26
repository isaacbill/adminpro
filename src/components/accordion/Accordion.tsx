import { Accordion } from "react-bootstrap";
type Props = {
  list: string;
};
const AccordionComponent = (props: Props) => {
  return (
    // {props.list.map(item)}
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>Lorem ipsum</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComponent;
