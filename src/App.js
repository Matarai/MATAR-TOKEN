import "./styles/Home.css";
import { NavTop } from "./components/NavTop";
import Herioc from "./sections/Hero";
import SectionDivide from "./components/SectionDivide";
import Services from "./sections/Services";
import { Footer } from "./sections/Footer";
import { FAQs } from "./sections/FAQs";
import Introduction from "./sections/Introduction";
import MatarWallet from "./sections/MatarWallet";
import Documents from "./sections/Documents";
import Tokenomics from "./sections/Tokenomics";
import { Timeline } from "./sections/Timeline";
import Tracker from "./components/Tracker";
import Partnership from "./components/Partnership";
// import { PriceDividor } from "./components/PriceDividor";

export default function Home() {
  return (
    <main className="main">
      <NavTop />
      {/* <PriceDividor /> */}
      <Herioc />
      <SectionDivide />
      <Introduction />
      <Services />
      <MatarWallet />
      <Documents />
      <Tokenomics />
      <Tracker />
      <Timeline />
      <Partnership />
      <FAQs />
      <Footer />
    </main>
  );
}
