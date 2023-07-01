import { useState, useContext } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Snackbar } from "@react-native-material/core";
import { MyContext,TotalGpa } from "../../context";

export default function SaveButton({total}) {
  const { coursesList } = useContext(MyContext);
  if (total) {
      var { oldGpa,oldHours } = useContext(TotalGpa);

  }

  const [showSaveNotification, setShowSaveNotification] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addBtn}
        onPress={async () => {
          await AsyncStorage.setItem("courses", JSON.stringify(coursesList));
          if (total) {
         await AsyncStorage.setItem("oldGpa", JSON.stringify(oldGpa));
          await AsyncStorage.setItem("oldHours", JSON.stringify(oldHours));
        }
       


          setShowSaveNotification(true);
          setTimeout(() => {
            setShowSaveNotification(false);
          }, 2000);
        }}
      >
        <Icon name="content-save-check" size={30} color="#006CD0" />
      </TouchableOpacity>
      {showSaveNotification ? (
        <Snackbar
          message="Saved"
          action={
            <Text>
              <Icon name="check" size={20} color={"#ffffff"} />
            </Text>
          }
          style={{
            height: 50,
            width: 100,
            position: "absolute",
            alignSelf:"center",
            backgroundColor: "green",
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  addBtn: {
    alignSelf:"flex-end"
    ,bottom:-300
  },
});
