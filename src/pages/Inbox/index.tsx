import React from 'react';

import { Feather, MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Header } from './styles';

const Inbox: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>All activity</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <Feather
          style={{ position: 'absolute', right: 10, top: 10 }}
          name="send"
          size={24}
          color="black"
        />
      </Header>
    </Container>
  );
};

export default Inbox;
