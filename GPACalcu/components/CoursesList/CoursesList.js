import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Course from "../Course/Course";

export default function CoursesList() {
  // keep it to make a back button
  const navigation = useNavigation();
  const [coursesList, setCoursesList] = useState([
    { name: "ICS", hours: "3", grade: "A", id: 0 },
    { name: "ICS", hours: "3", grade: "B", id: 1 },
  ]);

  let coursesElements = coursesList.map((course) => {
    return (
      <Course
        updateName={updateName}
        updateHours={updateHours}
        updateGrade={updateGrade}
        key={course.id}
        id={course.id}
        name={course.name}
        hours={course.hours}
        grade={course.grade}
      />
    );
  });
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

  return (
    <View style={styles.container}>
      <TouchableOpacity
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
        <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
          +
        </Text>
      </TouchableOpacity>

      {coursesElements}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
