import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import { LoaderThick } from "./Loader";
import { Col, Row } from "react-bootstrap";
import { ReportButton, SmartContract } from "./Buttons";
import heroData from "../content/heroData";
import { useSelector } from "react-redux";
import { getCurrentRound, getNewEthRaised, getRounds } from "../web3/methods";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import axios from "axios";

const TimerComponent = () => {
  const [bnbValue, setBnbValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [raised, setRaised] = useState(null);
  const [filled, setFilled] = useState(0);
  // const deadline = new Date("Feb 15, 2024").getTime();
  const { contract } = useContract(
    process.env.REACT_APP_PRESALE_CONTRACT_ADDRESS
  );
  const { data: currentRound } = useContractRead(contract, "currentRound");
  const { data: rounds } = useContractRead(contract, "rounds", [currentRound]);
  const roundData = rounds?.map((item) => item.toString());
  const endTime = roundData
    ? roundData[1]
    : Date.now().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
  const date = new Date(endTime * 1000); // Multiply by 1000 to convert from seconds to milliseconds
  const localizedDateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // const deadline = localizedDateString;
  const deadline = new Date(localizedDateString.toString()).getTime();
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const tokenSale = heroData[currentLanguage].tokenSale;

  const percentageOfRaisedAmount = async () => {
    const currentRoundValue = await getCurrentRound();
    const parsedCurrentRoundValue = parseInt(currentRoundValue);
    const totalAmount = await getRounds(parsedCurrentRoundValue);
    const ethRaised = await getNewEthRaised();
    const parsedEthRaised = parseInt(ethRaised);
    setRaised((parsedEthRaised / 10 ** 18) * bnbValue);     // set the amount of raise for the loader
    const parsedtotalAmount = parseInt(totalAmount?.targetGoal);
    const ethBalance = parsedEthRaised / 10 ** 18;
    const percentage = (ethBalance / parsedtotalAmount) * 100;
    setFilled(percentage);  // set the purcentage of the filled loader
  };

  const getBNDTOUSD = async () => {
    try {
      let reqOptions = {
        url: process.env.REACT_APP_BNBTOUSD_CONVERSION,
        method: "GET",
      };

      let response = await axios.request(reqOptions);
      // console.log(response.data);
      setBnbValue(response.data.price);
    } catch (error) {
      console.error(error);
    }
  };

  // get roundes from the contract
  const getRoundes = async () => {
    const roundValues = await getRounds(1);
    console.log(roundValues.active);
    if (roundValues?.active === true) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    getBNDTOUSD();
    getRoundes();
    percentageOfRaisedAmount();
  }, []);

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
            {!isActive ? tokenSale?.TotalRiasedAmount : ""}
          </p>

          {/* value range should be from 0 - 100 so calculate it first*/}
          <LoaderThick value={raised?.toFixed(2)} filled={filled?.toFixed(2)} />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div
            className="gap-2 timer-buttons position-relative"
            style={{ zIndex: "1" }}
          >
            <ReportButton button1={tokenSale.button1} />
            <a
              href="https://testnet.bscscan.com/address/0xb3c164d6c21509E6370138Bf9eC72b8e3E95245d#code"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <SmartContract button2={tokenSale.button2} />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TimerComponent;
