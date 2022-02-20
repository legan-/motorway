import React, { VFC } from 'react';

import { Image } from 'types';

import './Card.css';

type CardProps = {
  details: Image;
  onClick: (id: Image['id']) => void;
};

export const Card: VFC<CardProps> = ({
  details: {
    id,
    url: imageUrl,
    alt_description: imageAlt,
    likes,
    // user: { profile_image: profileImageUrl, name, first_name: firstName, last_name: lastName },
  },
  onClick,
}) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <div className="card-overlay">🤍 {likes}</div>
      <img className="image" src={`${imageUrl}.jpg`} alt={imageAlt} />
    </div>
  );
};
