import { StyleSheet, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useContext } from "react";
import Course from "../Course/Course";
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
     
          <FlatList
            data={coursesList}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
          />
       
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height:300
  },
});
