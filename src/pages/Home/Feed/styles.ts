import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Details = styled.View`
  position: absolute;
  padding: 20px 10px;
  width: 65%;
  flex-direction: column;
  bottom: 0;
  z-index: 10;
`;

export const User = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  color: #fff;
`;

export const Tags = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  padding: 5px 0;
  color: #fff;
`;
export const MusicBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Music = styled.Text`
  font-size: 15px;
  padding: 5px 5px 5px 15px;
  flex-shrink: 1;
  color: #fff;
`;

export const Actions = styled.View`
  flex-direction: column;
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  bottom: 0;
  right: 10px;
  z-index: 10;
`;

export const BoxAction = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: column;
  padding: 10px 0;
`;

export const TextAction = styled.Text`
  color: #fff;
  padding: 5px 0;
`;
