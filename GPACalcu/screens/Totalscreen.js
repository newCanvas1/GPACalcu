import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import CoursesList from "../components/CoursesList/CoursesList";
import BackButton from "../components/Button/BackButton";
import SaveButton from "../components/Button/SaveButton";
const { height } = Dimensions.get("screen");
import { TotalGpaProvider } from "../context";
import Inputs from "../components/TotalInputs/Inputs";
import TotalGpaSection from "../components/TotalGpaSection/TotalGpaSection";
export default function Totalscreen() {
  return (
    <TotalGpaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <BackButton />
          <CoursesList />
          <SaveButton total={true} />
          <Inputs />
          <TotalGpaSection/>
        </View>
      </SafeAreaView>
    </TotalGpaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    height: height,
    paddingHorizontal: 10,
  },
});
