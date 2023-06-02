import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CoursesList from "../components/CoursesList/CoursesList";
import BackButton from "../components/Button/BackButton";
export default function Termscreen() {
  // keep it to make a back button

  return (
      <View style={styles.container}>
        <BackButton/>
        <CoursesList />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop:100
  },
});
