import GradientText from "@/@shared/GradientText";
import Button from "@/@ui/Button";
import ArrowDiagonalUpRightIcon from "@/icons/ArrowDiagonalUpRightIcon";
import React, { FC } from "react";
import s from "./styles.module.css";
import Container from "@/@ui/Container";

const Banner: FC = () => {
  return (
    <section
      className={`${s.bannerBg} min-h-[calc(100vh+70px)] flex flex-col items-center max-sm:justify-center`}
    >
      <Container>
        <div className="flex flex-col gap-32 text-center items-center sm:pt-40 max-sm:justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold max-md:text-3xl max-md:leading-relaxed">
              Restore your device with{" "}
              <GradientText title="iRepair" className="!inline" />
            </h1>
            <div className="bg-[#1363FF] h-[2px] w-[350px] mt-10 max-md:hidden"></div>
            <p className="text-xl mt-8 font-semibold w-full max-w-[450px] max-md:text-lg">
              Simply hand it to us and we’ll take care of the repair!
            </p>
          </div>
          <div className="border w-full">
            <Button
              title="Start fixing"
              size="large"
              endicon={<ArrowDiagonalUpRightIcon />}
              className="mx-auto !px-20 !text-xl max-sm:!w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
