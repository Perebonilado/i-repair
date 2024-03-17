import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const HeaderDivisionTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.8, delay: 1 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default HeaderDivisionTransition;
