import { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Snackbar } from "@react-native-material/core";

export default function SaveButton({ coursesList }) {
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={{ ...styles.addBtn, width: 60 }}
        onPress={async () => {
          await AsyncStorage.setItem("courses", JSON.stringify(coursesList));
          setShowSaveNotification(true);
          setTimeout(() => {
          setShowSaveNotification(false);
            
          }, 2000);
        }}
      >
        <Icon name="content-save-check" size={30} color="blue" />
      </TouchableOpacity>
      {showSaveNotification ? (
        <Snackbar
          message="Saved"
          style={{ height: 50, width: 100,top:-30,position:"absolute" }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  addBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    width: 30,
    alignItems: "center",
    borderTopLeftRadius: 30,
  },
});