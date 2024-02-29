import React from "react";
import style from "../styles/documents.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import document from "../assets/Documents/Documents.png";
import readOurDocumentdata from "../content/readOurDocumentData";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

const Documents = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  return (
    <div
      className={`mt-5 mt-md-0 d-flex justify-content-center align-items-center ${
        rltStatus && "directionRTL"
      }`}
      style={{
        width: "100%",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Row
          xs={1}
          md={2}
          className={`${style.box} ${
            isMobile && "px-0 text-center"
          } flex-row-reverse md-flex-column-reverse`}
        >
          <Col>
            <div className={`${style.image} mb-5 mb-md-0`}>
              <img src={document} alt="document-icon" width="100%" />
            </div>
          </Col>
          <Col>
            <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start px-2 px-md-5 py-5">
              <h1 className={style.heading}>
                {readOurDocumentdata[currentLanguage].title}
              </h1>
              {!isMobile && (
                <p className="d-none d-md-block mt-5">
                  {readOurDocumentdata[currentLanguage].description}
                </p>
              )}
              <div
                className={`${isMobile && "justify-content-center"} ${
                  style.buttons
                }`}
              >
                <a
                  href={`${
                    currentLanguage === "english"
                      ? "https://matar.ai/whitepaper-en.pdf"
                      : "https://matar.ai/whitepaper-ar.pdf"
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-light" className={style.btn}>
                    Whitepaper
                  </Button>
                </a>
                <Button
                  variant="outline-light"
                  className={style.btn}
                  onClick={() =>
                    window.open(
                      "https://app.solidproof.io/projects/matar-ai?audit_id=962",
                      "_blank"
                    )
                  }
                >
                  Audit & KYC
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Documents;
