import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import GpaSection from "../components/GpaSection/GpaSection";
import CoursesList from "../components/CoursesList/CoursesList";
import BackButton from "../components/Button/BackButton";
import CalcGpa from "../components/CalcGpa/CalcGpa";
import SaveButton from "../components/Button/SaveButton";
const { height } = Dimensions.get("screen");
export default function Termscreen() {
  
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <BackButton />
        <CoursesList />
        <CalcGpa />
        <GpaSection />
        <SaveButton />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: height,
    paddingHorizontal: 10,
  },
});
