import GradientText from "@/@shared/GradientText";
import Button from "@/@ui/Button";
import ArrowDiagonalUpRightIcon from "@/icons/ArrowDiagonalUpRightIcon";
import React, { FC } from "react";
import s from './styles.module.css'

const Banner: FC = () => {
  return (
    <section className={`${s.bannerBg} max-sm:min-h-[100vh] sm:min-h-[110vh] flex flex-col gap-32 text-center items-center sm:pt-24 max-sm:justify-center`}>
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
