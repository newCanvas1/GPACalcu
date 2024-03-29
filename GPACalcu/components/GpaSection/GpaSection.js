import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MyContext, ColorContext } from "../../context";
export default function GpaSection() {
  const { gpa, coursesList, enterHours } = useContext(MyContext);
  const { darkMode } = useContext(ColorContext);
  const styles = StyleSheet.create({
    container: {
      alignSelf: "center",
      backgroundColor: darkMode?"#633573":"#006CD0",
      padding: 10,
      width: "80%",
      borderRadius: 10,
      top: 20,
    },
    text: {
      color: "#ffffff",
      fontWeight: "bold",
      alignSelf: "center",
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {coursesList.length == 0
          ? " أدخل مواد 📚"
          : enterHours
          ? " أدخل ساعات ⏱️"
          : gpa}
      </Text>
    </View>
  );
}
