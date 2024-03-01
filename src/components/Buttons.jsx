import React from "react";
import style from "./styles/buttons.module.css";

const ButtonFilled = ({ name }) => {
  return (
    <button className={`${style.buttonFilled} position-relative`} style={{zIndex:"2"}}>
      {name}
    </button>
  );
};

const ButtonOutline = ({ name }) => {
  return (
    <div className={style.buttonOutline}>
      <button>
        {name}
      </button>
    </div>
  );
};

// ------------------- Hard Coded --------------------------
const ReportButton = ({ button1 }) => {
  return (
    <button className={`${style.buttonFilled1} me-4`} style={{width:"100px", textAlign:"center", padding:"6px 0", height:"auto"}} onClick={() => window.open("https://app.solidproof.io/projects/matar-ai?audit_id=962", "_blank")}>
      {button1}
    </button>
  );
};

const SmartContract = ({ button2 }) => {
  return (
    <div className={style.buttonOutline1}>
      <button>
        {button2}
      </button>
    </div>
  );
};

export { ButtonFilled, ButtonOutline, ReportButton, SmartContract };
