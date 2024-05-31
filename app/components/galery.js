import React from "react";
import Image from "next/image";
const Galery = () => {
  return (
    <section className="relative flex flex-col bg-white w-full border-t-2 p-4">
      <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span>

      <h1 className="font-bold text-xl mx-auto my-10 text-black">Galery</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
          <Image
            src="https://picsum.photos/1200/600"
            alt=""
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
          <Image
            src="https://picsum.photos/1200/600?grayscale"
            alt=""
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
          <Image
            src="https://picsum.photos/1200/600"
            alt=""
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
          <Image
            src="https://picsum.photos/1200/600?grayscale"
            alt=""
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
          <Image
            src="https://picsum.photos/1200/600"
            alt=""
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
          <Image
            src="https://picsum.photos/1200/600?grayscale"
            alt=""
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
          <Image
            src="https://picsum.photos/1200/600"
            alt=""
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Galery;
