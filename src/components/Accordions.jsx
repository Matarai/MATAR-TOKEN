import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const Accordions = ({ _key, title, body }) => {
  return (
    <div>
      <Accordion.Item eventKey={_key}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <div style={{ fontSize: "16px" }}>{body}</div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};
