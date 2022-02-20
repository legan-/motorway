import React, { FC } from 'react';

import './Grid.css';

export const Grid: FC = ({ children }) => {
  return <div className="grid">{children}</div>;
};
