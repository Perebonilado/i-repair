import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href={'/'}>
      <div className="relative h-14 w-14">
        {" "}
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="50% 50%"
          style={{
            cursor: "pointer",
          }}
          src={"/assets/@shared/logo.png"}
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
