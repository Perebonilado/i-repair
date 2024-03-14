import React, { FC } from "react";
import Logo from "../Logo";

const LogoCompanyName: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Logo />
      <div className="text-[14px]">
        <h4 className="font-bold">iRepair</h4>
        <p className="font-semibold">Tech Solution</p>
      </div>
    </div>
  );
};

export default LogoCompanyName;
