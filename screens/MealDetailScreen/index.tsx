import React, { useLayoutEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../../data/dummy-data";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { favoriteActions } from "../../store/favoriteSlice";
import MealDetails from "../../components/MealDetails";
import Subtitle from "../../components/Subtitle";
import List from "../../components/List";
import IconButton from "../../components/IconButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Types
type RootStackParamList = {
  DrawerScreen: undefined;
  MealsOverview: { categoryId: string } | undefined;
  MealDetails: { mealId: string; categoryId: string } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "MealDetails">;

const MealDetailScreen = ({ route, navigation }: Props) => {
  const dispatch = useAppDispatch();
  const favoriteMealIds = useAppSelector((state) => state?.favorite?.ids);
  const mealId = route?.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds?.includes(mealId as string);

  const changeFavoriteStatusButtonHandler = () => {
    if (mealIsFavorite) {
      dispatch(favoriteActions?.removeFavorite(mealId as string));
    } else {
      dispatch(favoriteActions?.addFavorite(mealId as string));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusButtonHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusButtonHandler]);

  return (
    <ScrollView style={styles?.rootContainer}>
      <Image style={styles?.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles?.title}>{selectedMeal?.title}</Text>
      <MealDetails
        affordability={selectedMeal!?.affordability}
        duration={selectedMeal!?.duration}
        complexity={selectedMeal!?.complexity}
        textStyle={styles?.detailText}
      />
      <View style={styles?.listOuterContainer}>
        <View style={styles?.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: { width: "100%", height: 350 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
