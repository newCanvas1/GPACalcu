import { StyleSheet, View } from "react-native";
import GpaSection from "../components/GpaSection/GpaSection";
import CoursesList from "../components/CoursesList/CoursesList";
import BackButton from "../components/Button/BackButton";
import CalcGpa from "../components/CalcGpa/CalcGpa";
export default function Termscreen() {
  return (
    <View style={styles.container}>
      <BackButton />
      <CoursesList />
      <CalcGpa />
      <GpaSection />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
