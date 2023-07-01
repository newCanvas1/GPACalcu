import { gradesPoints } from "./screens/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function calculateTotalHours(coursesList) {
  let total = 0;
  for (let i = 0; i < coursesList.length; i++) {
    let courseH = coursesList[i].hours;
    if (courseH == " ") {
      courseH = 0;
    }
    let currentCourseHours = parseInt(courseH);

    total += currentCourseHours;
  }

  return total;
}

async function calculateEarnedHours(coursesList, gradesPoints) {
  let total = 0;
  for (let i = 0; i < coursesList.length; i++) {
    let currentCourseGrade = coursesList[i].grade;
    let currentCourseHours = coursesList[i].hours;

    for (let i = 0; i < gradesPoints.length; i++) {
      let gradeObj = gradesPoints[i];
      if (currentCourseGrade === gradeObj.grade) {
        let earnedHours = gradeObj.points;
        let earned = (earnedHours * currentCourseHours) / 4;
        total += earned;
      }
    }
  }
  return total;
}

async function calculateGpa(coursesList, system) {
  let totalHours = await calculateTotalHours(coursesList);
  let totalEarned = await calculateEarnedHours(coursesList, gradesPoints);
  const newGpa = ((totalEarned / totalHours) * system).toFixed(2);
  return newGpa;
}
async function getNewGpa(oldGpa, oldHours, coursesList, system) {
  let totalHours = await calculateTotalHours(coursesList);
  let totalEarned = await calculateEarnedHours(coursesList, gradesPoints);
  let earned = (parseFloat( oldGpa) * parseFloat( oldHours)) / parseFloat( system);

  const hours = parseFloat(totalHours) + parseFloat(oldHours);
  earned += parseFloat(totalEarned);
  const newGpa = ((parseFloat(earned) / hours) * system).toFixed(2); 
   console.log(newGpa)

  return newGpa;
}

async function getFromStorage(key) {
  const storedList = await AsyncStorage.getItem(key);
  if (storedList) {
    return storedList;
  } else {
    return "Not Found";
  }
}

module.exports = {
  calculateTotalHours,
  calculateEarnedHours,
  calculateGpa,
  getFromStorage,
  getNewGpa,
};
