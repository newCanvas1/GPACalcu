import { StyleSheet, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useContext } from "react";
import Course from "../Course/Course";
import SaveButton from "../Button/SaveButton";
import AddButton from "../Button/AddButton";
import { MyContext } from "../../context";

export default function CoursesList() {
  const { coursesList, setCoursesList } = useContext(MyContext);
  useEffect(() => {
    const getList = async () => {
      const storedList = await AsyncStorage.getItem("courses");
      if (storedList) {
        setCoursesList(JSON.parse(storedList));
      }
    };
    getList();
  }, []);

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
    <Course key={item.id} id={item.id} item={item} />
  );

  return (
    <View style={styles.container}>
      <AddButton />
      {coursesList != 0 && (
        <>
          <FlatList
            data={coursesList}
            renderItem={renderItem}
            style={{ height: 300 }}
            ItemSeparatorComponent={ItemSeparator}
          />
          <SaveButton />
        </>
      )}

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
