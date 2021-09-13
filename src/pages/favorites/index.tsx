import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import {
  ImageBg,
  ImageChar,
  ImageDeathStar,
  ImageRebelsAircraft,
  TitleChar,
  ViewAllFavorites,
  ViewChar,
} from "./styles";

const favorites: React.FC = () => {
  const favorites = useSelector((state: any) => state.characters.favorites);
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBg source={require("../../constants/images/starwarsbg.jpg")}>
        <ImageDeathStar
          source={require("../../constants/images/deathstar.png")}
        />
        <ImageRebelsAircraft
          source={require("../../constants/images/aircraftrebels.png")}
        />

        <ViewAllFavorites>
          {favorites?.map((item, index) => (
            <ViewChar key={index}>
              <TitleChar>{item.name}</TitleChar>
              <ImageChar source={item.image} />
            </ViewChar>
          ))}
        </ViewAllFavorites>
      </ImageBg>
    </ScrollView>
  );
};

export default favorites;
