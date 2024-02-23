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
  useAddress,
  ConnectWallet,
  useLogout,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { contractABI, presaleContractABI } from "../constants/contractABI";
import { toast } from "sonner";

function Presale({ presaleData }) {
  const address = useAddress();
  const { logout } = useLogout();
  const [loaderValue, setLoaderValue] = React.useState(0);
  const [bnbAmount, setBnbAmount] = React.useState("");
  const [matarAmount, setMatarAmount] = React.useState("");
  const [currentWallet, setCurrentWallet] = React.useState("");
  const { currentLanguage } = useSelector((state) => state.login);
  const totalSupply = 21000000;
  // Read Contract
  const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS);
  const { mutateAsync: buyTokens, isLoading } = useContractWrite(
    contract,
    "buyTokens"
  );

  const call = async () => {
    if (bnbAmount <= 0 || bnbAmount === "") {
      toast.error("Please enter the amount of BNB", {
        position: "top-right",
      });
      return;
    }
    try {
      toast("Accept txn in your wallet", {
        duration: 5000,
        position: "top-right",
      });
      const data = await buyTokens({
        overrides: { value: ethers.utils.parseEther(bnbAmount) },
      });
      toast.success("Transaction submitted!", {
        action: {
          label: "View",
          onClick: () => {
            window.open(
              `https://testnet.bscscan.com/tx/${data.receipt.transactionHash}`
            );
          },
        },
        duration: 5000,
        position: "top-right",
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const { data: tokenForEachRound, isLoading: tokenEachRoundLoader } = useContractRead(contract, "tokenForEachRound")
  const { data: currentRound, isLoading: currentRoundLoader } = useContractRead(contract, "currentRound")
  const { data: rounds } = useContractRead(contract, "rounds", [currentRound]);

  const roundData =
    rounds?.length > 0 ? rounds.map((item) => item.toString()) : [];
  const tokenPrice = roundData ? roundData[2] : "0";
  const tokenSold = roundData ? roundData[3] : "0";
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

  const handleBnbAmountChange = (event) => {
    const enteredAmount = event.target.value;
    const calculatedMatarAmount = enteredAmount * tokenPrice;
    setBnbAmount(enteredAmount);
    setMatarAmount(calculatedMatarAmount.toFixed(6));
  };
  const handleMATARAmountChange = (event) => {
    const enteredAmount = event.target.value;
    const calculatedMatarAmount = enteredAmount / tokenPrice;
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
          <p className="fw-bold m-0">21.000.000</p>
        </div>
        <div className="text-center w-100">
          <p>{presaleData.totalSupply}</p>
          <p className="fw-bold m-0">{data.availableForSale}</p>
        </div>
      </div>
      <p className="mt-4 text-center">{presaleData.subTitle}</p>
      {/* value range should be from 0 - 100 so calculate it first*/}
      <LoaderThin value={loaderValue / 10 ** 18} color="#0556BA" />
      <p
        style={{
          fontSize: "12px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {currentLanguage === "english" ? "MATAR Raised:" : "مطر تم جمعها:"}{" "}
        {data?.matar?.price / 10 ** 18} MATAR /{data.matar.maxPrice} MATAR
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
                    value={Number(matarAmount).toFixed(1)}
                    disabled
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
        {address ? (
          <div onClick={call}>
            <ButtonFilled
              name={isLoading ? "Loading..." : "Buy MATAR"}
              className={`${styles.buttonFilled} position-relative `}
            />
          </div>
        ) : (
          <ConnectWallet
            name={address ? "Connect Wallet" : "ربط المحفظة"}
            modalSize="compact"
            theme={"dark"}
            style={{
              background: "linear-gradient(180deg, #5fb7fb 0%, #1d51b0 100%)",
              fontFamily: "Russo One",
            }}
            className={`${styles.buttonFilled} position-relative text-light`}
          />
        )}
      </div>
    </Container>
  );
}

export default Presale;
