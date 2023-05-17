import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewsScreen from "./screens/MealsOverviewsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import store from "./store/store";
import { Provider } from "react-redux";
import DrawerNavigator from "./components/DrawerNavigator";

//Types
type RootStackParamList = {
  DrawerScreen: undefined;
  MealsOverview: { categoryId: string } | undefined;
  MealDetails: { mealId: string; categoryId: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              title: "All Categories",
              headerStyle: { backgroundColor: "#1B9C85" }, //all background
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#4C4C6D" }, // background of contents
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewsScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
