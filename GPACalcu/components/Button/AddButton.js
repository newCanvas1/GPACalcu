import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { MyContext, ColorContext } from "../../context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function AddButton() {
  const { coursesList, setCoursesList } = useContext(MyContext);
  const {darkMode } = useContext(ColorContext);

  function addCourse() {
    let newID = coursesList.length;
    setCoursesList([
      ...coursesList,
      {
        name: "",
        hours: 0,
        grade: "A+",
        id: newID,
      },
    ]);
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.addBtn}
      onPress={addCourse}
    >
      <Icon name="plus-box" size={30} color={darkMode?"#633573":"#006CD0"} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  addBtn: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
});
