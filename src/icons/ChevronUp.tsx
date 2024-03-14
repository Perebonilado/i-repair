import React, { FC } from "react";

const ChevronUp: FC = () => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L5.26812 1.30918C5.38406 1.15459 5.61594 1.15459 5.73188 1.30918L10 7"
        stroke="url(#paint0_linear_115_590)"
        strokeWidth="0.720649"
      />
      <defs>
        <linearGradient
          id="paint0_linear_115_590"
          x1="1.84375"
          y1="1.31915"
          x2="6.41281"
          y2="8.28806"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.28" stopColor="#1363FF" />
          <stop offset="0.835" stopColor="#032D80" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ChevronUp;
