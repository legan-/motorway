import React, { useEffect, useState } from 'react';

import { Card } from 'components/Card/Card';
import { Container } from 'components/Container/Container';
import { Grid } from 'components/Grid/Grid';
import { Message } from 'components/Message/Message';
import { Preview } from 'components/Preview/Preview';
import { Image, Images } from 'types';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<Images>({});
  const [currentImageId, setCurrentImageId] = useState<Image['id'] | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetch('images?limit=10')
      .then(res => res.json())
      .then((data: Image[]) => {
        console.log('Success:', data);

        const imageObject = data.reduce((acc, image) => {
          return {
            ...acc,
            [image.id]: image,
          };
        }, {} as Images);

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
    <Container>
      {isLoading ? (
        <Message>Loading...</Message>
      ) : images ? (
        <Grid>
          {Object.values(images).map(image => (
            <Card key={image.id} details={image} onClick={id => setCurrentImageId(id)} />
          ))}
        </Grid>
      ) : (
        <Message>No images found</Message>
      )}
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
    </Container>
  );
};
