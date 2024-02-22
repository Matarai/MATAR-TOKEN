import React from "react";
import Phases from "../components/Phases";
import heroData from "../content/heroData";
import { useSelector } from "react-redux";

const TokenSale = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

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
            phaseNo={phase.title}
            value={phase.amount}
            matarValue={phase.quantity}
            isActive={phase.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default TokenSale;
