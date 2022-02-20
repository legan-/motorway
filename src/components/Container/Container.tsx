import { motion } from 'framer-motion';
import React, { FC } from 'react';

import './Container.css';

export const Container: FC = ({ children }) => {
  return (
    <motion.div
      className="container"
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
