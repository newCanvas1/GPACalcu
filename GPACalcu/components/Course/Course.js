import { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("screen");
const grades = ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

export default function Course({
  id,
  updateName,
  updateHours,
  updateGrade,
  deleteCourse,
  item,
}) {
  const [courseName, setName] = useState(item.name);
  const [courseHours, setHours] = useState(item.hours);
  const [courseGrade, setGrade] = useState(item.grade);
  const [clicked, setClicked] = useState(false);

  const styleClicked = [
    { ...styles.container },
    clicked ? { ...styles.clicked } : { ...styles.notClicked },
  ];

  deleteZindex = clicked ?  1  :-1 ;
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setClicked((prev) => !prev);
        }}
      >
        <View style={styleClicked}>
          <View style={styles.nameHours}>
            <TextInput
              style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              onChangeText={(name) => {
                setName(name);
                updateName(id, name);
              }}
              value={courseName}
              defaultValue={courseName}
              placeholderTextColor={"white"}
              placeholder="Name"
              keyboardType="ascii-capable"
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TextInput
                style={{ color: "white" }}
                onChangeText={(hours) => {
                  setHours(hours);
                  updateHours(id, hours);
                }}
                value={courseHours}
                defaultValue={courseHours}
                placeholder="Hours"
                keyboardType="decimal-pad"
              />
              <Text style={{ color: "white" }}>H</Text>
            </View>
          </View>
          <View>
            <SelectDropdown
              data={grades}
              buttonStyle={{
                backgroundColor: "transparent",
                width: 60,
                height: 30,
                opacity: 1,
                color: "white",
              }}
              buttonTextStyle={{ color: "white", fontWeight: "bold" }}
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

      <TouchableOpacity
        style={{
          position: "absolute",
          transform: [{ translateY: 40 }, { translateX: 355 }],
          zIndex: deleteZindex,
        }}
        onPress={() => {
          deleteCourse(id);
        }}
      >
        <Icon name="delete" size={20} color={"#eb3434"} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    width: width - 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#006CD0",
  },
  notClicked: { borderBottomRightRadius: 10 },
  clicked: { borderBottomRightRadius: 140 },

  nameHours: { flexDirection: "column" },
});
