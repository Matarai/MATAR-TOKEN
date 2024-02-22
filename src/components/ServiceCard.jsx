import React from 'react'
import { Link } from 'react-router-dom'
import linkTo from '../assets/services/linkTo.svg'
import linkTo2 from '../assets/services/linkTo2.svg'
import style from "../styles/services.module.css"

const ServiceCard = ({ id, title, description, image, link, active = false }) => {
  return (
    <div className={style.box}>
      <h1 className={style.id}>{id}.</h1>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
      <div className={style.img}>
        <img src={image} alt={title} className='w-100' />
      </div>
      <div className={style.link}>
        <Link to={link} target='_blank'>
          <img src={active? linkTo : linkTo2} alt="Link" className='w-100' />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard