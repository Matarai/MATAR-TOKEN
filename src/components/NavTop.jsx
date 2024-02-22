import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import navData from "../content/nav";
import { useDispatch, useSelector } from "react-redux";
import { rltSidebarStatus, selectedLanguage } from "../features/loginSlice";
import LanguageDropdown from "./LanguageDropdown";
import { ComingSoon } from "./ComingSoon";

export const NavTop = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  return (
    <Navbar
      expand="lg"
      className={`${rltStatus && "directionRTL"}`}
      style={{ backgroundColor: "#070609", borderBottom: "1px solid #12B7F2" }}
    >
      <Container
        className="wideContainer position-relative"
        style={{ zIndex: "1" }}
      >
        <Navbar.Brand as={Link} to="/">
          <img src={navData[currentLanguage].logo} alt="logo" width="70%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            {navData[currentLanguage].routes.map((route, index) => {
              return (
                <Nav.Link href={route.path} key={index} className="text-light">
                  {route.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <div className="d-flex justify-content-center align-items-center gap-4">
            <LanguageDropdown />
            <a href="https://nft.matar.ai" target="_blank" rel="noreferrer">
              <div>
                <NFTButton
                  name={currentLanguage === "english" ? "MATAR NFT" : "nft مطر"}
                />
              </div>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
      <ComingSoon show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
  );
};

const NFTButton = ({ name }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #5FB7FB 0%, #1d51b0 100%)",
        color: "#fff",
        fontFamily: "Russo One",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        padding: "1px",
        margin: "0",
      }}
    >
      <button
        style={{
          width: "100%",
          height: "100%",
          background: "#010D2D",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          fontFamily: "Russo One",
          padding: "10px 30px",
          margin: "0",
          whiteSpace: "normal",
          wordWrap: "nowrap",
        }}
      >
        {name}
      </button>
    </div>
  );
};
