import React, { FC, HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import GradientText from "@/@shared/GradientText";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "outlined";
  size?: "large" | "medium" | "small";
  title: string;
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
  fullWidth?: boolean;
  useGragientText?: boolean;
}

const Button: FC<Props> = ({
  variant = "primary",
  size = "medium",
  title,
  fullWidth = false,
  useGragientText = false,
  ...props
}) => {
  const rootClassName = cn(
    `${s.root}`,
    {
      [s.primary]: variant === "primary",
      [s.secondary]: variant === "secondary",
      [s.outlined]: variant === "outlined",
      [s.text]: variant === "text",
      [s.large]: size === "large",
      [s.medium]: size === "medium",
      [s.small]: size === "small",
      [s.fullWidth]: fullWidth,
    },
    props.className
  );

  return (
    <button {...props} className={rootClassName}>
      {props.starticon && props.starticon}
      {useGragientText ? <GradientText title={title} /> : title}
      {props.endicon && props.endicon}
    </button>
  );
};

export default Button;
