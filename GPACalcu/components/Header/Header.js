import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>مرحبا بك 👋!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: "5%",
    marginBottom: "100%",
    position: "relative",
    left: "70%",
  },
  header: {
    fontSize: 20,
  },
});
