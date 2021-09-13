const initialState = {
  characters: [],
  favorites: [
    {
      name: "random",
      image: 2,
    },
  ],
};

const charactersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOAD":
      return { ...state, characters: action.payload.characters };

    case "FAVORITES": {
      let favorites = [...state.favorites];
      let name = action.payload.favorite.name;
      let index = favorites.findIndex((item) => item.name == name);
      if (index > -1) {
        favorites.splice(index, 1);
      } else {
        favorites.push(action.payload.favorite);
      }

      console.log(favorites);
      return { ...state, favorites };
    }
    default:
      return state;
  }
};

export default charactersReducer;
