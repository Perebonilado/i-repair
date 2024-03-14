import React, { FC } from "react";
import LogoCompanyName from "../LogoCompanyName";
import Container from "@/@ui/Container";
import Button from "@/@ui/Button";

const Navbar: FC = () => {
  return (
    <div className="bg-[#EAF1FF] shadow-md">
      <Container>
        <div className="py-4 flex">
          <div style={{ flex: 1 }}>
            <LogoCompanyName />
          </div>
          <div
            style={{ flex: 4 }}
            className="flex items-center gap-9 justify-center"
          >
            <Button title="Phone services" variant="text" />
            <Button title="Laptop services" variant="text" />
            <Button title="Our policy" variant="text" />
          </div>
          <div style={{ flex: 1 }} className="flex items-center justify-end">
            <a href="mailto:irepairtechsolution@gmail.com"></a>
            <Button title="Contact us" variant="outlined" size="medium" className="!px-8"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
