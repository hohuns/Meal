import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoriteScreen from "../../screens/FavoriteScreen";
import CategoriesScreen from "../../screens/CategoriesScreen";

// Types
type RootDrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1B9C85" }, //all background
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#4C4C6D" }, // background of contents
        drawerContentStyle: { backgroundColor: "#4C4C6D" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#1B9C85",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
