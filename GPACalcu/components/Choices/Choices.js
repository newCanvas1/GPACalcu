import { View, StyleSheet } from "react-native";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
export default function Choices() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonsContainer}>
      <Button
        text={"المعدل الفصلي"}
        action={() => {
          navigation.navigate("Term");
        }}
      />
      <Button
        text={"المعدل التراكمي"}
        action={() => {
          console.log("Clicked Total");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: "30%",
    alignItems: "center",
  },
});
