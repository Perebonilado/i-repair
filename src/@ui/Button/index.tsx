import React, { HTMLAttributes, forwardRef } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "large" | "medium" | "small";
  title: string;
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "primary",
      size = "medium",
      title,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const rootClassName = cn(
      `${s.root}`,
      {
        [s.primary]: variant === "primary",
        [s.secondary]: variant === "secondary",
        [s.text]: variant === "text",
        [s.large]: size === "large",
        [s.medium]: size === "medium",
        [s.small]: size === "small",
        [s.fullWidth]: fullWidth,
      },
      props.className
    );

    return (
      <button ref={ref} {...props} className={rootClassName}>
        {props.starticon && props.starticon}
        {title}
        {props.endicon && props.endicon}
      </button>
    );
  }
);

export default Button;
