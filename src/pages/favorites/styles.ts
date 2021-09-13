import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { width } = Dimensions.get("screen");

export const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 1000px;
`;

export const ImageDeathStar = styled.Image`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 100px;
  right: -30px;
  z-index: 0;
`;

export const ImageRebelsAircraft = styled.Image`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 500px;
  left: -30px;
  z-index: 0;
`;

export const ViewAllFavorites = styled.View`
  width: ${width};
  margin-top: 50;
  border-color: white;
  z-index: 2;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ViewChar = styled.View`
  width: 42%;
  height: 240px;
  margin-bottom: 25px;
  opacity: 0.74;
  background-color: gray;
  border-radius: 12px;
  overflow: hidden;
  elevation: 5;
`;

export const TitleChar = styled.Text`
  font-family: SWF3;
  color: yellow;
  text-align: center;
  font-size: 16px;
  margin-vertical: 12px;
`;

export const ImageChar = styled.Image`
  height: 200px;
  width: 100%;
  resize-mode: cover;
`;
