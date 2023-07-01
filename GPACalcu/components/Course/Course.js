import { useState, useContext } from "react";
import { colors } from "../../assets/color.js";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CourseContext, ColorContext } from "../../context.js";
import SelectDropdown from "react-native-select-dropdown";
import DeleteButton from "../Button/DeleteButton";
const { width } = Dimensions.get("screen");
const grades = ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];
export default function Course({ id, item }) {
  const [courseName, setName] = useState(item.name);
  const [courseHours, setHours] = useState(item.hours);
  const [courseGrade, setGrade] = useState(item.grade);
  const [clicked, setClicked] = useState(false);
  const { updateGrade, updateHours, updateName } = useContext(CourseContext);
  const { THEME, TEXT } = useContext(ColorContext);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 60,
      width: width - 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: THEME,
    },
    notClicked: { borderBottomRightRadius: 10 },
    clicked: { borderBottomRightRadius: 140 },

    nameHours: { flexDirection: "column" },
    row: { backgroundColor: THEME, borderRadius: 20, marginBottom: 10 },
    rowText: { color: TEXT, fontWeight: "bold" },
    selectedRow: { backgroundColor: "green" },
  });
  const styleClicked = [
    { ...styles.container },
    clicked ? { ...styles.clicked } : { ...styles.notClicked },
  ];

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setClicked((prev) => !prev);
        }}
      >
        <View style={styleClicked}>
          <View style={styles.nameHours}>
            <TextInput
              style={{ color: TEXT, fontWeight: "bold", fontSize: 20 }}
              onChangeText={(name) => {
                setName(name);
                updateName(id, name);
              }}
              value={courseName}
              defaultValue={courseName}
              placeholderTextColor={TEXT}
              placeholder="Name"
              keyboardType="ascii-capable"
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TextInput
                style={{ color: TEXT }}
                onChangeText={(hours) => {
                  setHours(hours);
                  updateHours(id, hours);
                }}
                value={`${courseHours}`}
                defaultValue={`${courseHours}`}
                placeholder="Hours"
                placeholderTextColor={TEXT}
                keyboardType="decimal-pad"
              />
              <Text style={{ color: TEXT }}>H</Text>
            </View>
          </View>
          <View>
            <SelectDropdown
              rowStyle={styles.row}
              rowTextStyle={styles.rowText}
              selectedRowStyle={styles.selectedRow}
              dropdownStyle={{ backgroundColor: "transparent" }}
              data={grades}
              buttonStyle={{
                backgroundColor: "transparent",
                width: 60,
                height: 30,
                opacity: 1,
                color: "white",
              }}
              buttonTextStyle={{ color: TEXT, fontWeight: "bold" }}
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
        </View>
      </TouchableOpacity>
      <DeleteButton clicked={clicked} id={id} />
    </>
  );
}
