import React from 'react'
import { useSelector } from 'react-redux'

const LoaderThin = ({color = "white", value = 0}) => {
  const {currentLanguage} = useSelector((state) => state.login);
  return (
    <div
      className='rounded text-center'
      style={{
        width: "100%",
        height: "25px",
        position: "relative",
        top: 0,
        left: 0,
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="rounded"
        style={{
          width: `${value}%`,
          height: "100%",
          background: "linear-gradient(180deg, #5FB7FB 0%, #1d51b0 100%)",
          position: "absolute",
          left: 0,
          zIndex: 0,
        }}
      ></div>

      <span
        style={{
          position: "absolute",
          zIndex: 1,
          fontFamily: "Russo One",
          color: `${color}`,
          fontSize: "1rem",
        }}
      >
        {currentLanguage === "english" ? "Until Next Phase" : "حتى المرحلة التالية"}
        </span>
    </div>
  )
}

const LoaderThick = ({value = 0}) => {
  const color = value > 50? "white" : "#0556BA";
  return (
    <div
      className='rounded text-center'
      style={{
        width: "100%",
        height: "30px",
        position: "relative",
        top: 0,
        left: 0,
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="rounded"
        style={{
          width: `${value}%`,
          height: "100%",
          background: "linear-gradient(180deg, #5FB7FB 0%, #1d51b0 100%)",
          position: "absolute",
          left: 0,
          zIndex: 0,
        }}
      ></div>

      <span
        style={{
          position: "absolute",
          zIndex: 1,
          fontFamily: "Russo One",
          color: `${color}`,
          fontSize: "1rem",
        }}
      >${value}</span>
    </div>
  )
}

export {LoaderThin, LoaderThick}