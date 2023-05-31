import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Course from "../components/Course/Course";
export default function Termscreen() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <Course />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
