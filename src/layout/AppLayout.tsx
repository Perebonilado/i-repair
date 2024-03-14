import Footer from "@/@shared/Footer";
import Navbar from "@/@shared/Navbar";
import React, { FC, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
