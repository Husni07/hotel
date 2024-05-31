"use client";
import React from "react";
import HeroSection from "./hero";
import Image from "next/image";
import Galery from "../components/galery";

export default function RoomPage() {
  return (
    <div>
      <div className="">
        <Image
          src={"/Images/kamar.jpg"}
          alt="image"
          width={1280}
          height={600}
          draggable={false}
          className="object-cover md:h-[100vh] w-full"
        />
      </div>
      <HeroSection />
      {/* <Galery /> */}
    </div>
  );
}
