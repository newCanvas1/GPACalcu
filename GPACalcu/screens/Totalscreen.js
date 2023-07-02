import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import CoursesList from "../components/CoursesList/CoursesList";
import BackButton from "../components/Button/BackButton";
import SaveButton from "../components/Button/SaveButton";
const { height } = Dimensions.get("screen");
import { TotalGpaProvider } from "../context";
import Inputs from "../components/TotalInputs/Inputs";
import TotalGpaSection from "../components/TotalGpaSection/TotalGpaSection";
import { ColorContext } from "../context";
import { useContext } from "react";
export default function Totalscreen() {
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
    <TotalGpaProvider>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <BackButton />
          <CoursesList />
          <SaveButton total={true} />
          <Inputs />
          <TotalGpaSection />
        </View>
      </View>
    </TotalGpaProvider>
  );
}
