import React from 'react'
import style from "../styles/tokenomics.module.css"

const TokenSupply = ({total}) => {
  return (
    <>
      <h3
        style={{
          fontFamily: "Russo One",
          fontSize: "20px",
        }}
      >Allocation of funds</h3>
      <p
        className={style.description}
        style={{ color: "#9a9fb9" }}
      >Total token supply - {total} MATAR</p>
    </>
  )
}

export default TokenSupply