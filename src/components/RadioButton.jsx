import React from "react";
import styles from "../styles/RadioButton.module.css";
import {
  useConnectionStatus,
  useNetwork,
  useNetworkMismatch,
} from "@thirdweb-dev/react";

const RadioButton = ({ name, value, standard, icon }) => {
  const [, switchNetwork] = useNetwork();
  const networkMismatch = useNetworkMismatch();
  const connectionStatus = useConnectionStatus();

  console.log("networkMismatch", networkMismatch);
  console.log("connectionStatus", connectionStatus);
  return (
    <label
      className={styles.label}
      style={{ zIndex: "1", position: "relative" }}
      onClick={() => {
        switchNetwork(Number(process.env.REACT_APP_ACTIVE_CHAIN_ID));
      }}
    >
      <input type="button" name={name} className="d-none" value={value} />
      <div className={connectionStatus === "connected" && !networkMismatch ? styles.active : styles.customRadio}>
        <div className="d-flex gap-3 align-items-center">
          <div>{icon && <img src={icon} alt="icon" width="150%" />}</div>
          <div className="d-flex flex-column">
            <span className={styles.value}>{value}</span>
            {standard && <span className={styles.standard}>{standard}</span>}
          </div>
        </div>
      </div>
    </label>
  );
};

export default RadioButton;
