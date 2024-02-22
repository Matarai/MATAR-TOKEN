import React from "react";
import { Button, Container } from "react-bootstrap";
import joinOurCommunity from "../content/joinOurCommunityData";
import { footer } from "../content/footer";
import { isMobile } from "react-device-detect";

export const FooterCTA = ({ currentLanguage }) => {
  return (
    <Container className="footerCTA">
      <h2 className={isMobile && "f-25 mb-5"}>
        {footer[currentLanguage].cta.title}
      </h2>
      <div
        className={`d-flex justify-content-between mx-auto ${
          isMobile && "flex-column gap-3"
        }`}
        style={isMobile ? { maxWidth: "250px" } : { maxWidth: "550px" }}
      >
        <Button className="fw-bold px-5 py-3 rounded-3 border-0">
          {footer[currentLanguage].cta.btnX.title}
        </Button>
        <Button className="fw-bold px-5 py-3 rounded-3 border-0">
          {footer[currentLanguage].cta.btnTG.title}
        </Button>
      </div>
    </Container>
  );
};
