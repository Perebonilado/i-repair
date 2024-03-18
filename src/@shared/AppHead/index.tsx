import React, { FC } from "react";

import Head from "next/head";

interface Props {
  title?: string;
}

const AppHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>iRepair {title && `| ${title}`}</title>
      <meta
        name="description"
        content="Restore your device with iRepair. We provide comprehensive repair services for a wide range of mobile devices and laptops."
      />
      <meta
        name="keywords"
        content="phone repair, phone repair shops in silver spring  maryland, laptop repair in silver spring maryland, laptop repair, fix my phone, fix my laptop, phone repairers, laptop repairer, fix my mac, fix my pc, iphone repair, phone fix, iphone fix, samsung repair, my iphone has issues, my phone is bad"
      />
      <meta property="og:title" content="iRepair: Restore your device with iRepair" />
      <meta
        property="og:description"
        content="We provide comprehensive repair services for a wide range of mobile devices and laptops."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dt0wfaxft/image/upload/v1710768482/logo_p4dnrn.png"
      />
    </Head>
  );
};

export default AppHead;
