import styled from "styled-components/native";

export const CharacterButton = styled.TouchableOpacity`
  flex: 1;
  height: 200px;
  width: 100%;
  flex-direction: row;
  border-radius: 10px;
`;

export const ImageCharacter = styled.Image`
  width: 120px;
  height: 100%;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
`;

export const ViewCharInformations = styled.View`
  margin-left: 10px;
  justify-content: center;
  flex: 1;
`;

export const TextTitle = styled.Text`
  color: yellow;
  font-family: SWF3;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const InformationsText = styled.Text`
  font-family: SWF2;
  color: yellow;
  letter-spacing: 1.2px;
`;
