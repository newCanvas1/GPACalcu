import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { ColorContext } from "../../context";
export default function BackButton() {
  const { darkMode } = useContext(ColorContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      activeOpacity={1}
    >
      <Icon name="arrow-left" size={30} color={darkMode?"#633573":"#006CD0"} />
    </TouchableOpacity>
  );
}
