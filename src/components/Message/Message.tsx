import React, { FC } from 'react';

import './Message.css';

type MessageProps = {
  children: string;
};

export const Message: FC<MessageProps> = ({ children }) => {
  if (typeof children !== 'string') {
    return null;
  }

  return <div className="message">{children}</div>;
};
