import React, { useState } from 'react';

import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { ViewVariant } from 'types';

import { Form } from './Form';
import { Images } from './Images';

export const App = () => {
  const [variant, setVariant] = useState<ViewVariant>('images');

  return (
    <Container>
      <Header currentVariant={variant} onChange={variant => setVariant(variant)} />
      {variant === 'images' && <Images />}
      {variant === 'form' && <Form />}
    </Container>
  );
};
