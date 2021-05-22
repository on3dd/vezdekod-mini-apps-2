import React from 'react';
import styled from 'styled-components';

import { GlobalStyles } from './utils/globalStyles';
import { AboutUs } from './components/AboutUs';

const Container = styled.main``;

export const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />

      <AboutUs />
    </Container>
  );
};
