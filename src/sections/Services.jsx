import React from "react";
import { Container } from "react-bootstrap";
import style from "../styles/services.module.css";
import ServiceCard from "../components/ServiceCard";
import swirl from "../assets/services/swirl.svg";
import ourServicesData from "../content/ourServicesData";
import { useSelector } from "react-redux";
import { isDesktop } from "react-device-detect";

const Services = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Container className="wideContainer" id="feature">
        <p className="title text-center">
          {ourServicesData[currentLanguage].question}
        </p>
        <h1 className="heading text-center">
          {ourServicesData[currentLanguage].heading}
        </h1>
        <div className={`${rltStatus && "directionRTL"} ${style.cards}`}>
          {ourServicesData[currentLanguage].cards.map((card) => {
            return (
              <div className={style.card} key={card.id}>
                <ServiceCard
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.linkTo}
                  active={card.active}
                />
              </div>
            );
          })}
        </div>
      </Container>
     <img className={style.swirl} src={swirl} alt="" />
    </div>
  );
};

export default Services;
