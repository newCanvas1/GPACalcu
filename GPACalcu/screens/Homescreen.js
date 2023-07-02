import { StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header/Header";
import Choices from "../components/Choices/Choices";
import { ColorContext } from "../context";
import { useContext } from "react";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";
export default function Homescreen() {
  const { darkMode } = useContext(ColorContext);

  const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: darkMode ? "black" : "#ffffff",
    },
  });

  return (
    <SafeAreaView style={styles.homeContainer}>
      <DarkModeToggle />

      <Header />

      <Choices />
    </SafeAreaView>
  );
}
