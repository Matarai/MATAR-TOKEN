import React from "react";
import styles from "../styles/RadioButton.module.css";
import {
  useConnectionStatus,
  useNetworkMismatch,
  useSwitchChain,
  useAddress,
} from "@thirdweb-dev/react";
import { toast } from "sonner";
import { Binance } from "@thirdweb-dev/chains";
import { useSelector } from "react-redux";

const RadioButton = ({ name, value, standard, icon }) => {
  const address = useAddress();
  const switchChain = useSwitchChain();
  const networkMismatch = useNetworkMismatch();
  const connectionStatus = useConnectionStatus();

  const { currentLanguage } = useSelector((state) => state.login);

  const handleSwitchChain = async () => {
    if (networkMismatch) {
      try {
        await switchChain(Binance.chainId);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleCopyReferralLink = () => {
    if (!address) {
      toast.error("No wallet found", {
        position: "top-right",
      });
      return;
    }
    navigator.clipboard.writeText(`https://matar-dapp.netlify.app?referral=${address}`);
    toast.success("Referral link copied!", {
      position: "top-right",
    });
  };
  return (
    <label
      className={styles.label}
      style={{ zIndex: "1", position: "relative", cursor: "pointer" }}
      onClick={handleCopyReferralLink}
    >
      <input type="button" name={name} className="d-none" value={value} />
      <div
        className={
          connectionStatus === "connected" && !networkMismatch
            ? styles.active
            : styles.customRadio
        }
      >
        <div className="d-flex gap-3 align-items-center py-2">
          {/* <div>{icon && <img src={icon} alt="icon" width="150%" />}</div>
          <div className="d-flex flex-column">
            <span className={styles.value}>{value}</span>
            {standard && <span className={styles.standard}>{standard}</span>}
          </div> */}
          <span className="fw-bold">
            {currentLanguage === "english"
              ? "Copy your referral link"
              : "نسخ رابط الإحالة الخاص بك"}
          </span>
        </div>
      </div>
    </label>
  );
};

export default RadioButton;
