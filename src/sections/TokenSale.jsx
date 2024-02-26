import React from "react";
import Phases from "../components/Phases";
import heroData from "../content/heroData";
import { useSelector } from "react-redux";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const TokenSale = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS);
  const { data: currentRound, isLoading: currentRoundLoader } = useContractRead(
    contract,
    "currentRound"
  );
  const { data: rounds } = useContractRead(contract, "rounds", [currentRound]);
  const { data: BNBPrice } = useContractRead(contract, "getBNBPrice");
  const { data: tokenForEachRound } = useContractRead(
    contract,
    "tokenForEachRound"
  );
  const roundData =
    rounds?.length > 0 ? rounds.map((item) => item.toString()) : [];
  const tokenPrice = roundData ? roundData[0] : "0";
  const priceTillNextRound = tokenPrice ? tokenPrice / 10 ** 8 : "...";

  return (
    <div className="w-100">
      <h3
        style={{
          fontFamily: "Russo One",
          color: "#fff",
          fontSize: "1.5rem",
          textTransform: "uppercase",
        }}
        className={`${
          rltStatus ? "directionRTL text-md-end" : "text-md-start"
        } text-center`}
      >
        {heroData[currentLanguage].cards.title}
      </h3>
      <div
        className={`d-flex justify-content-start align-items-center gap-2 flex-wrap ${
          rltStatus && "directionRTL"
        }`}
      >
        {heroData[currentLanguage].cards.phaseCard.map((phase, index) => (
          <Phases
            key={index}
            index={index}
            currentPhase={parseInt(currentRound)}
            phaseNo={phase.title}
            value={
              priceTillNextRound
                ? parseFloat(priceTillNextRound.toString()).toFixed(2)
                : "..."
            }
            matarValue={
              tokenForEachRound
                ? parseInt(tokenForEachRound)
                    .toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })
                    .replace(/,/g, ".")
                : "..."
            }
            isActive={index + 1 === parseInt(currentRound)}
          />
        ))}
      </div>
    </div>
  );
};

export default TokenSale;
