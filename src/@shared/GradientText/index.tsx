import React, { FC } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props {
  title: string;
  className?: string;
}

const GradientText: FC<Props> = ({ title, className }) => {
  const rootClassName = cn(`${s.textStyling}`, className);
  return <p className={rootClassName}>{title}</p>;
};

export default GradientText;
