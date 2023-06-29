import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DeleteButton({ id, deleteCourse,clicked }) {
 const deleteZindex = clicked ? 1 : -1;

  return (
    <TouchableOpacity
    style={[{...styles.button},{zIndex:deleteZindex}]}
      onPress={() => {
        deleteCourse(id);
      }}
    >
      <Icon name="delete" size={20} color={"#eb3434"} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    position: "absolute",
    transform: [{ translateY: 40 }, { translateX: 355 }],
  },
});
