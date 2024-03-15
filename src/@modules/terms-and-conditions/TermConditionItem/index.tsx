import React, { FC } from "react";

interface Props {
  index: number;
  title: string;
  body: string;
}

const TermConditionItem: FC<Props> = ({ index, title, body }) => {
  return (
    <div>
      <p className="text-base">
        <span className="font-bold">
          {index + 1}. {title}: {" "}
        </span>
        {body}
      </p>
    </div>
  );
};

export default TermConditionItem;
