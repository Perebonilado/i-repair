import Container from "@/@ui/Container";
import AnimateDownTransition from "@/transitions/AnimateDown";
import AnimateUpTransition from "@/transitions/AnimateUp";
import Image from "next/image";
import React, { FC } from "react";

const WhyChooseUs: FC = () => {
  const tags = [
    "Quick Repairs",
    "Low Pricing",
    "Data Protection",
    "Expert Care",
    "Best Quality",
  ];

  return (
    <section className="text-white bg-[#1363FF] py-14 pb-24">
      <Container className={"relative"}>
        <div className="mx-auto w-full max-w-[530px] py-10 text-center relative min-h-[430px] max-sm:min-h-[630px]">
          <AnimateDownTransition>
            <h2 className="text-4xl font-bold max-md:text-2xl">
              Why people choose us
            </h2>
            <p className="text-lg mt-10 max-md:text-base">
              Your device holds significant value to you, and restoring it to
              peak performance promptly and reliably brings both you and us
              immense satisfaction.
            </p>
          </AnimateDownTransition>
          <AnimateUpTransition>
            <div className="mt-10 flex flex-wrap max-sm:flex-col justify-center gap-6">
              {tags.map((tag, idx) => {
                return (
                  <p
                    className="text-xl font-semibold max-md:text-base"
                    key={idx}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </AnimateUpTransition>
        </div>

        <div className="absolute bottom-0 left-0">
          <div
            style={{ flex: 1 }}
            className="relative w-[320px] min-h-[450px] top-[100px] max-md:w-[250px]"
          >
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="50% 100%"
              src={"/assets/home/why-us.png"}
              alt="choose iRepair"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
