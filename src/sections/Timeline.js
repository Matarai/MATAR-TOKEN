import React from "react";
import "../styles/timeline.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { timeline } from "../content/timeline";
import { isMobile, isTablet } from "react-device-detect";
import { VerticalTimelineComponent } from "../components/VerticalTimelineComponent";
import { Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";

export const Timeline = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  console.log(timeline[currentLanguage]);
  return (
    <div className="timelineWrapper" id="roadmap">
      <p className="text-center">
        {timeline[currentLanguage].caption}
      </p>
      <h2>
        {timeline[currentLanguage].title}
      </h2>
      <Container className="px-0 wideContainer">
        {!isMobile && !isTablet ? (
          <>
            <Row className={`timeline-upper ${rltStatus && "directionRTL"}`}>
              {!rltStatus && <Col></Col>}
              {timeline[currentLanguage].milestones
                .slice(0, 3)
                .map((item, index) => (
                  <Col key={index} className="position-relative">
                    <Card>
                      <Slide direction="down">
                        <h3 className="mb-0">{item.title}</h3>
                        <span className="mb-3">...</span>
                        <ul>
                          {item.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </Slide>
                    </Card>
                  </Col>
                ))}
              {rltStatus && <Col></Col>}
            </Row>
            <hr className="border-top border-2" style={{ opacity: "0.2" }} />
            <Row className={`timeline-lower mx-auto ${rltStatus && "directionRTL"}`}>
              {timeline[currentLanguage].milestones
                .slice(3)
                .map((item, index) => (
                  <Col key={index} className="">
                    <Card>
                      <Slide direction="up">
                        <h3 className="mb-0">{item.title}</h3>
                        <span className="mb-3">...</span>
                        <ul>
                          {item.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </Slide>
                    </Card>
                  </Col>
                ))}
            </Row>
          </>
        ) : (
          <VerticalTimelineComponent />
        )}
      </Container>
    </div>
  );
};
