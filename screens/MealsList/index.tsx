import React from "react";
import { FlatList, View, StyleSheet } from "react-native/";
import MealItem from "../../components/MealItem";

const MealsList = ({ items }: any) => {
  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        id={itemData?.item?.id}
        title={itemData?.item?.title}
        imageUrl={itemData?.item?.imageUrl}
        affordability={itemData?.item?.affordability}
        complexity={itemData?.item?.complexity}
        duration={itemData?.item?.duration}
        // onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
