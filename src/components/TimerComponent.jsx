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
  const [raised, setRaised] = useState(null);
  const [filled, setFilled] = useState(0);
  const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS);
  const { data: currentRound } = useContractRead(contract, "currentRound");
  const { data: endTime } = useContractRead(contract, "endTime");
  const { data: startTime } = useContractRead(contract, "startTime");
  const { data: rounds } = useContractRead(contract, "rounds", [currentRound]);
  const { data: EthRaised } = useContractRead(contract, "EthRaised");
  const { data: BNBPrice } = useContractRead(contract, "getBNBPrice");
  const { data: tokenForAllRound, isLoading: tokenForAllRoundLoader } =
    useContractRead(contract, "tokenForAllRound");
  const { data: totalSold } = useContractRead(contract, "totalSold");
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
        background: "rgba(18, 183, 242, 0.25)",
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
        <Col>
          <div>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              {tokenSale?.TotalRiasedAmount}
            </p>

            {/* value range should be from 0 - 100 so calculate it first*/}
            <LoaderThick
              value={(BNBPrice / 10 ** 8) * (EthRaised / 10 ** 18)}
              filled={(totalSold / 10 ** 18 / tokenForAllRound) * 100}
            />
          </div>
        </Col>
        <Col className="my-auto pb-2">
          <div
            className="gap-2 timer-buttons position-relative"
            style={{ zIndex: "1" }}
          >
            <ReportButton button1={tokenSale.button1} />
            <a
              href="https://bscscan.com/address/0xAa889fc852d065c37d762Dbc7295c7C9A3309B30#code"
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
