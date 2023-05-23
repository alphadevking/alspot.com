import chromanft from '@/site/assets/images/chromanft.png'
import kimberlite from '@/site/assets/images/kimberlite.png'
import nftx from '@/site/assets/images/nftx.png'

let id = 0;

export const project_card_array = [
    {
        id: id++,
        name: "A Minimal NFT Marketplace",
        description: "NFTs are listed for sale.",
        image: chromanft,
        alt: "",
        tech: ["HTML 5.0", "CSS 3.0", "JavaScript"],
        linkTitle: "chromanft.com",
        link: "https://chromanft.netlify.app",
    },
    {
        id: id++,
        name: "Blockchain-based Safe",
        description: "Cryptocurrency lock, safely stores your coins and assets.",
        image: kimberlite,
        alt: "",
        tech: ["React Typescript", "CSS 3.0", "Web 3.0"],
        linkTitle: "safe.kimberlite.rocks",
        link: "https://safe.kimberlite.rocks",
    },
    {
        id: id++,
        name: "NFT and VR-Augumented Interaction",
        description: "Connecting ur NFTs and Virtual Reality in a unique space, where you have full control over your assets - Buy, sell, exchange etcetera.",
        image: nftx,
        alt: "",
        tech: ["React Typescript", "CSS 3.0", "Web 3.0"],
        linkTitle: "nft-apocalypse.com",
        link: "https://nft-apocalypse.netlify.app/",
    },
];