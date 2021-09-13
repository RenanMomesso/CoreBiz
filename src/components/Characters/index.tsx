import { BlurView } from "expo-blur";
import React from "react";
import { Animated } from "react-native";
import {
  CharacterButton,
  ImageCharacter,
  InformationsText,
  TextTitle,
  ViewCharInformations,
} from "./styles";
import { CharacterProps } from "../../types";

const Characters: React.FC<{
  item: CharacterProps;
  index: number;
  navigation: any;
  scrollY: any;
}> = ({ item, index, navigation, scrollY }) => {
  const handleCharacterInformation = (item: object) => {
    navigation.navigate("character", {
      item,
    });
  };

  const inputRange = [-1, 0, 210 * index, 210 * (index + 2)];
  const opacityRange = [-1, 0, 210 * index, 210 * (index + 1)];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });
  const opacity = scrollY.interpolate({
    inputRange: opacityRange,
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Animated.View style={{ transform: [{ scale }], opacity }}>
      <BlurView
        tint="default"
        intensity={40}
        style={{
          borderRadius: 10,
          height: 200,
          width: "95%",
          alignSelf: "center",
          marginBottom: 25,
        }}
      >
        <CharacterButton onPress={() => handleCharacterInformation(item)}>
          <ImageCharacter source={item.image} resizeMode="cover" />
          <ViewCharInformations>
            <TextTitle>{item.name}</TextTitle>
            <InformationsText>Eyes color: {item.eye_color}</InformationsText>
            <InformationsText>Skin color: {item.skin_color}</InformationsText>
          </ViewCharInformations>
        </CharacterButton>
      </BlurView>
    </Animated.View>
  );
};

export default Characters;
