import { motion } from 'framer-motion';
import React, { FC } from 'react';

import './Container.css';

export const Container: FC = ({ children }) => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};
