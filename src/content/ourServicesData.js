import createToken from "../assets/services/createToken.svg";
import Swap from "../assets/services/Swap.svg";
import NftAi from "../assets/services/NFTAI.svg";
import NFTMarketPlace from "../assets/services/NFTMarketPlace.svg";

const ourServicesData = {
  english: {
    question: "What We Do?",
    heading: "Our Services",
    cards: [
      {
        id: "01",
        title: "NFT Holder Rewards Program",
        description: "Unlocking value for MATAR NFT holders by offering exclusive rewards every three months, incentivizing long-term engagement and loyalty within the MATAR ecosystem.",
        image: Swap,
        linkTo: "/swap",
        active: true,
      },
      {
        id: "02",
        title: "Swap",
        description:
          "Easily exchange digital assets through our swap service, facilitating quick and secure transactions within the MATAR ecosystem.",
        image: createToken,
        linkTo: "/create-token",
      },
      {
        id: "03",
        title: "Visa Card Integration",
        description: "Experience seamless swapping, buying, and selling of digital assets with the MATAR Wallet, integrated with Visa card for convenient transactions.",
        image: NftAi,
        linkTo: "/nft-ai",
      },
      {
        id: "04",
        title: "AI Integration in Blockchain Solutions",
        description:
          "Showcase and sell NFTs globally in our integrated marketplace.",
        image: NFTMarketPlace,
        linkTo: "/nft-marketplace",
      },
    ],
  },
  arabic: {
    question: "ما الذي نفعله؟",
    heading: "خدماتنا",
    cards: [
      {
        id: "٠١",
        title: "برنامج مكافآت لحاملي NFT",
        description:"فتح قيمة لحاملي NFT لـ MATAR عن طريق تقديم مكافآت حصرية كل ثلاثة أشهر، مما يحفز على المشاركة طويلة الأجل والولاء داخل نظام MATAR",
        image: Swap,
        linkTo: "/swap",
        active: true,
      },
      {
        id: "٠٢",
        title: "سواب",
        description: "تبادل الأصول الرقمية بسهولة من خلال خدمة التبادل الخاصة بنا، لتيسير المعاملات السريعة والآمنة ضمن نظام.",
        image: createToken,
        linkTo: "/create-token",
      },
      {
        id: "٠٣",
        title: "محفظة MATAR مع تكامل بطاقة فيزا",
        description: "تجربة تبادل سلس وشراء وبيع الأصول الرقمية مع محفظة MATAR، متكاملة مع بطاقة فيزا لإتاحة المعاملات المريحة",
        image: NftAi,
        linkTo: "/nft-ai",
      },
      {
        id: "٠٤",
        title: "دمج الذكاء الاصطناعي في حلول البلوكشين",
        description: " استغلال التقنيات الحديثة للذكاء الاصطناعي لتحسين وظائف البلوكشين، مما يعزز الكفاءة والأمان والقدرة على التوسع في تطبيقات مختلفة داخل مشروع MATAR.",
        image: NFTMarketPlace,
        linkTo: "/nft-marketplace",
      },
    ],
  },
};
export default ourServicesData;
