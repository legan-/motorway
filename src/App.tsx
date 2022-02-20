import React, { useEffect, useState } from 'react';

import { Card } from 'components/Card/Card';
import { Container } from 'components/Container/Container';
import { Grid } from 'components/Grid/Grid';
import { Message } from 'components/Message/Message';
import { Image } from 'types';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<Image[]>();

  useEffect(() => {
    setIsLoading(true);

    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
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
          {images.map(image => (
            <Card key={image.id} details={image} />
          ))}
        </Grid>
      ) : (
        <Message>No images found</Message>
      )}
    </Container>
  );
};
