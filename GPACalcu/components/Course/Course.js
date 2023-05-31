import { useState } from "react";
import { StyleSheet, Text, Dimensions, View, TextInput } from "react-native";
const { width } = Dimensions.get("screen");

export default function Course({ name, hours, grade }) {
  const [courseName, onChangeName] = useState(name);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={courseName}
        placeholder="Name"
      />
      <Text>dd</Text>
      <Text>dd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    height: 40,
    width: width - 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
