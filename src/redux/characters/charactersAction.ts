import axios from "axios";
import { images } from "../../constants";
import { CharacterProps } from "../../types";

export const loadAllCharacters = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/people");
    const result = data.results;
    const a3 = result.map((t1: any) => ({
      ...t1,
      ...images.find((t2) => t2.name === t1.name),
    }));

    dispatch({
      type: "LOAD",
      payload: { characters: a3 },
    });
  } catch (error) {
    dispatch({
      type: "Error",
      payload: error,
    });
  }
};

export const clickFavorite = (item: CharacterProps) => (dispatch: any) => {
  dispatch({
    type: "FAVORITES",
    payload: { favorite: { name: item.name, image: item.image } },
  });
};
