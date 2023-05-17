import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../MealsList";
import { MEALS } from "../../data/dummy-data";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { DrawerScreenProps } from "@react-navigation/drawer";

type RootDrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

type Props = DrawerScreenProps<RootDrawerParamList, "Categories">;

const FavoriteScreen = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const favoriteMealIds = useAppSelector((state) => state?.favorite?.ids);
  const favoriteMeals = MEALS?.filter((meal) =>
    favoriteMealIds?.includes(meal.id)
  );

  return favoriteMeals.length === 0 ? (
    <View style={styles?.container}>
      <Text style={styles?.text}>You have no favorite meals yet.</Text>
    </View>
  ) : (
    <MealsList items={favoriteMeals} />
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
