import React, { VFC } from 'react';

import { Image } from 'types';

import './Card.css';

type CardProps = {
  details: Image;
};

export const Card: VFC<CardProps> = ({
  details: {
    url: imageUrl,
    alt_description: imageAlt,
    user: { profile_image: profileImageUrl, name, first_name: firstName, last_name: lastName },
  },
}) => {
  return (
    <div className="card">
      <img className="image" src={`${imageUrl}.jpg`} alt={imageAlt} />
      <div className="user-details">
        {profileImageUrl.length ? (
          <img className="profile-image" src={`${profileImageUrl}.webp`} alt={name} />
        ) : (
          // profile picture placeholder
          <div className="profile-image profile-image-placeholder">
            {`${firstName.charAt(0)}${lastName.charAt(0)}`}
          </div>
        )}
        <div className="username">{name}</div>
      </div>
    </div>
  );
};
