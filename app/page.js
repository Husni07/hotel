import Image from "next/image";
import HeroImage from "./components/heroimage";
import HeroSection from "./components/hero";
import Galery from "./components/galery";

export default function Home() {
  const slides = [
    {
      url: "https://picsum.photos/1200/600?grayscale",
    },
    {
      url: "https://picsum.photos/1200/600",
    },
    {
      url: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404440064_892730489223202_7583215412251772023_n-1024x576.jpg",
    },
  ];
  return (
    <>
      <HeroImage slides={slides} />

      <HeroSection />
      {/* <Galery /> */}
    </>
  );
}
