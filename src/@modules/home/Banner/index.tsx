import GradientText from "@/@shared/GradientText";
import Button from "@/@ui/Button";
import ArrowDiagonalUpRightIcon from "@/icons/ArrowDiagonalUpRightIcon";
import React, { FC } from "react";
import s from './styles.module.css'

const Banner: FC = () => {
  return (
    <section className={`${s.bannerBg} min-h-[calc(100vh+70px)]  flex flex-col gap-32 text-center items-center sm:pt-40 max-sm:justify-center`}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">
          Restore your device with{" "}
          <GradientText title="iRepair" className="!inline" />
        </h1>
        <div className="bg-[#1363FF] h-[2px] w-[350px] mt-10"></div>
        <p className="text-xl mt-8 font-semibold w-full max-w-[450px]">
          Simply hand it to us and we’ll take care of the repair!
        </p>
      </div>
      <div>
        <Button
          title="Start fixing"
          size="large"
          endicon={<ArrowDiagonalUpRightIcon />}
          className="!px-20 !text-xl"
        />
      </div>
    </section>
  );
};

export default Banner;
