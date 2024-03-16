import Container from "@/@ui/Container";
import FacebookIcon from "@/icons/FacebookIcon";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="py-16 text-base max-md:!text-sm bg-[#1363FF] text-[#fff]">
      <Container>
        <div className="flex justify-between max-sm:flex-col gap-5 max-sm:gap-14">
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-lg font-bold">Our info:</h3>
            <a href="mailto:irepairtechsolution@gmail.com">
              irepairtechsolution@gmail.com
            </a>
            <div className="py-[5px] border-y border-y-white">
              <p>3351 Sir Thomas Dr., Silver Spring MD 20904.</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 max-md:text-sm">Follow us on:</h3>
            <a className="cursor-pointer">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
