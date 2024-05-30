import React from "react";
import Image from "next/image";
const Galery = () => {
  return (
    <div className="p-10">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
        <div className="">
          <Image src="https://picsum.photos/600/600" className="" alt="" width={600} height={600} />
        </div>
        <div class="">
          <Image src="https://picsum.photos/1200/600" alt="" width={600} height={600} />
        </div>
        <div>
          <Image src="https://picsum.photos/1200/600" alt="" width={600} height={600} />
        </div>
        <div>
          <Image src="https://picsum.photos/1200/600" alt="" width={600} height={600} />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <Image src="https://picsum.photos/1200/600" alt="" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Galery;
