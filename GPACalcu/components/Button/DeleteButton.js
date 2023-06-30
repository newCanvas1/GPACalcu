import { useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CourseContext } from "../../context";
export default function DeleteButton({ id, clicked }) {
  const deleteZindex = clicked ? 1 : -1;
  const { deleteCourse } = useContext(CourseContext);
  return (
    <TouchableOpacity
      style={[{ ...styles.button }, { zIndex: deleteZindex }]}
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
