import React, { FC } from "react";
import Logo from "../Logo";
import Link from "next/link";

const LogoCompanyName: FC = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <Logo />
        <div className="text-[14px]">
          <h4 className="font-bold">iRepair</h4>
          <p className="font-semibold">Tech Solution</p>
        </div>
      </div>
    </Link>
  );
};

export default LogoCompanyName;
