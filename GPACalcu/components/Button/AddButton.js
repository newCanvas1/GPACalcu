import { TouchableOpacity, StyleSheet, Text } from "react-native";
export default function AddButton({ coursesList, setCoursesList }) {
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
      <Text style={{ color: "white" }}>+</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  addBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 40,
  },
});
