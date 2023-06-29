import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Course from "../Course/Course";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const coureseHeight = 40;
export default function CoursesList({ coursesList, setCoursesList }) {
  const { width } = Dimensions.get("screen");
  // keep it to make a back button
  const navigation = useNavigation();

  useEffect(() => {
    const getList = async () => {
      const storedList = await AsyncStorage.getItem("courses");
      if (storedList) {
        setCoursesList(JSON.parse(storedList));
      }
    };
    getList();
  }, []);

  function updateName(id, newName) {
    const newList = [...coursesList];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        newList[i].name = newName;
      }
    }
    setCoursesList(newList);
  }

  function updateHours(id, newHours) {
    const newList = [...coursesList];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        newList[i].hours = newHours;
      }
    }
    setCoursesList(newList);
  }
  function updateGrade(id, newGrade) {
    const newList = [...coursesList];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        newList[i].grade = newGrade;
      }
    }
    setCoursesList(newList);
  }
  function deleteCourse(id) {
    console.log("Delete", id);
    let coursesWithoutDeleted = coursesList.filter((course) => {
      return course.id != id;
    });
    setCoursesList(coursesWithoutDeleted);
    console.log(coursesWithoutDeleted);
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
      deleteCourse={deleteCourse}
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
              hours: 0,
              grade: 'A+',
              id: newID,
            },
          ]);
        }}
      >
        <Text style={{ color: "blue", fontSize: 30, fontWeight: "bold" }}>
          +
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          width: width,
          justifyContent: "space-around",
          marginBottom: 10,
        }}
      >
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
        style={{ ...styles.addBtn, width: 60,}}
        onPress={async () => {
          await AsyncStorage.setItem("courses", JSON.stringify(coursesList));
        }}
      >
        <Icon name="content-save-check" size={30} color="blue" />
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
    width: 30,
    alignItems: "center",
    borderTopLeftRadius: 30,
  },
});
