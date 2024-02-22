import createToken from '../assets/services/createToken.svg'
import Swap from '../assets/services/Swap.svg'
import NftAi from '../assets/services/NFTAI.svg'
import NFTMarketPlace from '../assets/services/NFTMarketPlace.svg'

const ourServicesData = {
    english: {
        question: "What We Do?",
        heading: "Our Services",
        cards: [
            {
                id: "01",
                title: "Create Token",
                description: "Generate blockchain tokens swiftly for decentralised ventures.",
                image: createToken,
                linkTo: "/create-token",
                active: true
            },
            {
                id: "02",
                title: "Swap",
                description: "Securely trade cryptocurrencies and tokens with ease.",
                image: Swap,
                linkTo: "/swap"
            },
            {
                id: "03",
                title: "NFT Ai",
                description: "Transform digital content into blockchain-backed NFTs.",
                image: NftAi,
                linkTo: "/nft-ai"
            },
            {
                id: "04",
                title: "NFT Marketplace",
                description: "Showcase and sell NFTs globally in our integrated marketplace.",
                image: NFTMarketPlace,
                linkTo: "/nft-marketplace"
            },
        ]
    },
    arabic: {
        question: "ما الذي نفعله؟",
        heading: "خدماتنا",
        cards: [
            {
                id: "٠١",
                title: "إنشاء التوكن",
                description: "قم بإنشاء توكن الخاص بك بسرعة للمشاريع اللامركزية.",
                image: createToken,
                linkTo: "/create-token",
                active: true
            },
            {
                id: "٠٢",
                title: "سواب",
                description: "تداول العملات المشفرة والرموز بشكل آمن و سهولة.",
                image: Swap,
                linkTo: "/swap"
            },
            {
                id: "٠٣",
                title: "NFT Ai",
                description: "تحويل المحتوى الرقمي إلى NFTs المدعومة بتقنية البلوكشين.",
                image: NftAi,
                linkTo: "/nft-ai"
            },
            {
                id: "٠٤",
                title: "سوق NFT",
                description: "اعرض وبيع NFTs عالميًا في سوقنا المتكامل.",
                image: NFTMarketPlace,
                linkTo: "/nft-marketplace"
            },
        ]
    }
}
export default ourServicesData;