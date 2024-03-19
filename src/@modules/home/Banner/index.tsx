import GradientText from "@/@shared/GradientText";
import Button from "@/@ui/Button";
import ArrowDiagonalUpRightIcon from "@/icons/ArrowDiagonalUpRightIcon";
import React, { FC } from "react";
import s from "./styles.module.css";
import Container from "@/@ui/Container";
import BannerHeaderTransition from "../Transitions/BannerHeaderTransition";
import BannerSubHeaderTransition from "../Transitions/BannerSubHeaderTransition";
import HeaderDivisionTransition from "../Transitions/HeaderDivisionTransition";
import Image from "next/image";
import BannerTextBg from "../BannerTextBg";
import BannerClouds from "../BannerClouds";

const Banner: FC = () => {
  return (
    <section
      className={`${s.bannerBg} min-h-[calc(100vh+120px)] flex flex-col items-center relative`}
    >
      <BannerClouds />

      <Container>
        <div className="flex flex-col gap-32 text-center items-center max-sm:justify-center">
          <div className="flex flex-col items-center relative z-10 justify-center mt-40">
            <BannerHeaderTransition>
              <h1 className="text-5xl font-bold max-md:text-3xl max-md:leading-relaxed">
                Restore your device with{" "}
                <GradientText title="iRepair" className="!inline" />
              </h1>
            </BannerHeaderTransition>
            <HeaderDivisionTransition>
              <div className="bg-[#1363FF] h-[1px] w-[300px] mt-10 max-md:hidden"></div>
            </HeaderDivisionTransition>
            <BannerSubHeaderTransition>
              <p className="text-xl mt-8 w-full max-w-[450px] max-md:text-lg">
                Simply hand it to us and we’ll take care of the repair!
              </p>
            </BannerSubHeaderTransition>
            <BannerTextBg />
          </div>
          <div className="w-full">
            <Button
              title="Start fixing"
              size="large"
              endicon={<ArrowDiagonalUpRightIcon />}
              className="mx-auto md:!px-20 md:!text-xl max-sm:!w-full mt-10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
