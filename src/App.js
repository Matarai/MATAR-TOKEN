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
import {Timeline} from "./sections/Timeline";

export default function Home() {
  return (
    <main className="main">
      <NavTop />
      <Herioc />
      <SectionDivide />
      <Introduction />
      <Services />
      <MatarWallet />
      <Documents />
      <Tokenomics />
      <Timeline />
      <FAQs />
      <Footer />
    </main>
  );
}
