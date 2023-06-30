import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MyContext } from "../../context";
export default function GpaSection() {
  const { gpa } = useContext(MyContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{gpa}</Text>
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
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
  },
});
