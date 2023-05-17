import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

// Types
interface CategoryGridTitlePropType {
  title?: string;
  color?: string;
  onPress?: () => void;
}

const CategoryGridTitle = ({
  title,
  color,
  onPress,
}: CategoryGridTitlePropType) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: color }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, //pressed then change opacity
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: { flex: 1 },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
