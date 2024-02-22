import React from "react";
import { Card, Col } from "react-bootstrap";
import { timeline } from "../content/timeline";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";

export const VerticalTimelineComponent = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  return (
    <div className="mobile-timeline">
      <div className="timeline-middle-line"></div>
      {timeline[currentLanguage].milestones.map((item, index) => (
        <Col key={index} className={index % 2 === 0 ? "left" : "right"}>
          <Card>
            <Fade direction={index % 2 === 0 ? "left" : "right"}>
              <h3>{item.title}</h3>
              {/* <h4>Q1 2024</h4> */}
              <ul>
                {item.details.map((detail, index) => (
                  <li>{detail}</li>
                ))}
              </ul>
            </Fade>
          </Card>
        </Col>
      ))}
    </div>
  );
};
