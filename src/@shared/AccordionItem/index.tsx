import React, { FC } from "react";
import ChevronUp from "@/icons/ChevronUp";
import cn from "classnames";

interface Props {
  id: number;
  body: string;
  title: string;
  isOpen: boolean;
  handleClick: (id: number) => void;
}

const AccordionItem: FC<Props> = ({ id, body, title, isOpen, handleClick }) => {
  const expandBoxStyling = cn(
    "transition-max-h duration-500 ease-in-out overflow-hidden",
    {
      "max-h-[1000px] ": isOpen,
      "max-h-0": !isOpen,
    }
  );

  const chevronContainerStyling = cn(
    "duration-300 transition-rotate ease-in-out",
    {
      "rotate-180": isOpen,
    }
  );

  return (
    <div className="border-b border-b-gray-300 last:border-b-0">
      <div
        onClick={() => {
          handleClick(id);
        }}
        className="flex items-center justify-between cursor-pointer p-4"
      >
        <p className="text-sm font-semibold">{title}</p>
        <div className={chevronContainerStyling}>
          <ChevronUp />
        </div>
      </div>
      <div className={expandBoxStyling}>
        <p className="p-4 pt-0">{body}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
