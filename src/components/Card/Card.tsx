import { motion } from 'framer-motion';
import React, { VFC } from 'react';
import Img from 'react-cool-img';
import { FiHeart } from 'react-icons/fi';

import { ImageData } from 'types';

import './Card.css';

type CardProps = {
  id: ImageData['id'];
  likes: ImageData['likes'];
  imageUrl: ImageData['url'];
  imageAlt: ImageData['alt_description'];
  onClick: (id: ImageData['id']) => void;
};

export const Card: VFC<CardProps> = ({ id, imageUrl, imageAlt, likes, onClick }) => {
  return (
    <motion.div
      className="card"
      onClick={() => onClick(id)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="overlay">
        <FiHeart className="like-icon" size={24} /> {likes}
      </div>
      <Img
        className="image"
        src={`${imageUrl}.jpg`}
        alt={imageAlt}
        style={{ backgroundColor: '#CCC' }}
      />
    </motion.div>
  );
};
