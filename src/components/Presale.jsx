import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { LoaderThin } from "./Loader";
import Divider from "./Divider";
import RadioButton from "./RadioButton";
import bnb from "../assets/bnb.svg";
import { Col, Form, Row } from "react-bootstrap";
import { ButtonFilled } from "./Buttons";
import matar from "../assets/Icon/matar.svg";
import bnbYellow from "../assets/Icon/bnb.svg";
import { useSelector } from "react-redux";

function Presale({ presaleData }) {
  const [loaderValue, setLoaderValue] = React.useState(0);
  const { currentLanguage } = useSelector((state) => state.login);

  const data = {
    totalSupply: "21.000.000",
    availableForSale: "1.000.000",
    matar: {
      price: "21.000",
      maxPrice: "200.000",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let val = (data.matar.price / data.matar.maxPrice) * 100;
      setLoaderValue(val);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Container className="presaleWrapper">
      <p
        className="text-center"
        style={{
          fontFamily: "Russo One",
          color: "#fff",
          fontSize: "40px",
        }}
      >
        {currentLanguage !== "english" && (
          <>
            بيع اولي مطر
            <br />
          </>
        )}
        {currentLanguage === "english" && (
          <>
            $MATAR
            <br />
            Presale!
          </>
        )}
      </p>
      <div
        className="d-flex justify-content-center align-items-center rounded p-2"
        style={{
          background: "#0a6696",
        }}
      >
        <div
          className="text-center w-100"
          style={{
            borderRight: "1px solid #ffffff40",
          }}
        >
          <p>{presaleData.AvailableForSale}</p>
          <p className="fw-bold m-0">{data.totalSupply}</p>
        </div>
        <div className="text-center w-100">
          <p>{presaleData.totalSupply}</p>
          <p className="fw-bold m-0">{data.availableForSale}</p>
        </div>
      </div>
      <p className="mt-4 text-center">{presaleData.subTitle}</p>
      {/* value range should be from 0 - 100 so calculate it first*/}
      <LoaderThin value={loaderValue} color="#0556BA" />
      <p
        style={{
          fontSize: "12px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {currentLanguage === "english" ? "MATAR Raised:" : "مطر تم جمعها:"}{" "}
        {data.matar.price} MATAR /{data.matar.maxPrice} MATAR
      </p>

      <Divider />

      <div className="">
        <RadioButton
          name={"network"}
          value={"BNB"}
          standard={"BEP-20"}
          icon={bnb}
        />

        <div
          className="d-flex gap-3 pt-4 position-relative"
          style={{ zIndex: "1" }}
        >
          <Row>
            <Col>
              <Form.Group controlId="formFile" className="">
                <Form.Label>
                  {currentLanguage === "english"
                    ? "Amount in BNB"
                    : "bnb الكمية من"}
                </Form.Label>
                <div
                  className="d-flex justify-content-center align-items-center rounded pe-2 py-2"
                  style={{ border: "1px solid #12B7F2" }}
                >
                  <Form.Control
                    type="text"
                    placeholder="0.0"
                    className="border-0 bg-transparent"
                  />
                  <img
                    src={bnbYellow}
                    alt="matar"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  {currentLanguage === "english" ? "MATAR" : "مطر"}
                </Form.Label>
                <div
                  className="d-flex justify-content-center align-items-center rounded pe-2 py-2"
                  style={{ border: "1px solid #12B7F2" }}
                >
                  <Form.Control
                    type="text"
                    placeholder="0.0"
                    className="border-0 bg-transparent"
                  />
                  <img
                    src={matar}
                    alt="matar"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </div>
        <ButtonFilled name={currentLanguage === "english" ? "Connect Wallet" : "ربط المحفظة"} />
      </div>
    </Container>
  );
}

export default Presale;
