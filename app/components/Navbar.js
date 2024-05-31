import React from "react";
import Link from "next/link";
import Image from "next/image";

const navItem = (url, title) => {
  return (
    <div className="text-base font-bold text-black hover:ease-in-out hover:duration-500">
      <Link href={url}>
        <span>{title}</span>
      </Link>
    </div>
  );
};
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md border-b-2 border-slate-300">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="" className="">
            <div>
              <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-fuchsia-700 to-red-600 bg-clip-text">
                BARR&apos;
              </span>
              <span className="text-4xl font-bold">Q</span>
            </div>
          </Link>
        </div>
        <div className="gap-2 md:flex">
          {navItem("/", "Home")}
          {navItem("/room-v2", "room v2")}
          {navItem("/room-v3", "room v3")}
          {navItem("/", "TBA")}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
