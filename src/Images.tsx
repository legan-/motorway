import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Card } from 'components/Card/Card';
import { Grid } from 'components/Grid/Grid';
import { Message } from 'components/Message/Message';
import { Preview } from 'components/Preview/Preview';
import { ImageData, ImagesObject } from 'types';

export const Images = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImagesObject>({});
  const [currentImageId, setCurrentImageId] = useState<ImageData['id'] | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetch('images?limit=10')
      .then(res => res.json())
      .then((data: ImageData[]) => {
        console.log('Success:', data);

        const imageObject = data.reduce((acc, image) => {
          return {
            ...acc,
            [image.id]: image,
          };
        }, {} as ImagesObject);

        setImages(imageObject);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="title">Images</h1>
      {isLoading ? (
        <Message>Loading...</Message>
      ) : images ? (
        <Grid>
          {Object.values(images).map(({ id, url, likes, alt_description: alt }) => (
            <Card
              key={id}
              id={id}
              imageAlt={alt}
              imageUrl={url}
              likes={likes}
              onClick={id => setCurrentImageId(id)}
            />
          ))}
        </Grid>
      ) : (
        <Message>No images found</Message>
      )}
      <AnimatePresence>
        {currentImageId && (
          <Preview
            imageUrl={images[currentImageId].url}
            imageAlt={images[currentImageId].alt_description}
            profileImageUrl={images[currentImageId].user.profile_image}
            firstName={images[currentImageId].user.first_name}
            lastName={images[currentImageId].user.last_name}
            onClose={() => setCurrentImageId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
