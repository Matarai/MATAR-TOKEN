import logoEN from "../assets/logoEN.svg";
import logoAR from "../assets/logoAr.svg";

const routesEn = [
  {
    name: "About",
    path: "#introduction",
    exact: true,
  },
  {
    name: "Feature",
    path: "#feature",
    exact: true,
  },
  {
    name: "Wallet",
    path: "#wallet",
    exact: true,
  },
  {
    name: "Tokenomics",
    path: "#tokenomics",
    exact: true,
  },
  {
    name: "Roadmap",
    path: "#roadmap",
    exact: true,
  },
  {
    name: "FAQs",
    path: "#faq",
    exact: true,
  },
];

const routesAr = [
  {
    name: "حول",
    path: "#introduction",
    exact: true,
  },
  {
    name: "ميزة",
    path: "#feature",
    exact: true,
  },
  {
    name: "محفظة",
    path: "#wallet",
    exact: true,
  },
  {
    name: "التوكينوميكس",
    path: "#tokenomics",
    exact: true,
  },
  {
    name: "خريطة الطريق",
    path: "#roadmap",
    exact: true,
  },
  {
    name: "أسئلة شائعة",
    path: "#faq",
    exact: true,
  },
];

const navData = {
  english: {
    logo: logoEN,
    routes: routesEn,
  },
  arabic: {
    logo: logoAR,
    routes: routesAr,
  }
}

export default navData;