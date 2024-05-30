"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "./heroimage";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

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

    // Tambahkan gambar lainnya di sini
  ];
  return (
    <section className="relative py-32 bg-white lg:py-36">
      <div className="flex justify-center mb-10">
        <div
          className="font-bold text-xl text-black z-10 flex justify-center flex-col items-center text-center"
        >
          <h1>Fataya Homestay</h1>
          <p className="text-base px-5">
            Temukan kenyamanan dan kemewahan di Tempat kami di Kota Rembang.
            Nikmati fasilitas terbaik, mulai dari kamar tidur yang nyaman hingga
            ruang tamu yang luas dan dapur modern. Dapatkan juga akses Wi-Fi
            gratis, kolam renang pribadi, dan layanan pemandu wisata untuk
            pengalaman liburan yang tak terlupakan di Little Tiongkok
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-10 px-5 mx-auto lg:max-w-7xl sm:px-10 md:px-12 lg:px-5">
        <div className="absolute inset-y-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          <span className="absolute hidden w-24 h-24 rotate-90 skew-x-12 bg-green-400 -left-6 md:left-4 top-24 lg:top-28 rounded-3xl blur-xl opacity-60 lg:opacity-95 lg:block"></span>
          <span className="absolute w-24 h-24 bg-blue-600 right-4 bottom-12 rounded-3xl blur-xl opacity-80"></span>
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span>

        <div className="relative flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row lg:items-center lg:justify-between w-full">
          <div className="text-xl leading-tight w-full lg:w-1/2 lg:pr-8 ">
            <div className="mb-8 border-b-2">
              <p className="text-transparent font-bold text-lg bg-gradient-to-r from-fuchsia-700 to-red-600 bg-clip-text">
                Description
              </p>
              <p className="text-base text-left text-gray-900">
                Di tempat ini kami menawarkan kamar tidur yang nyaman buat Checkin, kamar mandi
                pribadi, ruang tamu yang hangat, dapur lengkap, dan fasilitas
                tambahan seperti kolam renang untuk memastikan pengalaman
                menginap yang menyenangkan dan berkualitas.
              </p>
            </div>
            <div>
              <p className="text-transparent font-bold text-lg bg-gradient-to-r from-fuchsia-700 to-red-600 bg-clip-text">
                Fasilitas
              </p>
              <div className="text-base text-left text-gray-700 mt-2 leading-tight">
                <p>Playstation 5 full set</p>
                <p>Free Wi-Fi</p>
                <p>TV layar lebar</p>
                <p>Billiard</p>
                <p>AC</p>
                <p>Kolam renang</p>
              </div>
            </div>
          </div>
          <div
            className="w-full mx-auto lg:w-1/2 lg:h-auto lg:max-w-none lg:mx-0 mt-8 lg:mt-0"
          >
            <HeroImage slides={slides}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
