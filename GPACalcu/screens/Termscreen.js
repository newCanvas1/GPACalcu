import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useEffect, useState } from "react";
import CoursesList from "../components/CoursesList/CoursesList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackButton from "../components/Button/BackButton";
export default function Termscreen() {
  // keep it to make a back button
  const gradesPoints = [
    { grade: "A+", points: 4 },
    { grade: "A", points: 3.75 },
    { grade: "B+", points: 3.5 },
    { grade: "B", points: 3 },
    { grade: "C+", points: 2.5 },
    { grade: "C", points: 2 },
    { grade: "D+", points: 1.5 },
    { grade: "D", points: 1 },
    { grade: "F", points: 0 },
  ];

  const gpaSystem = { five: 5, four: 4 };
  const [coursesList, setCoursesList] = useState([]);

  const [totalHours, setTotalHours] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);

  const [gpa, setGpa] = useState(0);

  function calculateTotalHours() {
    setTotalHours(0);

    for (let i = 0; i < coursesList.length; i++) {
      let currentCourseHours = parseInt(coursesList[i].hours);
      setTotalHours((prev) => {
        return prev + currentCourseHours;
      });
    }
  }
  function calculateEarnedHours() {
    setTotalEarned(0);

    for (let i = 0; i < coursesList.length; i++) {
      let currentCourseGrade = coursesList[i].grade;
      let currentCourseHours = coursesList[i].hours;

      for (let i = 0; i < gradesPoints.length; i++) {
        let gradeObj = gradesPoints[i];
        if (currentCourseGrade === gradeObj.grade) {
          let earnedHours = gradeObj.points;
          let earned = (earnedHours * currentCourseHours) / 4;
          setTotalEarned((prev) => {
            return prev + earned;
          });
        }
      }
    }
  }

  async function calculateGpa() {
    calculateTotalHours();
    calculateEarnedHours();
    console.log(totalEarned);
    console.log(totalHours);

    const newGpa = ((totalEarned / totalHours) * gpaSystem.four).toFixed(2);
    setGpa(((totalEarned / totalHours) * gpaSystem.four).toFixed(2));
    console.log(newGpa);
  }

  return (
    <View style={styles.container}>
      <BackButton />
      <CoursesList coursesList={coursesList} setCoursesList={setCoursesList} />
      <TouchableOpacity style={{ alignSelf: "center" }} onPress={calculateGpa}>
        <Text>احسب</Text>
      </TouchableOpacity>
      <Text style={{ alignSelf: "center" }}>
        {gpa == 0 ? <></> : <>GPA {gpa}</>}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
