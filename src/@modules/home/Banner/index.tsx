import GradientText from "@/@shared/GradientText";
import Button from "@/@ui/Button";
import ArrowDiagonalUpRightIcon from "@/icons/ArrowDiagonalUpRightIcon";
import React, { FC } from "react";
import s from './styles.module.css'

const Banner: FC = () => {
  return (
    <section className={`${s.bannerBg} min-h-screen flex flex-col gap-32 text-center items-center pt-24`}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Restore your device with{" "}
          <GradientText title="iRepair" className="!inline" />
        </h1>
        <div className="bg-[#1363FF] h-[1px] w-[200px] mt-6"></div>
        <p className="text-lg mt-8 font-semibold w-full max-w-[400px]">
          Simply hand it to us and we’ll take care of the repair!
        </p>
      </div>
      <div>
        <Button
          title="Start fixing"
          size="large"
          endicon={<ArrowDiagonalUpRightIcon />}
        />
      </div>
    </section>
  );
};

export default Banner;
