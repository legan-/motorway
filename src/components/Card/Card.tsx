import React, { VFC } from 'react';

import { Image } from 'types';

import './Card.css';

type CardProps = {
  details: Image;
};

export const Card: VFC<CardProps> = ({ details }) => {
  return <div className="card">{details.id}</div>;
};

//         <img src={`${img.url}.jpg`} alt="" />
//         <img src={`${img.user.profile_image}.webp`} alt="" />
