import React from "react";
import { Pressable } from "react-native/";
import Ionicons from "@expo/vector-icons/Ionicons";

interface iconbuttonpropDataType {
  onPress: () => void;
  icon: any;
  color: string;
}
const IconButton = ({ onPress, icon, color }: iconbuttonpropDataType) => {
  return (
    <Pressable>
      <Ionicons name={icon as any} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
};

export default IconButton;
