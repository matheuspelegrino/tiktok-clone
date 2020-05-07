import React from 'react';

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';

import {
  Container,
  Details,
  Actions,
  User,
  Tags,
  Music,
  MusicBox,
  BoxAction,
  TextAction,
} from './styles';

interface Props {
  uri: string;
}
const Feed: React.FC<Props> = ({ uri }) => {
  return (
    <>
      <Container>
        <Video
          source={{ uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Container>
      <Details>
        <User>@matheuscastroweb</User>
        <Tags>
          #reactnative #tiktok #git #development #github #clone #react
        </Tags>
        <MusicBox>
          <FontAwesome name="music" size={15} color="#f5f5f5" />
          <Music>The Chainsmokers - Closer (Lyric) ft. Halsey</Music>
        </MusicBox>
      </Details>
      <Actions>
        <BoxAction>
          <AntDesign
            style={{ alignSelf: 'center' }}
            name="heart"
            size={35}
            color="#fff"
          />
          <TextAction>158,6K</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome
            style={{ alignSelf: 'center' }}
            name="commenting"
            size={35}
            color="#fff"
          />
          <TextAction>6141</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome
            style={{ alignSelf: 'center' }}
            name="whatsapp"
            size={35}
            color="#06d755"
          />
          <TextAction>Share</TextAction>
        </BoxAction>
      </Actions>
    </>
  );
};

export default Feed;
