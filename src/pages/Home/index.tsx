import React, { useState } from 'react';

import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Text, Tab } from './styles';

const Home: React.FC = () => {
  const [tab, setTab] = useState(1);
  return (
    <Container>
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 150,
        }}
      />
      <Header>
        <Tab onPress={() => setTab(1)}>
          <Text active={tab === 1}>Seguindo</Text>
        </Tab>

        <Tab onPress={() => setTab(2)}>
          <Text active={tab === 2}>Para você</Text>
        </Tab>
      </Header>
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -5,
        }}
      />
    </Container>
  );
};

export default Home;
