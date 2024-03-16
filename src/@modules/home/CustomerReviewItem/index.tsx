import React, { FC } from "react";
import s from "./styles.module.css";

interface Props {
  review: string;
}

const CustomerReviewItem: FC<Props> = ({ review }) => {
  return (
    <div
      className={`${s.borderStyling} bg-white text-[#959BA6] flex items-center justify-center text-lg font-semibold`}
    >
      <p className="p-4">
        <span className="text-[#1363FF] font-bold">“{" "}</span>
        {review}
        <span className="text-[#1363FF] font-bold">{" "}”</span>
      </p>
    </div>
  );
};

export default CustomerReviewItem;
