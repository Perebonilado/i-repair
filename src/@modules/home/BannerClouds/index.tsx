import Image from "next/image";
import React, { FC } from "react";

const BannerClouds: FC = () => {
  return (
    <div className="absolute min-h-80 w-full bottom-0">
      <div className="relative w-full min-h-80">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="0% 100%"
          src={"/assets/home/bottom-cloud.png"}
          alt="irepair background"
        />
      </div>
    </div>
  );
};

export default BannerClouds;
