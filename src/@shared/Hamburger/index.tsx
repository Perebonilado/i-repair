import React, { HTMLAttributes, forwardRef } from "react";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isSideNavOpen: boolean;
}

const Hamburger = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const topHamStyling = cn("w-full h-[2px] bg-[#000] transition-all", {
    "translate-y-2 rotate-45": props.isSideNavOpen,
  });
  const bottomHamStyling = cn("w-full h-[2px] bg-[#000] transition-all", {
    "-rotate-45": props.isSideNavOpen,
  });
  return (
    <div
      ref={ref}
      className="w-[32px] h-[10px] flex-col justify-between cursor-pointer items-center hidden max-md:!flex"
      {...props}
    >
      <div className={topHamStyling}></div>
      <div className={bottomHamStyling}></div>
    </div>
  );
});

export default Hamburger;
