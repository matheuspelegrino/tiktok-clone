import React, { useState } from 'react';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import { Container, Search, Header, Input } from './styles';

const Discover: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Header>
        <Search>
          <AntDesign
            style={{
              paddingRight: 10,
            }}
            name="search1"
            size={18}
            color="#838383"
          />
          <Input
            placeholder="Search"
            value={search}
            returnKeyType="search"
            onChangeText={text => setSearch(text)}
          />
        </Search>
        <Ionicons name="md-qr-scanner" size={25} color="black" />
      </Header>
    </Container>
  );
};

export default Discover;
