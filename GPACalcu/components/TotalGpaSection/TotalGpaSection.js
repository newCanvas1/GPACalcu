import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TotalGpa, MyContext, ColorContext } from "../../context";
export default function TotalGpaSection() {
  const { newGpa } = useContext(TotalGpa);
  const { coursesList, enterHours } = useContext(MyContext);
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
        {coursesList.length == 0 ? (
          <Text> أدخل مواد 📚 </Text>
        ) : enterHours ? (
          <Text> أدخل ساعات ⏱️ </Text>
        ) : isNaN(newGpa) ? (
          <Text>أدخل باقي المعلومات</Text>
        ) : (
          newGpa
        )}
      </Text>
    </View>
  );
}
