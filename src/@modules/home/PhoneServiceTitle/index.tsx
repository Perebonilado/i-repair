import React, { FC } from "react";

interface Props {
  titleOne: string;
  titleTwo: string;
}

const PhoneServiceTitle: FC<Props> = ({ titleOne, titleTwo }) => {
  return (
    <div>
      <div className="h-[4px] w-16 bg-[#1363FF] mb-2"></div>
      <p className="text-lg font-bolf">
        <span>
          {titleOne} {""}
        </span>
        <span className="text-[#959BA6]">{titleTwo}</span>
      </p>
    </div>
  );
};

export default PhoneServiceTitle;
