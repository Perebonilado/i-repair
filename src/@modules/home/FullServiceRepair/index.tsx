import GradientText from "@/@shared/GradientText";
import Container from "@/@ui/Container";
import Image from "next/image";
import React, { FC } from "react";

const FullServiceRepair: FC = () => {
  return (
    <section className="bg-[#EAF1FF] pb-24">
      <Container>
        <p className="text-[#959BA6] text-center">Trusted tech services</p>
        <div className="mt-20 flex gap-6 max-md:flex-col-reverse max-md:items-center">
          <div style={{ flex: 1 }}>
            <GradientText
              title="Full-service repair"
              className="text-3xl font-bold"
            />
            <p className="mt-8 text-sm font-semibold">
              We provide comprehensive repair services for a wide range of
              mobile devices and laptops.
            </p>
            <p className="mt-8 text-sm">
              Whether you're using an Android smartphone, an iOS device like an
              iPhone or iPad, or other operating systems, our expert technicians
              are here to help.
            </p>
          </div>
          <div style={{ flex: 1 }} className="relative w-full max-md:!min-h-64">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
              src={"/assets/home/full-service-repair.png"}
              alt="we offer full service repair"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FullServiceRepair;
