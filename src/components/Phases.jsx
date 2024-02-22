import React from "react";
import style from "./styles/phases.module.css";

const Phases = ({ phaseNo, currency, value, matarValue, isActive = false }) => {
  return (
    <div className={isActive ? style.phaseStyleActive : style.phaseStyle}>
      <p>{isActive ? phaseNo : ""}</p>
      <h3>
        {isActive ? value : ""} {isActive ? currency : ""}
      </h3>
      <p className="matarValue">{isActive ? matarValue : ""}</p>
    </div>
  );
};

export default Phases;
