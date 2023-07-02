import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "blue", opacity: 0 },
  input: {
    border: 10,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    textAlign: "right",
    borderRadius: 10,
    width: 100,
    alignSelf: "center",
  },
  label: {
    alignSelf: "center",
    padding: 4,
    borderRadius: 10,
  },
});
module.exports = { styles };
