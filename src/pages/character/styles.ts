import styled from 'styled-components/native'


export const TextDescription = styled.Text`
  font-size: 20px;
  color: yellow;
  font-family: SWF3;
  text-transform: uppercase;
`;

export const TouchableGoBack = styled.TouchableOpacity`
  position: absolute;
  right: 50px;
  top: 50px;
  z-index: 10;
`;

export const TextGoBack = styled.Text`
  font-family: SWF3;
  font-size: 20px;
  z-index: 10;
  elevation: 2;
  color: yellow;
`;

export const ImageBgPlanet = styled.ImageBackground`
  height: 900px;
`;

export const MainScrollView = styled.ScrollView`
  flex: 1;
  background-color: transparent;
  border-width: 1px;
`;

export const TouchableFavorite = styled.TouchableOpacity`
  position: absolute;
  right: 40px;
  top: 50px;
  width: 50px;
  height: 60px;
  z-index: 3;
`;

export const TitleTextName = styled.Text`
  elevation: 2;
  position: absolute;
  font-family: SWF3;
  color: yellow;
  font-size: 40px;
  text-shadow: 1px 1px 2px black;
  bottom: 50px;
  width: 100%;
  text-align: center;
`;

export const ImageCharacter = styled.Image`
  overflow: hidden;
  align-self: center;
  border-radius: 15px;
  opacity: 0.8;
  margin-top: 10px;
`;

export const ViewWrapperInfo = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;

export const ViewImage = styled.View`
  height: 320px;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 40px;
`;