import React, { FC } from "react";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <div className="relative h-10 w-10">
      {" "}
      <Image
        layout="fill"
        objectFit="contain"
        objectPosition="-50% 50%"
        style={{
          cursor: "pointer",
        }}
        src={"/assets/@shared/logo.png"}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
