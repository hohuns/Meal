import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";

interface mealItemPorpDataType {
  id: number;
  title: string;
  imageUrl: string;
  duration: number;
  affordability: string;
  complexity: string;
  // onPress: () => void;
}

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: // onPress,
mealItemPorpDataType) => {
  const navigation = useNavigation(); //same as navigation props from registered stack components

  return (
    <View style={styles?.mealItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        // onPress={onPress}
        onPress={() =>
          navigation.navigate("MealDetails" as never, { mealId: id } as never)
        }
      >
        <View style={styles?.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <MealDetails
              duration={duration}
              affordability={affordability}
              complexity={complexity}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: { width: "100%", height: 200 },
  title: { fontWeight: "bold", textAlign: "center", fontSize: 18, margin: 8 },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
