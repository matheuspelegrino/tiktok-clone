import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-top: 5%;
`;
export const Text = styled.Text`
  color: #fff;
  font-size: ${(props: Props) => (props.active ? '20px' : '18px')};
  padding: 5px;
  font-weight: bold;
  opacity: ${(props: Props) => (props.active ? '1' : '0.5')};
`;

export const Tab = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const Feed = styled.View`
  flex: 1;
  z-index: -1;
  position: absolute;
`;
