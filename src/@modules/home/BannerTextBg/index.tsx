import Image from "next/image";
import React, { FC } from "react";

const BannerTextBg: FC = () => {
  return (
    <div className="absolute min-h-80 w-full -bottom-[400px] max-md:-bottom-[450px] -translate-x-36 -z-10">
      <div className="relative w-[calc(100%+300px)] min-h-[1000px]">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="50% 50%"
          src={"/assets/home/below-banner-text.png"}
          alt="irepair background"
        />
      </div>
    </div>
  );
};

export default BannerTextBg;
