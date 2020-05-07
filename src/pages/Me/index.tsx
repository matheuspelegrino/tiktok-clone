import React from 'react';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { Container, Title, Header } from './styles';

const Me: React.FC = () => {
  return (
    <Container>
      <Header>
        <AntDesign
          style={{ position: 'absolute', left: 10, top: 10 }}
          name="adduser"
          size={24}
          color="black"
        />
        <Title>Matheus Castro</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <FontAwesome
          style={{ position: 'absolute', right: 13, top: 12 }}
          name="ellipsis-v"
          size={24}
          color="black"
        />
      </Header>
    </Container>
  );
};

export default Me;
