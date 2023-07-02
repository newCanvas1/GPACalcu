import React, { createContext, useState, useContext, useMemo, useEffect } from "react";
export const MyContext = createContext();
export const CourseContext = createContext();
export const TotalGpa = createContext();
export const ColorContext = createContext();

export const MyContextProvider = ({ children }) => {
  const gpaSystemOptions = { five: 5.0, four: 4.0 };
  const [coursesList, setCoursesList] = useState([]);
  const [gpa, setGpa] = useState(0.0);
  const [gpaSystem, setGpaSystem] = useState(gpaSystemOptions.four);
  const [enterHours, setEnterHours] = useState(false);
  useMemo(() => {
    setEnterHours(false);
    for (let i = 0; i < coursesList.length; i++) {
      let course = coursesList[i];
      if (course.hours == 0) {
        setEnterHours(true);
      }
    }
  }, [coursesList]);

  return (
    <MyContext.Provider
      value={{
        coursesList,
        setCoursesList,
        gpa,
        setGpa,
        gpaSystem,
        setGpaSystem,
        enterHours,
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

export const TotalGpaProvider = ({ children }) => {
  const [oldGpa, setOldGpa] = useState(0.0);
  const [oldHours, setOldHours] = useState(0.0);
  const [newGpa, setNewGpa] = useState(0.0);

  return (
    <TotalGpa.Provider
      value={{ oldGpa, setOldGpa, oldHours, setOldHours, setNewGpa, newGpa }}
    >
      {children}
    </TotalGpa.Provider>
  );
};

export const ColorContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
useEffect(()=>{},[darkMode])
  if (darkMode) {
    var [THEME] = useState("#006CD0");
    var [TEXT] = useState("#006CD0");
    var [BACKGROUND] = useState("#ffffff");
  } else {
    var [THEME] = useState("#633573");
    var [TEXT] = useState("#ffffff");
    var [BACKGROUND] = useState("black");
  }
  return (
    <ColorContext.Provider value={{ THEME, TEXT, BACKGROUND,darkMode,setDarkMode}}>
      {children}
    </ColorContext.Provider>
  );
};
