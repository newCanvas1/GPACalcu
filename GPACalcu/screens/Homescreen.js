import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export default function Homescreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          text={"Term"}
          action={() => {
            navigation.navigate("Term");
          }}
        />
        <Button
          text={"Total"}
          action={() => {
            console.log("Clicked Total");
          }}
        />
      </View>
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
  buttonsContainer: {
    flexDirection: "row",
    gap: 50,
  },
});
