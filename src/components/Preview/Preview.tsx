import React, { VFC } from 'react';

import { Image } from 'types';

import './Preview.css';

type PreviewProps = {
  imageUrl: Image['url'];
  imageAlt: Image['alt_description'];
  profileImageUrl: Image['user']['profile_image'];
  firstName: Image['user']['first_name'];
  lastName: Image['user']['last_name'];
  onClose: () => void;
};

export const Preview: VFC<PreviewProps> = ({
  imageUrl,
  imageAlt,
  profileImageUrl,
  firstName,
  lastName,
  onClose,
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="preview">
      <div className="preview-background" onClick={onClose} />
      <div className="preview-container">
        <img className="preview-image" src={`${imageUrl}.jpg`} alt={imageAlt} />
        <div className="user-details">
          {profileImageUrl.length ? (
            <img className="profile-image" src={`${profileImageUrl}.webp`} alt={fullName} />
          ) : (
            // profile picture placeholder
            <div className="profile-image profile-image-placeholder">
              {`${firstName.charAt(0)}${lastName.charAt(0)}`}
            </div>
          )}
          <div className="user-name">{fullName}</div>
        </div>
      </div>
    </div>
  );
};
