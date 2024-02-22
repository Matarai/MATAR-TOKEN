import { BsRobot } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

export const footer = {
  english: {
    cta: {
      title: "Join The Community",
      btnX: {
        title: "X (TWITTER)",
        link: "https://x.com/matar__ai",
      },
      btnTG: {
        title: "TELEGRAM",
        link: "https://t.me/matar_ai",
      },
    },
    description:
      "MATAR combines blockchain and AI, offering innovative solutions for a smarter, decentralised future.",
    sections: [
      {
        title: "Services",
        links: [
          {
            title: "Create Token",
            link: "/",
          },
          {
            title: "Swap",
            link: "/",
          },
          {
            title: "NFT AI",
            link: "/",
          },
          {
            title: "Blockchain AI",
            link: "/",
          },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            title: "Whitepaper",
            link: "/https://matar.ai/whitepaper-en.pdf",
          },
          {
            title: "Github",
            link: "https://github.com/Matarai",
          },
          {
            title: "Documentation",
            link: "/",
          },
        ],
      },
      {
        title: "Contact",
        links: [
          {
            icon: <BsRobot size={25} />,
            title: "Support Telegram",
            label: "@MATAR_support_bot",
            link: "https://t.me/MATAR_support_bot",
          },
          {
            icon: <IoMailOutline size={25} />,
            title: "Email",
            label: "contact@matar.ai",
            link: "mailto:contact@matar.ai",
          },
        ],
      },
    ],
  },
  arabic: {
    cta: {
      title: "الانضمام إلى المجتمع",
      btnX: {
        title: "اكس (تويتر)",
        link: "https://x.com/matar__ai",
      },
      btnTG: {
        title: "تلغرام",
        link: "https://t.me/matar_ai",
      },
    },
    description:
      "يجمع MATAR بين تقنية blockchain والذكاء الاصطناعي، ويقدم حلولًا مبتكرة لمستقبل أكثر ذكاءً ولامركزيًا.",
    sections: [
      {
        title: "خدمات",
        links: [
          {
            title: "إنشاء العقد",
            link: "/",
          },
          {
            title: "سواب",
            link: "/",
          },
          {
            title: "NFT AI",
            link: "/",
          },
          {
            title: "بلوكشين",
            link: "",
          },
        ],
      },
      {
        title: "موارد",
        links: [
          {
            title: "الورقة البيضاء",
            link: "https://matar.ai/whitepaper-ar.pdf",
          },
          {
            title: "Github",
            link: "/aihttps://github.com/Matarai",
          },
          {
            title: "الملفات",
            link: "/",
          },
        ],
      },
      {
        title: "اتصال",
        links: [
          {
            title: "دعمنا في تلغرام",
            label: "@MATAR_support_bot",
            link: "https://t.me/MATAR_support_bot",
          },
          {
            title: "الايمايل",
            label: "contact@matar.ai",
            link: "mailto:contact@matar.ai",
          },
        ],
      },
    ],
  },
};
