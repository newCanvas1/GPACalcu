import { StyleSheet,SafeAreaView } from "react-native";
import Header from "../components/Header/Header";
import Choices from "../components/Choices/Choices";
import { ColorContext } from "../context";
import { useContext } from "react";
export default function Homescreen() {
  const { BACKGROUND } = useContext(ColorContext);

  const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor:BACKGROUND
    },
  });
  
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Header />
      <Choices />
    </SafeAreaView>
  );
}
