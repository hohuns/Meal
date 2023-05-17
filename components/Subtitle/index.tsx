import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface subtitlePropDataType {
  children: any;
}
const Subtitle = ({ children }: subtitlePropDataType) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles?.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
