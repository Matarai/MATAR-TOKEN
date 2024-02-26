import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import axios from "axios";

const LoaderThin = ({ color = "white", value, priceTillNextRound }) => {
  const { currentLanguage } = useSelector((state) => state.login);
  return (
    <div
      className="rounded text-center"
      style={{
        width: "100%",
        height: "25px",
        position: "relative",
        top: 0,
        left: 0,
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="rounded"
        style={{
          width: `${value}%`,
          height: "100%",
          background: "linear-gradient(180deg, #5FB7FB 0%, #1d51b0 100%)",
          position: "absolute",
          left: 0,
          zIndex: 0,
        }}
      ></div>

      <span
        style={{
          position: "absolute",
          zIndex: 1,
          fontFamily: "Russo One",
          color: `${color}`,
          fontSize: "1rem",
        }}
      >
        ${priceTillNextRound}{" "}
        {currentLanguage === "english"
          ? "Until Next Phase"
          : "حتى المرحلة التالية"}
      </span>
    </div>
  );
};

const LoaderThick = ({ value, filled }) => {
  // let called = false;
  // const [price, setPrice] = useState(0);
  const color = filled > 50 ? "white" : "#0556BA";
  // const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS);

  // const { data, isLoading } = useContractRead(contract, "EthRaised");

  // const getBNBTOUSD = async () => {
  //   try {
  //     let reqOptions = {
  //       url: process.env.REACT_APP_BNBTOUSD_CONVERSION,
  //       method: "GET",
  //     };

  //     let response = await axios.request(reqOptions);
  //     setPrice(response.data.price);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (!called) {
  //     getBNBTOUSD();
  //     called = true;
  //   }
  // }, []);

  return (
    <div
      className="rounded text-center"
      style={{
        width: "100%",
        height: "30px",
        position: "relative",
        top: 0,
        left: 0,
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="rounded"
        style={{
          width: `${filled}%`,
          height: "100%",
          background: "linear-gradient(180deg, #5FB7FB 0%, #1d51b0 100%)",
          position: "absolute",
          left: 0,
          zIndex: 0,
        }}
      ></div>

      <span
        style={{
          position: "absolute",
          zIndex: 1,
          fontFamily: "Russo One",
          color: `${color}`,
          fontSize: "1rem",
        }}
      >
        ${value ? Number(value).toFixed(1) : 0}
      </span>
    </div>
  );
};

export { LoaderThin, LoaderThick };
