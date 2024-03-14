import React, { FC, useState } from "react";
import LogoCompanyName from "../LogoCompanyName";
import Container from "@/@ui/Container";
import Button from "@/@ui/Button";
import Hamburger from "../Hamburger";
import MobileNav from "../MobileNav";

const Navbar: FC = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  return (
    <>
      <div className="bg-[#EAF1FF] shadow-md fixed w-screen top-0 left-0 z-[1000]">
        <Container>
          <div className="h-20 flex">
            <div style={{ flex: 2 }} className="flex items-center">
              <LogoCompanyName />
            </div>
            <div
              style={{ flex: 4 }}
              className="flex items-center gap-9 justify-center max-md:hidden"
            >
              <Button
                title="Phone services"
                variant="text"
                className="!text-sm"
              />
              <Button
                title="Laptop services"
                variant="text"
                className="!text-sm"
              />
              <Button title="Our policy" variant="text" className="!text-sm" />
            </div>
            <div style={{ flex: 2 }} className="flex items-center justify-end">
              <a
                href="mailto:irepairtechsolution@gmail.com"
                className="max-md:hidden"
              >
                <Button
                  title="Contact us"
                  variant="outlined"
                  size="small"
                  className="!px-8"
                />
              </a>
              <Hamburger
                onClick={() => {
                  setIsMobileNav(!isMobileNav);
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      {isMobileNav && <MobileNav handleClose={() => setIsMobileNav(false)} />}
    </>
  );
};

export default Navbar;
