import Image from "next/image";
import React, { FC } from "react";

const BannerTextBg: FC = () => {
  return (
    <div className="absolute min-h-80 w-full -bottom-[50%] max-md:-bottom-[80%] -translate-x-12 -z-10">
      <div className="relative w-[calc(100%+100px)] min-h-80">
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
