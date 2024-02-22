import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import apple from "../assets/MatarWallet/apple-app-store-logo.png";
import playstore from "../assets/MatarWallet/Google_Play_Store_badge_EN.png";
import mobiles from "../assets/MatarWallet/mobiles.png";
import styles from "../styles/matarWallet.module.css";
import matarWalletData from "../content/matarWalletData";
import { useSelector } from "react-redux";
import { ComingSoon } from "../components/ComingSoon";

const MatarWallet = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${
        rltStatus && "directionRTL"
      }`}
      style={{
        position: "relative",
      }}
      id="wallet"
    >
      <Container>
        <Row xs={1} md={2} className="flex-row-reverse md-flex-column-reverse">
          <Col>
            <div>
              <img src={mobiles} alt="mobiles" className="img-fluid" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column justify-content-center h-100">
              <p className="title">{matarWalletData[currentLanguage].title}</p>
              <h1 className={styles.heading}>
                {matarWalletData[currentLanguage].heading}
              </h1>
              <p className={styles.description}>
                {matarWalletData[currentLanguage].description}
              </p>
              <div className={styles.stats}>
                <div>
                  <p className={styles.heading}>
                    {matarWalletData[currentLanguage].swapping.stats}
                  </p>
                  <p className={styles.description}>
                    {matarWalletData[currentLanguage].swapping.title}
                  </p>
                </div>
                <div>
                  <p className={styles.heading}>
                    {matarWalletData[currentLanguage].tokens.stats}
                  </p>
                  <p className={styles.description}>
                    {matarWalletData[currentLanguage].tokens.title}
                  </p>
                </div>
                <div>
                  <p className={styles.heading}>
                    {matarWalletData[currentLanguage].news.stats}
                  </p>
                  <p className={styles.description}>
                    {matarWalletData[currentLanguage].news.title}
                  </p>
                </div>
              </div>
              <ComingSoon show={modalShow} onHide={() => setModalShow(false)} />
              <div className="d-flex justify-content-center justify-content-md-start align-items-center w-100 gap-3 mt-3">
                <div
                  className="d-flex justify-content-center align-items-center"
                  onClick={() => setModalShow(true)}
                >
                  <img src={apple} alt="" width="80%" />
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  onClick={() => setModalShow(true)}
                >
                  <img src={playstore} alt="" width="80%" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MatarWallet;
