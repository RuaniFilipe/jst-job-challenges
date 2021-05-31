import React from 'react';
import Content from '../Content';
import Dropdown from '../Dropdown';
import Header from '../Header';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Dropdown />
      <Content />
    </Container>
  );
}

export default Layout;