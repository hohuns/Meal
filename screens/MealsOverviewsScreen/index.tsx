import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import MealsList from "../MealsList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Types
type RootStackParamList = {
  DrawerScreen: undefined;
  MealsOverview: { categoryId: string } | undefined;
  MealDetails: { mealId: string; categoryId: string } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewsScreen = ({ route, navigation }: Props) => {
  const catId = route?.params?.categoryId;

  //Displaying selected meal
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId as string) >= 0;
  });

  // declaring title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES?.find((category) => category?.id === catId)?.title,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewsScreen;
