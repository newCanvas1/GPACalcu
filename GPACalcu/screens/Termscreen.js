import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import GpaSection from "../components/GpaSection/GpaSection";
import CoursesList from "../components/CoursesList/CoursesList";
import BackButton from "../components/Button/BackButton";
import CalcGpa from "../components/CalcGpa/CalcGpa";
import SaveButton from "../components/Button/SaveButton";
import { useContext } from "react";
import { ColorContext } from "../context";
const { height } = Dimensions.get("screen");
export default function Termscreen() {
  const { darkMode } = useContext(ColorContext);

  const styles = StyleSheet.create({
    container: {
      height: height,
      paddingHorizontal: 10,
      backgroundColor: darkMode?"black":"#ffffff",
    },
    contentContainer: { marginTop: 50 },
  });
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <BackButton />
        <CoursesList />
        <CalcGpa />
        <GpaSection />
        <SaveButton />
      </View>
    </View>
  );
}
