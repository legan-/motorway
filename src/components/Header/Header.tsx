import { motion } from 'framer-motion';
import React, { VFC } from 'react';

import { ViewVariant } from 'types';

import './Header.css';

type HeaderProps = {
  currentVariant: ViewVariant;
  onChange: (variant: ViewVariant) => void;
};

export const Header: VFC<HeaderProps> = ({ currentVariant, onChange }) => {
  return (
    <motion.div className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <button
        className={`button ${currentVariant === 'images' ? 'active' : ''}`}
        onClick={() => onChange('images')}
      >
        Images
      </button>
      <button
        className={`button ${currentVariant === 'form' ? 'active' : ''}`}
        onClick={() => onChange('form')}
      >
        Form
      </button>
    </motion.div>
  );
};
