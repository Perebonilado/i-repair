import GradientText from "@/@shared/GradientText";
import Container from "@/@ui/Container";
import Image from "next/image";
import React, { FC } from "react";

const FullServiceRepair: FC = () => {
  return (
    <section className="bg-[#EAF1FF] pb-32">
      <Container>
        <p className="text-[#959BA6] text-center text-xl">Trusted tech services</p>
        <div className="mt-20 flex gap-6 max-md:flex-col-reverse max-md:items-center">
          <div style={{ flex: 1 }}>
            <GradientText
              title="Full-service repair"
              className="text-4xl font-bold max-md:text-2xl"
            />
            <p className="mt-8 text-3xl font-semibold max-md:text-xl">
              We provide comprehensive repair services for a wide range of
              mobile devices and laptops.
            </p>
            <p className="mt-8 text-xl max-md:text-base">
              Whether you're using an Android smartphone, an iOS device like an
              iPhone or iPad, or other operating systems, our expert technicians
              are here to help.
            </p>
          </div>
          <div style={{ flex: 1 }} className="relative w-full min-h-64 max-md:!min-h-72">
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
