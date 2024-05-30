"use client";
import React from "react";
import HeroImage from "../components/heroimage";

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

export default function RoomPage() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <HeroImage slides={slides} />
    </div>
  );
}
