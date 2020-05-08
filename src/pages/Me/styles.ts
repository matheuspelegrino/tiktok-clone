import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Feather } from '@expo/vector-icons';
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

export const Content = styled.View`
  padding: 10px;
  align-items: center;
`;

export const Avatar = styled.Image`
  align-self: center;
  width: 120px;
  height: 140px;
`;

export const Username = styled.Text`
  font-size: 18px;
  padding: 10px;
`;

export const Stats = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const StatsColumn = styled.View`
  align-items: center;
`;

export const StatsNumber = styled.Text`
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
`;

export const Separator = styled.Text`
  color: #000;
  font-size: 20px;
  opacity: 0.1;
  padding: 0 10px;
`;

export const StatsText = styled.Text`
  font-size: 12px;
  color: #8f8f91;
`;

export const ProfileColumn = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

export const ProfileText = styled.Text`
  font-weight: bold;
`;

export const ProfileEdit = styled.TouchableOpacity.attrs({
  activityOpacity: 1,
})`
  border-width: 1.5px;
  padding: 10px 30px;
  border-color: #e6e6e6;
  border-radius: 2px;
  font-size: 12px;
`;

export const Bookmark = styled(Feather)`
  border-width: 1.5px;
  padding: 5px;
  margin-left: 5px;
  border-color: #e6e6e6;
  border-radius: 2px;
`;
