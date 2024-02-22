import React from "react";
import CountDown from "./CountDown";
import { LoaderThick } from "./Loader";
import { Col, Row } from "react-bootstrap";
import { ReportButton, SmartContract } from "./Buttons";
import heroData from "../content/heroData";
import { useSelector } from "react-redux";

const TimerComponent = () => {
  const deadline = new Date("Feb 15, 2024").getTime();
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const tokenSale = heroData[currentLanguage].tokenSale;
  return (
    <div
      className={`d-flex justify-content-start align-items-start gap-5 rounded px-4 py-3 mt-4 saleTimer ${
        rltStatus && "directionRTL"
      }`}
      style={{
        background: "#05385e",
        width: "100%",
      }}
    >
      <Row xs={1} md={3} className="w-100 gap-5 gap-md-0">
        <Col>
          <p
            className={`text-center ${
              rltStatus ? "text-lg-end" : "text-lg-start"
            }`}
            style={{
              fontSize: "14px",
            }}
          >
            {tokenSale.title}
          </p>
          <CountDown deadline={deadline} timer={tokenSale} />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <p
            style={{
              fontSize: "14px",
            }}
          >
            {tokenSale.TotalRiasedAmount}
          </p>
          {/* value range should be from 0 - 100 so calculate it first*/}
          <LoaderThick value={0} />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div
            className="gap-2 timer-buttons position-relative"
            style={{ zIndex: "1" }}
          >
            <ReportButton button1={tokenSale.button1} />
            <SmartContract button2={tokenSale.button2} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TimerComponent;
