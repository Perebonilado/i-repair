import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full max-w-screen-xl mx-auto px-10 max-sm:px-4">{children}</div>;
};

export default Container;