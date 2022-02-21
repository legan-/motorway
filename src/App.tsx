import { Images } from 'Images';
import React, { useState } from 'react';

import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { ViewVariant } from 'types';

export const App = () => {
  const [variant, setVariant] = useState<ViewVariant>('images');

  return (
    <Container>
      <Header currentVariant={variant} onChange={variant => setVariant(variant)} />
      {variant === 'images' && <Images />}
    </Container>
  );
};
