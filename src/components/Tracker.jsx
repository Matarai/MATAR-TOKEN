import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/tracker.module.css";
import coingeckoIcon from "../assets/Icon/coingecko-logo.png";
import coinsmarketcapIcon from "../assets/Icon/coinsmarketcap-logo.svg";
import lbankIcon from "../assets/Icon/lbank-logo.svg";
import { useSelector } from "react-redux";

const Tracker = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const heading = currentLanguage === "english" ? "Tracker" : "تعقب";
  const matatrHeading =
    currentLanguage === "english" ? "MATAR Token" : "مطر NFT";
  return (
    <Container className="mb-5" fluid>
      <div style={{ marginBottom: "40px" }}>
        <p className="title text-center">{matatrHeading}</p>
        <h1 className={`${styles.heading} text-center`}>{heading}</h1>
      </div>
      <Row
        style={{
          maxWidth: "60%",
          marginInline: "auto",
        }}
      >
        <Col>
          <a
            href="https://coinmarketcap.com/currencies/matar-ai/"
            rel="noreferrer noopener"
            target="_blank"
            className={`${styles.box} d-flex justify-content-center align-items-center gap-2 mb-5`}
          >
            <img
              src={coingeckoIcon}
              alt="coingecko icon"
              style={{
                height: "100px",
                width: "100px",
              }}
            />
            <span
              className="text-white"
              style={{
                fontSize: "30px",
              }}
            >
              CoinGecko
            </span>
          </a>
        </Col>
        <Col>
          <a
            href="https://www.coingecko.com/en/coins/matar-ai"
            rel="noreferrer noopener"
            target="_blank"
            className={` d-flex justify-content-center align-items-center gap-2 mb-5`}
          >
            <img
              src={coinsmarketcapIcon}
              alt="coinmarketcap icon"
              style={{
                height: "100px",
                width: "100px",
                filter: "invert(1)",
              }}
            />
            <span
              className="text-white"
              style={{
                fontSize: "30px",
              }}
            >
              CoinMarketCap
            </span>
          </a>
        </Col>
        {/* <Col>
          <a
            href="https://www.lbank.com/trade/matar_usdt"
            rel="noreferrer noopener"
            target="_blank"
            className="d-flex justify-content-center align-items-center gap-2 mb-5"
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
        </Col> */}
      </Row>
    </Container>
  );
};

export default Tracker;
