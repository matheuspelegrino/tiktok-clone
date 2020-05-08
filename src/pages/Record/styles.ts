import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
`;

export const RecordButton = styled.TouchableOpacity`
  padding: 10px;
  width: 80px;
  height: 80px;
  border-width: 6px;
  border-color: #8c1227;
  border-radius: 40px;
  align-self: center;
  bottom: 5%;
  position: absolute;
  background-color: #fe2b54;
`;
