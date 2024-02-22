import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoEn from "../assets/logoEN.svg";
import { FooterCTA } from "../components/FooterCTA";
import { footer } from "../content/footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import bot from "../assets/tgBot.png";
import mail from "../assets/mailIcon.png";
import google from "../assets/Google_Play_Store_badge_EN.png";
import apple from "../assets/apple-app-store-logo.png";
import { BsTwitterX } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import LanguageDropdown from "../components/LanguageDropdown";
import borderBottom from "../assets/footerBorderBottom.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import mobileGoogle from "../assets/Mobile_Google_Play_Store.png";
import mobileApple from "../assets/mobile_apple-app-store-logo.png";
import footerMobileLogo from "../assets/footerMobileLogo.png";
import { isMobile } from "react-device-detect";
import { ComingSoon } from "../components/ComingSoon";

export const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const socialItems = [
    {
      title: "Twitter",
      path: "https://x.com/matar__ai",
      logo: <BsTwitterX />,
    },
    {
      title: "Telegram",
      path: "https://t.me/matar_ai",
      logo: <FaTelegramPlane />,
    },
    {
      title: "LinkedIn",
      path: "/",
      logo: <FaLinkedinIn />,
    },
    {
      title: "Github",
      path: "https://github.com/Matarai",
      logo: <FaGithub />,
    },
    {
      title: "Facebook",
      path: "/",
      logo: <FaFacebookF />,
    },
    {
      title: "Instagram",
      path: "https://www.instagram.com/matar__ai",
      logo: <FaInstagram />,
    },
  ];
  return (
    <Container
      fluid
      className={rltStatus ? "footerWrapper directionRTL" : "footerWrapper"}
    >
      <FooterCTA currentLanguage={currentLanguage} />
      <Container>
        <Row className="pb-5" xs={1} md={2} lg={4}>
          <Col className={isMobile && "text-center"}>
            <img src={isMobile ? footerMobileLogo : logoEn} alt="logo" />
            <p style={{ marginTop: "38px" }}>
              {footer[currentLanguage].description}
            </p>
            <div
              className={isMobile && "d-flex justify-content-center"}
              style={{ marginTop: "50px" }}
            >
              <LanguageDropdown />
            </div>
            <div
              className={`social-icons d-flex gap-3 ${
                isMobile && "justify-content-center"
              }`}
              style={
                isMobile
                  ? { marginBottom: "40px", marginTop: "30px" }
                  : { marginTop: "50px" }
              }
            >
              {socialItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon text-decoration-none text-white px-2 pb-1"
                >
                  <div className="">{item.logo}</div>
                </a>
              ))}
            </div>
          </Col>
          {footer[currentLanguage].sections
            .slice(0, 2)
            .map((section, index) => (
              <Col key={index} className="">
                <h4 className="mb-2">{section.title}</h4>
                <img
                  src={borderBottom}
                  alt="borderBottom"
                  style={{ marginBottom: "40px" }}
                />
                <div className={`list-unstyled h-100 ${isMobile && "mb-5"}`}>
                  {section.links.map((link, index) => (
                    <p key={index}>
                      <Link to={link.link} className="text-light my-4">
                        {rltStatus ? <IoIosArrowBack /> : <IoIosArrowForward />}{" "}
                        {link.title}
                      </Link>
                    </p>
                  ))}
                </div>
              </Col>
            ))}
          <Col>
            <ComingSoon show={modalShow} onHide={() => setModalShow(false)} />
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <div>
                  <h4>{footer[currentLanguage].sections[2].title}</h4>
                  <img
                    src={borderBottom}
                    alt="borderBottom"
                    style={{ marginBottom: "40px" }}
                  />
                </div>
                <div className="list-unstyled">
                  {footer[currentLanguage].sections[2].links.map(
                    (link, index) => (
                      <div key={index} className="d-flex mb-3">
                        <img
                          src={
                            link.title !== (rltStatus ? "الايمايل" : "Email")
                              ? bot
                              : mail
                          }
                          alt="icon"
                          style={{ width: "40px", height: "40px" }}
                          className="ratio ratio-1x1 mx-3"
                        />
                        <div>
                          <p style={{ fontSize: "14px" }} className="mb-0">
                            {link.title}
                          </p>
                          <Link
                            style={{ fontSize: "17px" }}
                            to={link.link}
                            className="text-light"
                          >
                            {link.label}
                          </Link>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="d-flex">
                <div onClick={() => setModalShow(true)}>
                  <img
                    src={isMobile ? mobileGoogle : google}
                    alt="google play"
                    style={
                      !isMobile
                        ? {
                            minWidth: "100px",
                            minHeight: "32px",
                            maxHeight: "56px",
                          }
                        : {}
                    }
                    className="mx-3"
                  />
                </div>
                <div onClick={() => setModalShow(true)}>
                  <img
                    src={isMobile ? mobileApple : apple}
                    alt="apple store"
                    style={
                      !isMobile
                        ? {
                            minWidth: "100px",
                            minHeight: "32px",
                            maxHeight: "56px",
                          }
                        : {}
                    }
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-5 border-top border-secondary wideContainer">
        <p className="text-center">All rights reserved &copy; 2024 MATAR AI</p>
      </Container>
    </Container>
  );
};
