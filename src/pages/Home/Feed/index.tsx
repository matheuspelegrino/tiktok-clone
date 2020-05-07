import React from 'react';

import { Video } from 'expo-av';

interface Props {
  uri: string;
}
const Feed: React.FC<Props> = ({ uri }) => {
  return (
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
        position: 'absolute',
        zIndex: -5,
      }}
    />
  );
};

export default Feed;
