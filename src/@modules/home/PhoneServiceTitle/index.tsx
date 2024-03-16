import React, { FC } from "react";

interface Props {
  titleOne: string;
  titleTwo: string;
}

const PhoneServiceTitle: FC<Props> = ({ titleOne, titleTwo }) => {
  return (
    <div>
      <div className="h-[4px] w-24 bg-[#1363FF] mb-5"></div>
      <p className="text-2xl font-bold">
        <span>
          {titleOne} {""}
        </span>
        <span className="text-[#959BA6]">{titleTwo}</span>
      </p>
    </div>
  );
};

export default PhoneServiceTitle;
