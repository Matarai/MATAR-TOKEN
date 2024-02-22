import React from "react";
import star from "../assets/star.svg";
import style from "./styles/sectionDivide.module.css";
import Marquee from "react-fast-marquee";

const SectionDivide = () => {
  const options = ["AI BLOCKCHAIN", "AI NFT", "AI TOKEN", "AI CEX STRATEGY"];

  return (
    <div className="position-relative">
      <div
        className={`${style.box} mt-0 mb-md-5`}
        style={{ position: "relative", zIndex: "2" }}
      >
        <Marquee gradient={false} speed={40} autoFill={true}>
          {options.map((option, index) => {
            return (
              <div key={index} className={style.textBox}>
                <p className="m-0">{option}</p>
                <img src={star} alt="star" />
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className="skew-element"></div>
    </div>
  );
};

export default SectionDivide;
