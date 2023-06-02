import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Course from "../Course/Course";

export default function CoursesList() {
  const {width} = Dimensions.get("screen")
  // keep it to make a back button
  const navigation = useNavigation();

  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const storedList = await AsyncStorage.getItem("courses");
      if (storedList) {
        setCoursesList(JSON.parse(storedList));
      }
    };
    getList();
  }, []);

  function updateName(index, newName) {
    if (newName != undefined) {
      coursesList[index].name = newName;
      console.log(coursesList);
    }
  }

  function updateHours(index, newHours) {
    if (newHours != undefined) {
      coursesList[index].hours = newHours;
      console.log(coursesList);
    }
  }
  function updateGrade(index, newGrade) {
    if (newGrade != undefined) {
      coursesList[index].grade = newGrade;
      console.log(coursesList);
    }
  }

  const ItemSeparator = () => (
    <View
      style={{
        height: 4,
        backgroundColor: "transparent",
        marginVertical: 10,
      }}
    />
  );
  const renderItem = ({ item }) => (
    <Course
      updateName={updateName}
      updateHours={updateHours}
      updateGrade={updateGrade}
      key={item.id}
      id={item.id}
      name={item.name}
      hours={item.hours}
      grade={item.grade}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addBtn}
        onPress={() => {
          let newID = coursesList.length;
          setCoursesList([
            ...coursesList,
            {
              name: "",
              hours: "",
              grade: "",
              id: newID,
            },
          ]);
        }}
      >
        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
          +
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection:"row",width:width,justifyContent:"space-around",marginBottom:10}}>
      <Text> الدرجة</Text>
        <Text> الساعات</Text>
        <Text>اسم المادة</Text>
       
      </View>
      <FlatList
        data={coursesList}
        renderItem={renderItem}
        style={{ height: 300 }}
        ItemSeparatorComponent={ItemSeparator}
      />

      <TouchableOpacity
        activeOpacity={1}
        style={{ ...styles.addBtn, width: 80 }}
        onPress={async () => {
          await AsyncStorage.setItem("courses", JSON.stringify(coursesList));
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          احفظ
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: "blue",
    width: 30,
    alignItems: "center",
    borderTopLeftRadius: 30,
  },
});
