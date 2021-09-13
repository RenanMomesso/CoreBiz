import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { clickFavorite } from "../../redux/characters/charactersAction";
import { AntDesign } from "@expo/vector-icons";
import {
  ImageBgPlanet,
  ImageCharacter,
  MainScrollView,
  TextDescription,
  TextGoBack,
  TitleTextName,
  TouchableFavorite,
  TouchableGoBack,
  ViewImage,
  ViewWrapperInfo,
} from "./styles";
import { CharacterProps } from "../../types";

interface CharProps {
  navigation: any;
  route: {
    params: {
      item: CharacterProps;
    };
  };
}

const Character: React.FC<CharProps> = ({ route, navigation }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const dispatch = useDispatch();

  const favorites = useSelector((state: any) => state.characters.favorites);

  const handleFavoriteExist = () => {
    const verifyEqual = favorites.find((char: CharacterProps) => {
      return char.name == route.params.item.name;
    });
    const likedExist = verifyEqual?.name == route.params.item.name;
    setLiked(likedExist);
  };

  const handleClickFavorite = () => {
    dispatch(clickFavorite(route.params.item));
    alert(liked ? "Removed from favorites" : "Added to favorites");
  };

  useEffect(() => {
    handleFavoriteExist();
  }, [favorites, route.params.item]);

  return (
    <>
      <TouchableGoBack onPress={() => navigation.goBack()}>
        <TextGoBack>Back</TextGoBack>
      </TouchableGoBack>
      <MainScrollView>
        <ImageBgPlanet
          source={require("../../constants/images/backgroundCharacter.jpg")}
          resizeMode="cover"
        >
          <ViewImage>
            <TouchableFavorite onPress={handleClickFavorite}>
              <AntDesign
                name="heart"
                size={24}
                color={liked ? "yellow" : "white"}
              />
            </TouchableFavorite>

            <ImageCharacter
              source={route.params.item.image}
              resizeMode="contain"
            />
            <TitleTextName>{route.params.item.name}</TitleTextName>
          </ViewImage>

          <ViewWrapperInfo>
            <TextDescription>
              Eyes Colors: {route.params.item.eye_color}
            </TextDescription>
            <TextDescription>
              Skin Color: {route.params.item.skin_color}
            </TextDescription>
            <TextDescription>
              Birth year: {route.params.item.birth_year}
            </TextDescription>
            <TextDescription>
              Gender: {route.params.item.gender}
            </TextDescription>
            <TextDescription>
              Height: {route.params.item.height}
            </TextDescription>
            <TextDescription>Mass: {route.params.item.mass}</TextDescription>
          </ViewWrapperInfo>
        </ImageBgPlanet>
      </MainScrollView>
    </>
  );
};

export default Character;
