import { StyleSheet, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import Course from "../Course/Course";
import SaveButton from "../Button/SaveButton";
import AddButton from "../Button/AddButton";
export default function CoursesList({ coursesList, setCoursesList }) {
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
      item={item}
      deleteCourse={deleteCourse}
    />
  );

  return (
    <View style={styles.container}>
      <AddButton coursesList={coursesList} setCoursesList={setCoursesList} />

      <FlatList
        data={coursesList}
        renderItem={renderItem}
        style={{ height: 300 }}
        ItemSeparatorComponent={ItemSeparator}
      />
      <SaveButton coursesList={coursesList} />
      <View style={{ flex: 1 }}></View>
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
