"use client";
import React from "react";
import HeroImage from "../components/heroimage";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "/Images/barrflix.png",
  },
  {
    url: "/Images/barrstore.png",
  },
];

console.log("Slides in RoomPage:", slides);

export default function RoomPage() {
  return (
    <div>
      <HeroImage slides={slides} />
    </div>
  );
}
