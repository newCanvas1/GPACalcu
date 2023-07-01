import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TotalGpa } from "../../context";
export default function TotalGpaSection() {
  const { newGpa } = useContext(TotalGpa);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
         {isNaN(newGpa)?<Text>أدخل باقي المعلومات</Text>:newGpa}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#006CD0",
    padding: 10,
    width: "80%",
    borderRadius: 10,
    top:20
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
  },
});
