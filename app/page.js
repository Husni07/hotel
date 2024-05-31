import Image from "next/image";
import HeroSection from "./components/hero";
import Galery from "./components/galery";
import Slider from "./components/Slider";

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
      <div
        className="bg-fixed bg-cover"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1455382950/id/foto/tempat-tidur-yang-nyaman-tanpa-tamu-di-kamar-hotel.jpg?s=612x612&w=0&k=20&c=QTlpE-ImejQa9QjFK-AwhwtBAdEOTsXcfQpcLzHRjkk=')",
        }}
      >
        <Slider slides={slides} />
      </div>

      <HeroSection />
      {/* <Galery /> */}
    </>
  );
}
