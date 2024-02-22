import React from 'react'
import styles from '../styles/RadioButton.module.css'

const RadioButton = ({ name, value, standard, icon }) => {
  return (
    <label className={styles.label} style={{zIndex:"1", position:"relative"}}>
      <input
        type="radio"
        name={name}
        className='d-none'
        value={value}
      />
      <div className={styles.customRadio}>
        <div>
          {icon && <img src={icon} alt="icon" width="150%"/>}
        </div>
        <div className='d-flex flex-column'>
          <span className={styles.value}>{value}</span>
          {standard && <span className={styles.standard}>{standard}</span>}
        </div>
      </div>
    </label>
  )
}

export default RadioButton