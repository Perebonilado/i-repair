import React, { FC, useEffect } from "react";
import { mobileScreenSizePx } from "../../constants";
import Button from "@/@ui/Button";
import cn from "classnames";
import { useRouter } from "next/router";
import { NavLinks } from "@/navigation/NavLinks.enum";

interface Props {
  handleClose: () => void;
  isSideNavOpen: boolean;
}

const MobileNav: FC<Props> = ({ handleClose, isSideNavOpen }) => {
  const router = useRouter();
  const handleCloseOnResize = () => {
    if (window.innerWidth <= mobileScreenSizePx) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseOnResize);

    return () => window.removeEventListener("resize", handleCloseOnResize);
  }, []);

  const rootStyling = cn(
    "bg-white transition-all w-screen z-[2500] fixed top-20 h-[calc(100vh-80px)]",
    {
      "translate-x-[100%]": !isSideNavOpen,
    }
  );

  return (
    <div className={rootStyling}>
      <div className="flex flex-col items-center mt-32 gap-6 pb-10">
        <Button
          title="Phone services"
          variant="text"
          className="!text-lg"
          onClick={() => {
            router.push(
              NavLinks.HOME,
              { query: { id: "phone-services" } },
              { shallow: true }
            );
            handleClose();
          }}
        />
        <Button
          title="Laptop services"
          variant="text"
          className="!text-lg"
          onClick={() => {
            router.push(
              NavLinks.HOME,
              { query: { id: "laptop-services" } },
              { shallow: true }
            );
            handleClose();
          }}
        />
        <Button
          title="Our policy"
          variant="text"
          className="!text-lg"
          onClick={() => router.push(NavLinks.POLICY)}
        />

        <p className="text-[#1363FF] mt-20">For pricing and inquiries</p>

        <a
          href="https://docs.google.com/forms/d/1ZNv-ZDPI6VX4jWFUofLp_SEj712Atd63xioj6WRJ7Kk/edit?ts=65f9b5a5"
          target="_blank"
        >
          <Button title="Contact us" size="large" />
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
