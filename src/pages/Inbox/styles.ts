import { getStatusBarHeight } from 'react-native-status-bar-height';

import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  paddingTop: getStatusBarHeight(),
})`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-bottom-color: #dadada;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
