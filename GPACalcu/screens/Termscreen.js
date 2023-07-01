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
  const { BACKGROUND } = useContext(ColorContext);

  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      height: height,
      paddingHorizontal: 10,
      backgroundColor: BACKGROUND,
    },
  });
  return (
    <View style={styles.container}>
      <BackButton />
      <CoursesList />
      <CalcGpa />
      <GpaSection />
      <SaveButton />
    </View>
  );
}
