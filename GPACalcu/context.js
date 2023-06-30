import React, { createContext, useState, useContext } from "react";
export const MyContext = createContext();
export const CourseContext = createContext();

export const MyContextProvider = ({ children }) => {
  const gpaSystemOptions = { five: 5, four: 4 };
  const [coursesList, setCoursesList] = useState([]);
  const [gpa, setGpa] = useState(0.0);
  const [gpaSystem, setGpaSystem] = useState(gpaSystemOptions.four);
  return (
    <MyContext.Provider
      value={{
        coursesList,
        setCoursesList,
        gpa,
        setGpa,
        gpaSystem,
        setGpaSystem,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const CourseContextProvider = ({ children }) => {
  const { coursesList, setCoursesList } = useContext(MyContext);
  function updateName(id, newName) {
    const newList = [...coursesList];
    for (let i = 0; i < newList.length; i++) {
      let ele = newList[i];
      if (ele.id == id) {
        ele.name = newName;
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
    let coursesWithoutDeleted = coursesList.filter((course) => {
      return course.id != id;
    });
    setCoursesList(coursesWithoutDeleted);
  }
  return (
    <CourseContext.Provider
      value={{
        updateName,
        updateGrade,
        updateHours,
        deleteCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
