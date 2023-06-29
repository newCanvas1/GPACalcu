import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useEffect, useState } from "react";
import GpaSection from "../components/GpaSection/GpaSection";
import CoursesList from "../components/CoursesList/CoursesList";
import BackButton from "../components/Button/BackButton";
import CalcGpa from "../components/CalcGpa/CalcGpa";

export default function Termscreen() {
  const gpaSystem = { five: 5, four: 4 };
  const [coursesList, setCoursesList] = useState([]);
  const [gpa, setGpa] = useState(0.0);

  return (
    <View style={styles.container}>
      <BackButton />
      <CoursesList coursesList={coursesList} setCoursesList={setCoursesList} />

      <CalcGpa
        coursesList={coursesList}
        setGpa={setGpa}
        system={gpaSystem.four}
      />
      <GpaSection gpa={gpa} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
