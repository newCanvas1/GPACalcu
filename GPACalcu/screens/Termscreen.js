import { StyleSheet, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CoursesList from "../components/CoursesList/CoursesList";

export default function Termscreen() {
  // keep it to make a back button
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        
        <CoursesList />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    marginTop:100
  },
});
