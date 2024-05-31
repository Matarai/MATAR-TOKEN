import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/partnership.module.css";
import lbankIcon from "../assets/Icon/lbank-logo.svg";
import { useSelector } from "react-redux";

const Partnership = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const heading = currentLanguage === "english" ? "Partnership" : "شراكات";
  const matatrHeading =
    currentLanguage === "english" ? "MATAR Token" : "مطر NFT";
  return (
    <Container className="my-5" fluid>
      <div>
        <p className="title text-center">{matatrHeading}</p>
        <h1 className={`${styles.heading} text-center mb-5`}>{heading}</h1>
      </div>
      <Row
        style={{
          maxWidth: "60%",
          marginInline: "auto",
        }}
      >
        <Col>
          <a
            href="https://www.lbank.com/trade/matar_usdt"
            rel="noreferrer noopener"
            target="_blank"
            className={`${styles.box} d-flex justify-content-center align-items-center gap-2 mb-5`}
          >
            <img
              src={lbankIcon}
              alt="lbank icon"
              style={{
                height: "100px",
                width: "180px",
                scale: "1.4",
                filter: "invert(1)",
              }}
            />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.ovamarcom.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="d-flex justify-content-center align-items-center gap-2 mb-5"
          >
            <img
              src="https://www.ovamarcom.com/wp-content/uploads/2024/03/MARCOMV1.png"
              alt="lbank icon"
              style={{
                height: "80px",
                width: "auto",
              }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Partnership;
