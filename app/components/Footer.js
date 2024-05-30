import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="font-semibold lg:text-xl md:text-lg text-base bg-transparent backdrop-blur-md w-full mt-10">
        <div className="flex flex-row justify-between items-center">
          <div className="py-5 mx-5 animate-bounce">
            <div className="text-base font-bold border-white border-2 py-3 px-8 rounded-lg w-50 mt-2 hover:text-slate-700 hover:ease-in-out hover:duration-500 hover:cursor-pointer hover:border-ungu">
              <Link href="https://api.whatsapp.com/send?phone=6285866242248&text=lu%20ganteng%20amat%20bang">
                <span>Contact Me →</span>
              </Link>
            </div>
          </div>
          <div className="py-5 mx-5 text-4xl flex flex-wrap gap-3">
            <Link href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram hover:scale-105 hover:text-merah duration-300"></i>
            </Link>

            <Link href="https://twitter.com/" target="_blank">
              <i className="fab fa-twitter hover:scale-105 hover:text-merah duration-300"></i>
            </Link>

            <Link href="https://www.youtube.com/" target="_blank">
              <i className="fab fa-youtube hover:scale-105 hover:text-merah duration-300"></i>
            </Link>

            <Link href="https://github.com/" target="_blank">
              <i className="fab fa-github hover:scale-105 hover:text-merah duration-300"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
