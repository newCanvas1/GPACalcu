import { useState } from "react";
import { StyleSheet, Text, Dimensions, View, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const { width } = Dimensions.get("screen");
const grades = ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

export default function Course({
  id,
  updateName,
  updateHours,
  updateGrade,
  name,
  hours,
  grade,
}) {
  const [courseName, setName] = useState(name);
  const [courseHours, setHours] = useState(hours);
  const [courseGrade, setGrade] = useState(grade);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(name) => {
          setName(name);
          updateName(id, name);
        }}
        value={courseName}
        defaultValue={courseName}
        placeholder="Name"
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={(hours) => {
          setHours(hours);
          updateHours(id, hours);
        }}
        value={courseHours}
        defaultValue={courseHours}
        placeholder="Hours"
        keyboardType="decimal-pad"
      />
      <SelectDropdown
        data={grades}
        buttonStyle={{ backgroundColor: "transparent", width: 100, height: 30 }}
        onSelect={(grade, index) => {
          setGrade(grade);
          updateGrade(id, grade);
        }}
        defaultButtonText={courseGrade || "Grade"}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    width: width - 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});