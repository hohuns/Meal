import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTitle from "../../components/CategoryGridTitle";
import { FlatList } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

// Types
type RootDrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

type Props = DrawerScreenProps<RootDrawerParamList, "Categories">;

const CategoriesScreen = ({ navigation }: Props) => {
  const navigator = useNavigation();
  const renderCategoryItem = (itemData: any) => {
    //navigation
    const pressHandler = () => {
      navigator.navigate(
        "MealsOverview" as never,
        { categoryId: itemData?.item?.id } as never //passing prop by nevigationg to meals overview screen
      );
    };

    return (
      <CategoryGridTitle
        title={itemData?.item?.title ?? "None"}
        color={itemData?.item?.color ?? "None"}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      key="categories"
      keyExtractor={(item: any) => item.id}
      numColumns={2}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
