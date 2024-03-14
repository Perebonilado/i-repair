import Button from "@/@ui/Button";
import React, { FC } from "react";
import cn from "classnames";
import { useRouter } from "next/router";

interface Props {
  isActive: boolean;
  link: string;
  title: string;
}

const BreadCrumbItem: FC<Props> = ({ isActive, link, title }) => {
  const router = useRouter();

  const activeStyling = cn({
    "!text-[#1363FF]": isActive,
  });

  return (
    <Button
      title={title}
      variant="text"
      className={activeStyling}
      role="link"
      onClick={() => router.push(link)}
    />
  );
};

export default BreadCrumbItem;
