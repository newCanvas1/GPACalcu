import { StyleSheet,SafeAreaView } from "react-native";
import Header from "../components/Header/Header";
import Choices from "../components/Choices/Choices";
export default function Homescreen() {

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Header />
      <Choices />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
