import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const BannerHeaderTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, translateY: "50px" }}
      whileInView={{ opacity: 1, translateY: 0, transition: { duration: .8 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default BannerHeaderTransition;
