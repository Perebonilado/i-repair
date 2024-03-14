import React, { FC } from "react";

import Head from "next/head";

interface Props {
  title?: string;
}

const AppHead: FC<Props> = ({ title }) => {
  return <Head>iRepair {title && `| ${title}`}</Head>;
};

export default AppHead;
