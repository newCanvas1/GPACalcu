import { gradesPoints } from "./screens/constants";

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

module.exports = { calculateTotalHours, calculateEarnedHours, calculateGpa };
