import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { ColorContext } from "../../context";
export default function Header() {
  const { darkMode } = useContext(ColorContext);
  const styles = StyleSheet.create({
    headerContainer: {
      marginTop: "5%",
      marginBottom: "100%",
      position: "relative",
      left: "70%",
    },
    header: {
      color: darkMode?"#ffffff":"black",
      fontSize: 20,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>مرحبا بك 👋!</Text>
    </View>
  );
}
