import React, { FC, useEffect } from "react";
import { mobileScreenSizePx } from "../../constants";
import Button from "@/@ui/Button";

interface Props {
  handleClose: () => void;
}

const MobileNav: FC<Props> = ({ handleClose }) => {
  const handleCloseOnResize = () => {
    if (window.innerWidth <= mobileScreenSizePx) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseOnResize);

    return () => window.removeEventListener("resize", handleCloseOnResize);
  }, []);

  return (
    <div className="bg-white w-screen z-[900] fixed top-20">
      <div className="flex flex-col h-screen items-center mt-32 gap-6">
        <Button title="Phone services" variant="text" className="!text-lg" />
        <Button title="Laptop services" variant="text" className="!text-lg" />
        <Button title="Our policy" variant="text" className="!text-lg" />

        <p className="text-[#1363FF] mt-20">For pricing and inquiries</p>
        <Button title="Contact us" size="large" />
        <div className="w-full h-[1px] bg-slate-300 mt-8"></div>
      </div>
    </div>
  );
};

export default MobileNav;
