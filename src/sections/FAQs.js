import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Accordions } from "../components/Accordions";
import FaqData from "../content/faqData";
import { useSelector } from "react-redux";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { isMobile } from "react-device-detect";

export const FAQs = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

  return (
    <Container className="faqWrapper" id="faq">
      <h2 className="text-center fs-1">FAQS</h2>
      <Accordion className={rltStatus ? "mt-5 directionRTL" : "mt-5"}>
        {FaqData[currentLanguage].content.map((data, index) => (
          <Accordions key={index} _key={index} title={data.title} body={data.body} />
        ))}
      </Accordion>
      <p className={`cursor-pointer ${isMobile && "ms-3"} ${rltStatus && "directionRTL"}`}>{FaqData[currentLanguage].showMore}  <MdOutlineKeyboardArrowDown size={25} /></p>
    </Container>
  );
};
