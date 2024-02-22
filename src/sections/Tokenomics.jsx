import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/tokenomics.module.css";
import TokenSupply from "../components/TokenSupply";
import graph from "../assets/Tokenomics/graph.gif";
import matarLogo from "../assets/Tokenomics/matarLogo.png";
import utility from "../assets/Tokenomics/utility.svg";
import blockchain from "../assets/Tokenomics/blockchain.svg";
import threadLeft from "../assets/Tokenomics/threadLeft.svg";
import threadRight from "../assets/Tokenomics/threadRight.svg";
import tokonomicsData from "../content/tokonomicsData";
import DoughnutChart from "../components/DoughnutChart";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

const Tokenomics = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const { allocationOfFunds } = tokonomicsData[currentLanguage];
  const { aboutToken } = tokonomicsData[currentLanguage];
  const { tokenData } = tokonomicsData[currentLanguage];

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      id="tokenomics"
    >
      <Container>
        <div
          style={{
            minHeight: "80vh",
          }}
        >
          <p className="title text-center">
            {tokonomicsData[currentLanguage].title}
          </p>
          <h1 className={`${styles.heading} text-center`}>
            {tokonomicsData[currentLanguage].heading}
          </h1>
          <p
            className={`${styles.description} text-center px-md-10`}
            style={{ color: "#9a9fb9" }}
          >
            {tokonomicsData[currentLanguage].description}
          </p>

          <div className="d-flex d-md-none flex-column justify-content-center align-items-center mt-5">
            <TokenSupply total={"21,000,000"} />
          </div>

          <div className="mt-5 mt-md-10 d-flex justify-content-center align-items-center">
            <div className="d-none d-lg-flex justify-content-center align-items-center">
              <div className={rltStatus && "directionRTL me-5"}>
                <h3
                  style={{
                    fontFamily: "Russo One",
                    fontSize: "20px",
                  }}
                >
                  {aboutToken.title}
                </h3>
                <table
                  className="mt-5"
                  style={{
                    minWidth: "450px",
                    height: "200px",
                  }}
                >
                  <tr>
                    <td className={styles.key}>
                      {aboutToken.tokenName.name}
                    </td>
                    <td className={styles.value}>
                      {aboutToken.tokenName.value}
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.key}>
                      {aboutToken.tickerSymbol.name}
                    </td>
                    <td className={styles.value}>
                      {" "}
                      {aboutToken.tickerSymbol.value}
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.key}>{aboutToken.chain.name}</td>
                    <td className={styles.value}>{aboutToken.chain.value}</td>
                  </tr>
                  <tr>
                    <td className={styles.key}> {aboutToken.buyTax.name}</td>
                    <td className={styles.value}>
                      {" "}
                      {aboutToken.buyTax.value}
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.key}>{aboutToken.sellTax.name}</td>
                    <td className={styles.value}>
                      {" "}
                      {aboutToken.sellTax.value}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className={styles.chartBox}>
              <DoughnutChart allocationOfFunds={allocationOfFunds} rltStatus={rltStatus} />
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center mt-5"
          style={{
            minHeight: "80vh",
          }}
        >
          <h1 className={`${isMobile && "f-25"} ${styles.heading} text-center`}>{tokenData.title}</h1>

          <Row className={!isMobile && "mt-5"}>
            <Col sm={12} md={6}>
              <div className={isMobile && "d-flex justify-content-center"}>
                <img src={graph} alt="gif" width="70%" />
              </div>
            </Col>
            <Col className={rltStatus && "directionRTL"}>
              <div className={styles.feature}>
                <div>
                  <img src={matarLogo} alt="" />
                </div>
                <div>
                  <h3 className={styles.featureHeading}>
                    {" "}
                    {tokenData.card1.heading}
                  </h3>
                  <ul className={styles.featureDescription}>
                    <p className="mb-0">• {tokenData.card1.li1}</p>
                    <p className="mb-0">• {tokenData.card1.li2}</p>
                    <p className="mb-0">• {tokenData.card1.li3}</p>
                  </ul>
                </div>
              </div>
              <div className={styles.feature}>
                <div>
                  <img src={utility} alt="" />
                </div>
                <div>
                  <h3 className={styles.featureHeading}>
                    {tokenData.card2.heading}
                  </h3>
                  <ul className={styles.featureDescription}>
                    <p className="mb-0">{tokenData.card2.li1}</p>
                    <p className="mb-0">• {tokenData.card2.li2}</p>
                    <p className="mb-0">{tokenData.card2.li3}</p>
                    <p className="mb-0">• {tokenData.card2.li4}</p>
                    <p className="mb-0">• {tokenData.card2.li5}</p>
                  </ul>
                </div>
              </div>
              <div className={styles.feature}>
                <div>
                  <img src={blockchain} alt="" />
                </div>
                <div>
                  <h3 className={styles.featureHeading}>
                    {tokenData.card3.heading}
                  </h3>
                  <ul className={styles.featureDescription}>
                    <p className="mb-0">{tokenData.card3.li1}</p>
                    <p className="mb-0">• {tokenData.card3.li2}</p>
                    <p className="mb-0">{tokenData.card3.li3}</p>
                    <p className="mb-0">• {tokenData.card3.li4}</p>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <img src={threadLeft} alt="" className={styles.threadLeft} />

      <img src={threadRight} alt="" className={styles.threadRight} />
    </div>
  );
};

export default Tokenomics;
