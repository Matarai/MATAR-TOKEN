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
import styles from "./styles/buttons.module.css";
import { useSelector } from "react-redux";
import {
  useContract,
  useContractRead,
  Web3Button,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

function Presale({ presaleData }) {
  const [loaderValue, setLoaderValue] = React.useState(0);
  const [bnbAmount, setBnbAmount] = React.useState("");
  const [matarAmount, setMatarAmount] = React.useState("");
  const { currentLanguage } = useSelector((state) => state.login);

  // Read Contract
  const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS);
  const { data: totalSupply } = useContractRead(contract, "totalSupply");
  const { contract: presaleContract } = useContract(
    process.env.REACT_APP_PRESALE_CONTRACT_ADDRESS
  );
  const { data: tokenForEachRound } = useContractRead(
    presaleContract,
    "tokenForEachRound"
  );
  const { data: currentRound } = useContractRead(
    presaleContract,
    "currentRound"
  );
  const { data: rounds } = useContractRead(presaleContract, "rounds", [
    currentRound,
  ]);

  const roundData = rounds?.map((item) => item.toString());
  const tokenPrice = roundData ? roundData[2] : "0";
  const tokenSold = roundData ? ethers.utils.formatEther(roundData[3]) : "0";
  const tokenGoal = roundData ? roundData[4] : "0";
  const data = {
    totalSupply: totalSupply
      ? parseFloat(ethers.utils.formatEther(totalSupply))
          .toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })
          .replace(/,/g, ".")
      : "...",
    availableForSale: tokenForEachRound
      ? parseFloat(tokenForEachRound)
          .toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })
          .replace(/,/g, ".")
      : "...",
    matar: {
      price: tokenSold,
      maxPrice: tokenGoal * tokenPrice,
    },
  };

  // Write Contract
  const { mutateAsync: buyTokens, isLoading } = useContractWrite(
    presaleContract,
    "buyTokens"
  );
  const buyTokensHandler = async () => {
    try {
      const data = await buyTokens({
        value: bnbAmount.toString(),
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  const handleBnbAmountChange = (event) => {
    const enteredAmount = event.target.value;
    const calculatedMatarAmount = enteredAmount * 141;
    setBnbAmount(enteredAmount);
    setMatarAmount(calculatedMatarAmount.toFixed(6));
  };
  const handleMATARAmountChange = (event) => {
    const enteredAmount = event.target.value;
    const calculatedMatarAmount = enteredAmount / 141;
    setMatarAmount(enteredAmount);
    setBnbAmount(calculatedMatarAmount.toFixed(6));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let val = (data.matar.price / data.matar.maxPrice) * 100;
      setLoaderValue(val);
    }, 1000);
    return () => clearInterval(interval);
  });
  // const { contract, isLoading } = useContract(
  //   process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS
  // );
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
                    type="number"
                    min={0}
                    placeholder="0.0"
                    className="border-0 bg-transparent"
                    value={bnbAmount}
                    onChange={handleBnbAmountChange}
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
                    type="number"
                    min={0}
                    placeholder="0.0"
                    className="border-0 bg-transparent"
                    value={matarAmount}
                    onChange={handleMATARAmountChange}
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
        <Web3Button
          contractAddress={process.env.REACT_APP_PRESALE_CONTRACT_ADDRESS}
          action={buyTokensHandler}
          connectWallet={{
            btnTitle:
              currentLanguage === "english" ? "Connect Wallet" : "ربط المحفظة",
            modalTitle: "Login",
            // ... etc
          }}
          // btnTitle={currentLanguage === "english" ? "Buy MATAR" : "ربط المحفظة"}
          style={{
            background: "linear-gradient(180deg, #5fb7fb 0%, #1d51b0 100%)",
            color: "white",
            textAlign: "center",
            padding: "10px 15px",
            fontFamily: "Russo One",
            borderRadius: "5px",
            display: "inline-block",
            cursor: "pointer",
            border: "none",
            outline: "none",
          }}
        >
          Buy MATAR
        </Web3Button>
      </div>
    </Container>
  );
}

export default Presale;
