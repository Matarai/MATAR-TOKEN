import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Presale from "../components/Presale";
import { ButtonFilled, ButtonOutline } from "../components/Buttons";
import TokenSale from "./TokenSale";
import TimerComponent from "../components/TimerComponent";
import heroData from "../content/heroData";
import { useSelector } from "react-redux";
import style from "../styles/hero.module.css";
import RainBackground from "../components/RainBackground";
import { ComingSoon } from "../components/ComingSoon";
import { isMobile } from "react-device-detect";

function Herioc() {
  const [modalShow, setModalShow] = React.useState(false);
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  return (
    <div className="mt-md-0 pb-0 pb-md-5 heroWrapper">
      <Container className="wideContainer">
        <Row className={rltStatus && "flex-row-reverse"}>
          <Col xs={12} md={7}>
            <RainBackground />
            <div
              className={`hero-content d-flex flex-column justify-content-center align-items-start w-100 gap-4 ${rltStatus && "directionRTL"
                }`}
            >
              <h1 className="heading px-2 px-md-0">
                {heroData[currentLanguage].heading}
              </h1>

              <p className={`${style.description} mt-4`}>
                {heroData[currentLanguage].description}
              </p>
              <div
                className="d-flex justify-content-center justify-content-md-start w-100 align-items-center gap-5"
                style={{ zIndex: "1" }}
              >

                <a href="https://nft.matar.ai" target="_black" rel="noreferrer">
                  <ButtonFilled name={heroData[currentLanguage].button1} />
                </a>
                {/* Scroll to next section */}
                <div onClick={() => window.scrollTo(0, (isMobile ? (window.innerHeight * 4) : (window.innerHeight * 2)))}>
                  <ButtonOutline name={heroData[currentLanguage].button2} />
                </div>
              </div>
            </div>
            <div
              className="d-none d-lg-flex flex-column"
              style={{ zIndex: "1" }}
            >
              <TokenSale />
              <TimerComponent />
            </div>
          </Col>
          <Col>
            <div className="rectangle mt-5 py-4" style={{ zIndex: "1" }}>
              <Presale
                presaleData={heroData[currentLanguage].MatarPresaleCard}
              />
            </div>
          </Col>
        </Row>
        <div className="d-lg-none d-flex flex-column mt-5 justify-content-center align-items-center w-100">
          <TokenSale />
          <TimerComponent />
        </div>
        <ComingSoon show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  );
}

export default Herioc;
