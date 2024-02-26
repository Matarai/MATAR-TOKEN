import React from "react";
import { useSelector } from "react-redux";

const Divider = () => {
  const { currentLanguage } = useSelector((state) => state.login);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div
        style={{
          border: "none",
          width: "80%",
          height: "1px",
          backgroundColor: "#ffffff",
        }}
      ></div> */}
      <span
        style={{
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "0 15px",
          textAlign: "center",
          wordWrap: "nowrap",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        className="presale_choose_network"
      >
        {currentLanguage === "english" ? "Choose Network" : "اختر الشبكة"}
      </span>
    </div>
  );
};

export default Divider;

