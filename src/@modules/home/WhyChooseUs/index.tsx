import Container from "@/@ui/Container";
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
    <section className="text-white bg-[#1363FF] py-14">
      <Container>
        <div className="mx-auto w-full max-w-[450px] py-10 text-center relative min-h-[430px] max-sm:min-h-[630px]">
          <h2 className="text-3xl font-bold">Why people choose us</h2>
          <p className="text-sm mt-10">
            Your device holds significant value to you, and restoring it to peak
            performance promptly and reliably brings both you and us immense
            satisfaction.
          </p>
          <div className="mt-10 flex flex-wrap max-sm:flex-col justify-center gap-6">
            {tags.map((tag, idx) => {
              return (
                <p className="text-base font-semibold" key={idx}>
                  {tag}
                </p>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 sm:-translate-x-[60%] max-sm:-translate-x-3">
            <div style={{ flex: 1 }} className="relative w-[250px] min-h-64">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                src={"/assets/home/why-us.png"}
                alt="choose iRepair"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
