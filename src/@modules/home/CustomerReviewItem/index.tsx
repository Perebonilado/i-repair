import React, { FC } from "react";
import s from "./styles.module.css";

interface Props {
  review: string;
  customerName: string;
}

const CustomerReviewItem: FC<Props> = ({ review, customerName }) => {
  return (
    <div
      className={`${s.borderStyling} bg-white pt-10 text-[#959BA6] flex flex-col gap-3 items-center text-lg font-semibold max-md:text-bae`}
    >
      <p className="p-4 flex items-start" style={{ flex: 4 }}>
        <span>
          <span className="text-[#1363FF] font-bold">“ </span>
          {review}
          <span className="text-[#1363FF] font-bold"> ”</span>
        </span>
      </p>

      <p className="font-bold text-[#1363FF]" style={{ flex: 2 }}>
        {customerName}
      </p>
    </div>
  );
};

export default CustomerReviewItem;
