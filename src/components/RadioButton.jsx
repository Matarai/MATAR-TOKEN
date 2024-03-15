import React from "react";
import styles from "../styles/RadioButton.module.css";
import {
  useConnectionStatus,
  useNetworkMismatch,
  useSwitchChain,
} from "@thirdweb-dev/react";
import { Binance } from "@thirdweb-dev/chains";

const RadioButton = ({ name, value, standard, icon }) => {
  const switchChain = useSwitchChain();
  const networkMismatch = useNetworkMismatch();
  const connectionStatus = useConnectionStatus();

  const handleSwitchChain = async () => {
    if (networkMismatch) {
      try {
        await switchChain(Binance.chainId);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <label
      className={styles.label}
      style={{ zIndex: "1", position: "relative" }}
      onClick={handleSwitchChain}
    >
      <input type="button" name={name} className="d-none" value={value} />
      <div
        className={
          connectionStatus === "connected" && !networkMismatch
            ? styles.active
            : styles.customRadio
        }
      >
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
