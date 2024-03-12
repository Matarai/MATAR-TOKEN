import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

export const PriceDividor = () => {
  const { currentLanguage } = useSelector((state) => state.login);
  return (
    <div
      className="position-relative"
      style={{
        background: "linear-gradient(180deg, #5FB7FB 0%, #1d51b0 100%)",
      }}
    >
      <Marquee gradient={false} speed={40} autoFill={true}>
        <p className="m-0 mx-5 fw-semibold">
          {currentLanguage === "english" ? "Phase" : "المرحلة"} 1: &nbsp;&nbsp;
          0.8 {currentLanguage === "english" ? "USDT" : "دولار"}
        </p>
        <span>|</span>
        <p className="m-0 mx-5 fw-semibold">
          {currentLanguage === "english" ? "Phase" : "المرحلة"} 2: &nbsp;&nbsp;
          0.9 {currentLanguage === "english" ? "USDT" : "دولار"}
        </p>
        <span>|</span>
        <p className="m-0 mx-5 fw-semibold">
          {currentLanguage === "english" ? "Phase" : "المرحلة"} 3: &nbsp;&nbsp;
          1.0 {currentLanguage === "english" ? "USDT" : "دولار"}
        </p>
        <span>|</span>
        <p className="m-0 mx-5 fw-semibold">
          {currentLanguage === "english" ? "Phase" : "المرحلة"} 4: &nbsp;&nbsp;
          1.1 {currentLanguage === "english" ? "USDT" : "دولار"}
        </p>
        <span>|</span>
        <p className="m-0 mx-5 fw-semibold">
          {currentLanguage === "english" ? "Phase" : "المرحلة"} 5: &nbsp;&nbsp;
          1.2 {currentLanguage === "english" ? "USDT" : "دولار"}
        </p>
        <span>|</span>
      </Marquee>
    </div>
  );
};
