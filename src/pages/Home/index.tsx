import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadAllCharacters } from "../../redux/characters/charactersAction";
import Characters from "../../components/Characters";
import Footer from "../../components/Footer";

interface HomeProps {
  navigation: any;
}

const Home = ({ navigation }: HomeProps) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollToTopWhenInit = useRef<FlatList>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllCharacters());
    scrollToTopWhenInit.current?.scrollToOffset({ offset: 10 });
  }, []);

  const { characters } = useSelector((state: any) => state.characters);

  if (!characters)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <ImageBackground
        source={require("../../constants/images/starwarsbg.jpg")}
        style={[StyleSheet.absoluteFill]}
      >
        <Animated.FlatList
          ref={scrollToTopWhenInit}
          data={characters}
          style={{ marginTop: 40 }}
          ListFooterComponent={() => (
            <Footer scrollToTopWhenInit={scrollToTopWhenInit} />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item, index }) => (
            <Characters
              item={item}
              index={index}
              navigation={navigation}
              scrollY={scrollY}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default Home;
