import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../styles/introduction.module.css";
import intro from "../assets/intro/intro.gif";
import introductionData from "../content/introductionData";
import { useSelector } from "react-redux";

const Introduction = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  return (
    <div
      className="d-flex justify-content-center align-items-center introductionWrapper"
      id="introduction"
    >
      <Container className="w-100 h-100">
        <Row xs={1} md={2}>
          <Col>
            <div className={style.imageSection}>
              <div className={style.imgBx}>
                <img src={intro} alt="MATAR AI Ecosystem" width="100%" />
              </div>
            </div>
          </Col>
          <Col>
            <div
              className={`d-flex w-100 h-100 flex-column justify-content-center align-items-start ${
                rltStatus && "directionRTL"
              }`}
            >
              <p className="title">
                {introductionData[currentLanguage].question}
              </p>
              <h1 className="my-md-4 heading">
                {introductionData[currentLanguage].heading}
              </h1>
              <p className={style.description}>
                {introductionData[currentLanguage].description}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
