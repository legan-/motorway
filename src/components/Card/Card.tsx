import React, { VFC } from 'react';
import { FiHeart } from 'react-icons/fi';

import { Image } from 'types';

import './Card.css';

type CardProps = {
  id: Image['id'];
  likes: Image['likes'];
  imageUrl: Image['url'];
  imageAlt: Image['alt_description'];
  onClick: (id: Image['id']) => void;
};

export const Card: VFC<CardProps> = ({ id, imageUrl, imageAlt, likes, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <div className="overlay">
        <FiHeart className="like-icon" size={24} /> {likes}
      </div>
      <img className="image" src={`${imageUrl}.jpg`} alt={imageAlt} />
    </div>
  );
};
