import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import { LoaderThick } from "./Loader";
import { Col, Row } from "react-bootstrap";
import { ReportButton, SmartContract } from "./Buttons";
import heroData from "../content/heroData";
import { useSelector } from "react-redux";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";

const TimerComponent = () => {
  const [bnbValue, setBnbValue] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [raised, setRaised] = useState(null);
  const [filled, setFilled] = useState(0);
  const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS);
  const { data: currentRound } = useContractRead(contract, "currentRound");
  const { data: endTime } = useContractRead(contract, "endTime");
  const { data: startTime } = useContractRead(contract, "startTime");
  const { data: rounds } = useContractRead(contract, "rounds", [currentRound]);
  const { data: EthRaised } = useContractRead(contract, "totalSold");
  const { data: BNBPrice } = useContractRead(contract, "getBNBPrice");
  const { data: tokenForAllRound, isLoading: tokenForAllRoundLoader } =
    useContractRead(contract, "tokenForAllRound");
  const roundData = rounds?.map((item) => item.toString());
  const tokenPrice = roundData ? roundData[0] : "0";
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const tokenSale = heroData[currentLanguage].tokenSale;

  const percentageOfRaisedAmount = async () => {
    const currentRoundValue = await currentRound;
    const parsedCurrentRoundValue = parseInt(currentRoundValue);
    const totalAmount = await rounds;
    const ethRaised = await EthRaised;
    const parsedEthRaised = parseInt(ethRaised);
    // setRaised((parsedEthRaised / 10 ** 18) * bnbValue); // set the amount of raise for the loader
    setBnbValue(BNBPrice ? BNBPrice / 10 ** 8 : 0);
    setRaised(
      ethRaised
        ? ethers.utils.formatEther(ethRaised) *
            ((bnbValue * tokenPrice) / 10 ** 8)
        : 0
    ); // set the amount of raise for the loader
    const parsedtotalAmount = parseInt(totalAmount?.targetGoal);
    const ethBalance = parsedEthRaised / 10 ** 18;
    const percentage = ethRaised
      ? (ethers.utils.formatEther(ethRaised) / parseInt(tokenForAllRound)) * 100
      : 0;
    setFilled(percentage); // set the purcentage of the filled loader
  };

  useEffect(() => {
    percentageOfRaisedAmount();
  }, [EthRaised, bnbValue]);

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
            {startTime > new Date().getTime() / 1000
              ? tokenSale.titleStart
              : tokenSale.titleEnd}
          </p>
          <CountDown
            deadline={endTime}
            timer={tokenSale}
            startDateTime={startTime}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <p
            style={{
              fontSize: "14px",
            }}
          >
            {!isActive ? tokenSale?.TotalRiasedAmount : "Total Raised"}
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
              href="https://testnet.bscscan.com/address/0x904146de7948BB8Aa2cB2d2155665368c07C116c#code"
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
